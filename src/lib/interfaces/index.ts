interface IFetchOptions {
  option: FetchOptions
  repos: string[]
}

interface IRepository {
  id: number,
  name: string,
  html_url: string,
  description: string,
  languages_url: string
}

interface IDefaultResponse {
  message: string,
  status: number,
  data: IRepository[]
}