import { useRouter } from 'next/router'

interface DataProps {
  page?: number
  totalPage?: number
  setPage?: any
}

export default function Navigator({ page, setPage, totalPage }: DataProps) {
  const router = useRouter()
  return router.query.postId ? (
    <button
      className="text-white text-l bg-blue-600 p-2 rounded-lg"
      onClick={() => {
        router.back()
      }}
    >
      Home
    </button>
  ) : (
    <div className="w-full flex justify-center my-2 text-white text-2xl">
      <button
        className={`mx-3 ${
          page === 1 ? `cursor-not-allowed` : `cursor-pointer`
        }`}
        onClick={() => {
          page !== 1 && setPage((page: number) => page - 1)
        }}
      >
        {'⬅️'}
      </button>
      <div className="">{page}</div>
      <button
        className={`mx-3  ${
          page === totalPage ? `cursor-not-allowed` : `cursor-pointer`
        }`}
        onClick={() => {
          page !== totalPage && setPage((page: number) => page + 1)
        }}
      >
        {'➡️'}
      </button>
    </div>
  )
}
