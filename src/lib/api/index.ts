const user = process.env.GITHUB_USER
const token = process.env.GITHUB_TOKEN

export const fetchApi = async (
  options: IFetchOptions,
): Promise<IDefaultResponse> => {
  let status = 0
  const {option, repos} = options
  const url = `https://api.github.com/users/${user}/repos`

  await new Promise((resolve) => setTimeout(resolve, 3000))

  try {
    if (option === 'get-repo') {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        status = response.status
        throw new Error('internal server error.')
      }

      status = 200

      const data: IRepository[] = await response.json()

      const filtered = data.filter((r: IRepository) => repos.includes(r.name))

      return {
        message: 'fetched successfully.',
        status,
        data: filtered,
      }
    }

    return {
      message: 'no provided option.',
      status: 505,
      data: [],
    }
  } catch (err: any) {
    return {
      message: err,
      status,
      data: [],
    }
  }
}
