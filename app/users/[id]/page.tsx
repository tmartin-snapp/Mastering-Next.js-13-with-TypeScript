import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number };
}

const UserDetailPage = async ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  
  const res = <div> User Detail Page {id} </div>;

  return await res;
};

export default UserDetailPage;
