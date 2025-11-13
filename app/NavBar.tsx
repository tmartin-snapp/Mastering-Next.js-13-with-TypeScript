import Link from 'next/link'
import React from 'react'
import SignIn from './components/Sign-In'

const NavBar = () => {
  return (
    <div className='flex bg-slate-200 p-3 space-x-3'>
      <Link href="/">Next.js</Link>
      <Link href="/users">Users</Link>
      <SignIn />
    </div>
  )
}

export default NavBar