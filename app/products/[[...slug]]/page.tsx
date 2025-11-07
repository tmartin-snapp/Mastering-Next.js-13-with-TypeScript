import React from 'react'

interface Props{
    params: Promise<Params>;
}

interface Params{
    slug: string[]; 
}

const ProductPage = ({ params }: Props) => {
	const {slug} = React.use<Params>(params);
  return (
    <div>page {slug} </div>
  )
}

export default ProductPage;