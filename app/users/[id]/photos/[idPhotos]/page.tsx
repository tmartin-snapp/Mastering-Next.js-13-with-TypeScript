import React from 'react'

interface Props{
    params: Promise<Params>;
}

interface Params{
    id: number; 
    idPhotos: number
}

const photo = ({ params }: Props) => {
  const { id, idPhotos } = React.use<Params>(params);
  return (
    <div> Photo {id} {idPhotos} </div>
  )
}

export default photo;