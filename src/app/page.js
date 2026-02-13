import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div style={{ padding: 20 }}>
      <SearchBar products={products} />
    </div>
  );
}
