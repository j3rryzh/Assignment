import { useState } from 'react'
import { useRouter } from 'next/router'

interface DataProps {
  id: number
  title: string
  body: string
}

export default function Row({ id, title, body }: DataProps) {
  const [backGroundColor, setBackGroundColor] = useState<string>('')
  const router = useRouter()
  const handleClick = () => {
    setBackGroundColor('bg-green-700')
    router.push(`/${id}`)
  }

  return (
    <tr className="bg-slate-50">
      <td
        className={`text-center ${backGroundColor} cursor-pointer`}
        onClick={handleClick}
      >
        {id}
      </td>
      <td className="p-4"> {title}</td>
      <td className="p-4">{body}</td>
    </tr>
  )
}
