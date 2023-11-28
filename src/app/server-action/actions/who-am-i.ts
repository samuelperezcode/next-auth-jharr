'use server'
import { getServerSession } from 'next-auth'

export const whoAmI = async () => {
  const session = await getServerSession()

  return session?.user?.name ?? 'Not logged in'
}
