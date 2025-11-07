import React from 'react'

interface Props{
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
}

interface SearchParams{
  sortOrder?: string;
}

interface Params{
    slug: string[]; 
    sortOrder: string;
}

const ProductPage = ({ params, searchParams }: Props) => {
  const {sortOrder = ''} = React.use<SearchParams>(searchParams);
	const {slug} = React.use<Params>(params);
  return (
    <div>page {slug} {sortOrder} </div>
  )
}

export default ProductPage;