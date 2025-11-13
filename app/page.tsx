import ProductCard from "./components/ProductCard/ProductCard";
import { auth, signIn } from "../auth";
import { getToken } from "next-auth/jwt";
import { cookies } from "next/headers";


export default async function Home() {
  const session = await auth();

  return (
    <main>
      <h1>Hello {session?.user!.name || <span>Guest</span>} </h1>
      <a href="/users"> Users </a>
      <ProductCard />
    </main>
  );
}
