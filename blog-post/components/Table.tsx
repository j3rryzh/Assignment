import Row from './Row'

interface DataProps {
  visibleData: { id: number; userId: number; title: string; body: string }[]
}

export default function Table({ visibleData }: DataProps) {
  return (
    <div className="p-2">
      <table className="table-fixed border-separate border-spacing-1">
        <thead className="bg-emerald-600">
          <tr className="h-12 text-center">
            <td className="w-1/6"></td>
            <td className="w-2/6 font-bold">Title</td>
            <td className="w-3/6 font-bold">Body</td>
          </tr>
        </thead>
        <tbody>
          {visibleData?.map(({ id, title, body }) => (
            <Row key={id} id={id} title={title} body={body} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
