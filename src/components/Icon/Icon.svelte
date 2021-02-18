<script lang="ts">
  import link from './icons/link.svg'
  import github from './icons/github.svg'
  import close from './icons/close.svg'
  import circleHalf from './icons/circle-half.svg'
  import book from './icons/book.svg'
  import eye from './icons/eye.svg'
  import folder from './icons/folder.svg'
  import folderOpen from './icons/folderOpen.svg'
  import fileCode from './icons/fileCode.svg'
  import arrowBarBottom from './icons/arrowBarBottom.svg'

  let className = ''

  type Name = 'link' | 'github' | 'circle-half' | 'close' | 'book' | 'eye' | 'folder' | 'folder-open' | 'file-code' | 'arrow-bar-bottom'

  export let name: Name = 'github'
  export { className as class }

  const icons: {[name in Name]: any} = {
    'circle-half': circleHalf,
    link,
    github,
    close,
    book,
    eye,
    folder,
    'folder-open': folderOpen,
    'file-code': fileCode,
    'arrow-bar-bottom': arrowBarBottom
  }
</script>

<style>
  img {
    width: 1em;
  }
</style>

<img src={icons[name]} class={`icon ${className}`} alt={`Icon ${name}`} />