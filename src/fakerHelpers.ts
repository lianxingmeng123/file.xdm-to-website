import faker from 'faker'
import {
  FAKER_SYNTAX_MATCHER,
  FAKER_SYNTAX_PREFIX,
  FAKER_SYNTAX_SUFIX
} from './const'
import { FakerSyntaxData } from './types'
import { getCastVarToNumberSyntax, replaceAll } from './utils'

export const getFakerVarsInContent = (content: string): string[] => {
  return Array.from(content.matchAll(FAKER_SYNTAX_MATCHER), m => m[1])
}

export const areFakerVarsSyntaxValidInContent = (content: string): true | FakerSyntaxData => {
  const fakerVars = getFakerVarsInContent(content)
  let invalidFakerSyntaxData: FakerSyntaxData | null = null

  fakerVars.some((fakerVar) => {
    const [fakerNamespace, fakerMethod] = fakerVar.split(':')
    // @ts-ignore
    const isFakerSyntaxValid = faker[fakerNamespace] !== undefined
      // @ts-ignore
      && faker[fakerNamespace][fakerMethod] !== undefined

    if (!isFakerSyntaxValid) {
      invalidFakerSyntaxData = {
        namespace: fakerNamespace,
        method: fakerMethod
      }
      return false
    }
    return true
  })

  return invalidFakerSyntaxData !== null ? invalidFakerSyntaxData : true
}

export const getContentWithReplacedFakerVars = (content: string): string => {
  const fakerVars = getFakerVarsInContent(content)

  fakerVars.forEach((fakerVar) => {
    const fakerVarSyntax = `${FAKER_SYNTAX_PREFIX}${fakerVar}${FAKER_SYNTAX_SUFIX}`
    const [fakerNamespace, fakerMethod] = fakerVar.split(':')
    // @ts-ignore
    const fakedData = faker[fakerNamespace][fakerMethod]()
    const sanitizedFakedData = JSON.stringify(fakedData)
    const fakedDataValue = sanitizedFakedData.substring(1, sanitizedFakedData.length - 1)

    content = replaceAll(
      content,
      getCastVarToNumberSyntax(fakerVarSyntax.substring(1, fakerVarSyntax.length - 1)),
      fakedDataValue
    )
    content = content.replace(
      fakerVarSyntax,
      fakedDataValue
    )
  })

  return content
}
