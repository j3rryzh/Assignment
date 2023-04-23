import useSWR from 'swr'

interface result {
  data: { id: number; userId: number; title: string; body: string }[]
  isLoading: boolean
  isError: boolean
}

export default function useData(): result {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  )

  return {
    data: data,
    isLoading,
    isError: error,
  }
}
