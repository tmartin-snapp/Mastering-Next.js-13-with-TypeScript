import Link from 'next/link';
import UserTable from './UserTable';
import { Suspense } from 'react';

interface Props {
  searchParams: Promise<SearchParams>;
}

interface SearchParams {
  sortOrder?: string;
}

const usersPage = async ( { searchParams } : Props) => {
  const { sortOrder = '' } = await searchParams;
  console.log(sortOrder);

  return (
    <>
      <h1>Users</h1>
      <Link href='/users/new' className='btn btn-secondary'> New User </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder}/>
      </Suspense>
    </>
  )
}

export default usersPage;