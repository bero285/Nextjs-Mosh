import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h2>Hello world</h2>
      <Link href="/users">users</Link>
      <ProductCard />
    </main>
  );
}
