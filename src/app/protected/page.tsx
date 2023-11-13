import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

async function ProtectedRoute () {
  const session = await getServerSession()

  if ((session?.user) == null) {
    redirect('/api/auth/signin')
  }
  return (
    <main>
      <h2 className='text-2xl'>This is a protected Route</h2>
    </main>
  )
}

export default ProtectedRoute
