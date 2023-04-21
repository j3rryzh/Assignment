import { useRouter } from 'next/router'
import useData from '../customHooks/useData'
import Template from '../components/Template'
import Table from '../components/Table'
import Header from '../components/Header'
import Navigator from '../components/Navigator'

export default function Post() {
  const router = useRouter()
  const postId = router.query.postId
  const { data, isLoading, isError } = useData()
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
  const visibleData = data.filter((item) => item?.id == postId)

  return (
    <Template>
      <Header text={'Post Detail'} />
      <Navigator />
      <Table visibleData={visibleData} />
    </Template>
  )
}
