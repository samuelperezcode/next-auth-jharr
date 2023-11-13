'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    lable: 'Home',
    href: '/'
  },
  {
    lable: 'ProtectedPage',
    href: '/protected'
  },
  {
    lable: 'ServerActions',
    href: '/server-action'
  },
  {
    lable: 'API from Client',
    href: '/api-from-client'
  }
]

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

function ListOfLinks () {
  return (
    <ul>
      {
        links.map(link => <ListItem key={link.lable} href={link.href} label={link.lable} />)
      }
    </ul>
  )
}
interface ListItemProps {
  href: string
  label: string
}
function ListItem ({ href, label }: ListItemProps) {
  const pathname = usePathname()

  return (
    <li className={
      pathname === href ? 'py-1 px-2 bg-gray-700 text-gray-300' : 'py-1 px-2 text-gray-500 hover:bg-gray-700 hover:text-gray-300'
    }>
      <Link href={href}>
        {label}
      </Link>
    </li>
  )
}

function Navbar () {
  return (
    <nav>
      <UserMenu />
      <AuthButton />
      <ListOfLinks />
    </nav>
  )
}

export default Navbar
