import { getServerSession } from 'next-auth'

export default async function Home () {
  const session = await getServerSession()
  const sessionText = session?.user?.name ?? 'Not sign in'
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h2 className='text-2xl'>Home Page</h2>
        <p>{sessionText}</p>
      </div>
    </main>
  )
}
