'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

function AuthButton () {
  const { data: session } = useSession()
  const btnText = session != null ? 'Sign Out' : 'Sign In'
  const handleClick = () => {
    if (session != null) {
      void signOut()
    } else {
      void signIn()
    }
  }
  return (
    <button onClick={handleClick}>
      {btnText}
    </button>
  )
}

function UserMenu () {
  const { data: session } = useSession()
  const displayText = session?.user?.name ?? 'Not Signed in yet'
  return (
    <p>{displayText}</p>
  )
}

function Navbar () {
  return (
    <nav>
      <UserMenu />
      <AuthButton />
    </nav>
  )
}

export default Navbar
