export default function Template({ children }) {
  return (
    <main className="flex min-h-screen items-center flex-col p-12 bg-slate-600">
      <div className="bg-yellow-500 w-3/4  flex flex-col items-center">
        {children}
      </div>
    </main>
  )
}
