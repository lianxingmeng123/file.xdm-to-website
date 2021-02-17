import hljs from 'highlight.js';

export const initHighlightJs = (): void => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block as HTMLElement)
  })
}