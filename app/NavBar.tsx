'use client';

import Link from 'next/link'
import React from 'react'
import SignIn from './components/Sign-In'
import { useSession } from 'next-auth/react'

const NavBar = () => {
  const {status, data: session} = useSession()

  return (
    <div className='flex bg-slate-200 p-3 space-x-3'>
      <Link href="/">Next.js</Link>
      <Link href="/users">Users</Link>
      { status === 'loading' && <p>Loading...</p> }
      { status === 'authenticated' && <p>{session.user!.name}</p> }
      { status === 'unauthenticated' && <SignIn />}
    </div>
  )
}

export default NavBar