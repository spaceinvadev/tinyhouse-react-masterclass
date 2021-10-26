interface Body<TVariables> {
  query: string
  variables?: TVariables
}

export const server = {
  fetch: async <TData = any, TVariables = any>(body: Body<TVariables>) => {
    try {
      const res = await fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })

      return res.json() as Promise<{ data: TData }>
    } catch (error) {
      throw error
    }
  }
}