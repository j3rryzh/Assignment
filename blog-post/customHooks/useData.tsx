import useSWR from 'swr'

export default function useData(): { data: object[] } {
  const fetcher = (url) => fetch(url).then((res) => res.json())
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
