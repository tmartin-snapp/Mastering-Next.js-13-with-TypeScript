import Image from "next/image";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>HelloWorld</h1>
      <a href="/users"> Users </a>
      <ProductCard />
    </main>
  );
}
