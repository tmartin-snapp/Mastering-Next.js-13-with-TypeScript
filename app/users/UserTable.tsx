import React from 'react'

interface User {
  id: number;
  name: string;
	email: string;
}

const UserTable = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store' //<-- no guarda la info al cache
    //next: {revalidate: 10} // repeteix el fetch cada 10 segons
    })
  const users: User[] = await res.json();

  return (
    <table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				{users.map(user => <tr key={user.id}>
					<td>{user.name}</td>
					<td>{user.email}</td>
				</tr>)}
			</tbody>
    </table>
  )
}

export default UserTable