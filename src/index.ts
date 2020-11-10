import * as fs from 'fs'
import * as path from 'path'
import * as express from 'express'

const NUMBER_CAST_INDICATOR = '(number)'

const getDirs = (p: string) => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory())
const getFiles = (p: string) => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isFile())

export interface RestApiFyParams {
  entryFolder: string
  port?: number
  apiPrefix?: string
}

class RestApiFy {
  protected server: express.Express
  public entryFolderPath: string
  public port: number
  public entryFolderFullPath: string
  public apiPrefix: string

  constructor({
      entryFolder,
      port = 6767,
      apiPrefix = '/api'
    }: RestApiFyParams) {
      this.entryFolderPath = entryFolder
      this.entryFolderFullPath = path.resolve(__dirname, entryFolder)
      this.port = port
      this.apiPrefix = apiPrefix

      this.check()
      this.configServer()
      this.run()
  }

  private configServer = (): void => {
    this.server = express()
    this.configFolder(this.entryFolderPath)
  }

  private check = (): void => {
    this.checkEntryFolder()
  }

  private checkEntryFolder = (): void => {
    const folderExists = fs.existsSync(this.entryFolderFullPath)
    if (!folderExists) {
      this.logError(`Folder ${this.entryFolderPath}`)
    }
  }

  private configFolder = (folderPath: string): void => {
    const dirs = getDirs(folderPath)
    const files = getFiles(folderPath)
  
    files.forEach(filename => {
      this.configFile(path.resolve(folderPath, filename), filename)
    })
  
    dirs.forEach(dir => {
      this.configFolder(path.resolve(folderPath, dir))
    })
  }

  private getNumbersToCast = (str: string): string[] => {
    const re = /\"\(number\)\[([^,}]+)\]\"/gi
    const match = str.match(re)
  
    return match !== null ? match : []
  }
  
  private getVarsInPath = (path: string): string[] => {
    const vars: string[] = []

    if (path.endsWith('.json')) {
      path = path.slice(0, -'.json'.length)
    }

    const explodedPath = path.split('/')
  
    explodedPath.forEach(pathElement => {
      console.log(pathElement)
      const isVar = pathElement.startsWith('[') && pathElement.endsWith(']')
      if (isVar) {
        vars.push(pathElement.slice(1, -1))
      }
    })
  
    return vars
  }
  
  private getNormalizedApiRoute = (path: string, params: string[]): string => {
    params.forEach(param => {
      path = replaceAll(path, `[${param}]`, `:${param}`)
    })
  
    return path
  }
  
  private getRoute = (filePath: string, filename: string): string => {
    const route = `${this.apiPrefix}${filePath.replace(this.entryFolderFullPath, '')}`
    const params = this.getVarsInPath(route)
    const apiRoute = this.getNormalizedApiRoute(route, params).replace(filename, '')
    const fileVariable = filename.split('.')[0]
    const varInFilename = this.getVarsInPath(fileVariable)[0]
  
    if (varInFilename) {
      return apiRoute.split('/').slice(0, -1).join('/') + '/:' + varInFilename
    }
  
    if (fileVariable === '*') {
      return apiRoute.slice(0, -1)
    }
  
    return apiRoute.split('/').slice(0, -1).join('/') + '/' + fileVariable
  }

  private configFile = (filePath: string, filename: string): void => {
    const httpVerbInFilename = filename.split('.')[-2]
    let fileContent = fs.readFileSync(filePath, 'utf8')
    const route = filePath.replace(this.entryFolderFullPath, '')
    const numberParamsToCast = this.getNumbersToCast(fileContent)
    const params = this.getVarsInPath(route)
    console.log(params)
    const apiRoute = this.getRoute(filePath, filename)

    numberParamsToCast.forEach(numberParamToCast => {
      fileContent = replaceAll(fileContent, numberParamToCast, numberParamToCast.slice(`"${NUMBER_CAST_INDICATOR}`.length, -1))
    })
  
    const responseCallback = (req: any, res: any) => {
      let stringifyJson = fileContent
  
      params.forEach(variable => {
        console.log(stringifyJson, `[${variable}]`, req.params[variable])
        stringifyJson = replaceAll(stringifyJson, `[${variable}]`, req.params[variable])
      })

      console.log(stringifyJson)

      res.send(JSON.parse(stringifyJson))
    }
  
    switch (httpVerbInFilename) {
      case 'post':
        this.server.post(apiRoute, responseCallback)
        console.log(`> POST ${apiRoute}`)
        break
    
      case 'delete':
        this.server.delete(apiRoute, responseCallback)
        console.log(`> DELETE ${apiRoute}`)
        break
      
      case 'put':
        this.server.put(apiRoute, responseCallback)
        console.log(`> PUT ${apiRoute}`)
        break
      
      case 'get': default:
        this.server.get(apiRoute, responseCallback)
        console.log(`> GET ${apiRoute}`)
        break
    }
  }

  private logError = (error: string): void => {
    console.error(`ERROR: ${error}`)
    this.kill()
  }

  public run = (): void => {
    console.log(`Server started on port ${this.port}`)
    this.server.listen(this.port)
  }

  public kill = (): void => {
    process.exit(0)
  }
}

const replaceAll = (str: string, find: string, replace: string): string => {
 return str.split(find).join(replace)
}

export default RestApiFy