const user = process.env.GITHUB_USER
const token = process.env.GITHUB_TOKEN

export const fetchApi = async (options: IFetchOptions): Promise<any> => {
  let status = 0
  const {option, repos} = options
  const url = `https://api.github.com/users/${user}/repos`

  console.log('Fetching...')

  await new Promise((resolve) => setTimeout(resolve, 3000))

  try {
    if (option === 'get-repo') {
      let repositories: [] = []

      (async () => {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          status = response.status
          throw new Error('internal server error.')
        }

        const data: any = await response.json()

        repositories.push(data)
      })

      return repositories
    }

    return
  } catch (err) {
    return {
      message: err,
      status,
      repos: [],
    }
  }
}
