export interface IFetchOptions {
  option: FetchOptions
  repos: string[]
}

export interface IRepository {
  id: number
  name: string
  html_url: string
  description: string
  languages_url: string
  language: string
}

export interface IDefaultResponse {
  message: string
  status: number
  data: IRepository[]
}
