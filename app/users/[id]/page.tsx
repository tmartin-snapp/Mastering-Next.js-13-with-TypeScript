import React from "react";

interface Props {
  params: { id: number };
}

const UserDetailPage = async ({ params: { id } }: Props) => {
  const res = <div> User Detail Page {id} </div>;

  return await res;
};

export default UserDetailPage;
