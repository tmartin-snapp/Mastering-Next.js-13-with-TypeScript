import UserTable from './UserTable';

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
    <UserTable sortOrder={sortOrder}/>
  )
}

export default usersPage;