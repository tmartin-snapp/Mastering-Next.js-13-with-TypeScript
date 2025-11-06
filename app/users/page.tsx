import Link from 'next/link';
import React from 'react'

interface User {
  id: number;
  name: string;
}
const usersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store' //<-- no guarda la info al cache
    //next: {revalidate: 10} // repeteix el fetch cada 10 segons
    })
  const users: User[] = await res.json();

  
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default usersPage;