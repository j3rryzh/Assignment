interface DataProps {
  text: string
}

export default function Header({ text }: DataProps) {
  return (
    <>
      <div className="text-white text-5xl leading-6 p-6">{text}</div>
      <div className="w-11/12 h-0.5 bg-white my-4"></div>
    </>
  )
}
