import showdown from "showdown"

export const DOCS_URL = 'https://raw.githubusercontent.com/johannchopin/restapify/main/docs/README.md'

const classMap = {
  h3: 'mt-5',
  h4: 'mt-4',
  ul: 'list-group list-group-flush',
  li: 'list-group-item',
  pre: 'rounded-2',
  blockquote: 'alert alert-warning',
  table: 'table table-striped',
  img: 'w-100'
}

const classInjectionExt = Object.keys(classMap)
  .map(key => ({
    type: 'output',
    regex: new RegExp(`<${key}(.*)>`, 'g'),
    replace: `<${key} class="${classMap[key]}" $1>`
  }));

const idLinkReplacerExt = {
  type: 'output',
  regex: new RegExp(` href="#(.*)"`, 'g'),
  replace: ` href="docs#$1"`
}

const getHtmlListFromDoc = (doc: string): string => {
  return doc.substring(
    doc.lastIndexOf("<!-- START doctoc generated TOC please keep comment here to allow auto update -->"), 
    doc.lastIndexOf("<!-- END doctoc generated TOC please keep comment here to allow auto update -->")
  )
}

export const getContentTableAsHtml = (md: string) => {
  const mdList = getHtmlListFromDoc(md)

  const converter = new showdown.Converter({ 
    disableForced4SpacesIndentedSublists: true,
    ghCompatibleHeaderId: true,
    extensions: [
      idLinkReplacerExt
    ]
  })

  return converter.makeHtml(mdList)
}

export const getDocsAsHtml = (doc: string): string => {
  const docWithoutList = doc.replace(getHtmlListFromDoc(doc), '')
  const converter = new showdown.Converter({ 
    disableForced4SpacesIndentedSublists: true,
    ghCompatibleHeaderId: true,
    tables: true,
    extensions: [
      classInjectionExt,
      idLinkReplacerExt
    ]
  });
  return converter.makeHtml(docWithoutList);
}