import { useState } from 'react'
import useData from '../customHooks/useData'
import Template from '../components/Template'
import Table from '../components/Table'
import Header from '../components/Header'
import Navigator from '../components/Navigator'

export default function Home() {
  const itemPerPage = 5
  const { data, isLoading, isError } = useData()
  const [page, setPage] = useState<number>(1)
  while (isLoading)
    return (
      <Template>
        <Header text={'Loading...'} />
      </Template>
    )
  if (isError)
    return (
      <Template>
        <Header text={'Failed to load'} />
      </Template>
    )
  const totalPage = Math.ceil(data.length / itemPerPage)
  const visibleData = data.slice((page - 1) * itemPerPage, page * itemPerPage)

  return (
    <Template>
      <Header text={'Blog Posts'} />
      <Navigator page={page} setPage={setPage} totalPage={totalPage} />
      <Table visibleData={visibleData} />
    </Template>
  )
}
