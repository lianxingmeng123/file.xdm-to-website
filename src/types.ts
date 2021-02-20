export interface File {
  id: string
  fileName: string
  content: string
}

export interface Folder {
  path: string
  children: (File | Folder)[]
}
