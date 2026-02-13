"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

export default function SearchBar({ products }) {
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        className="search-input"
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
        />



        <div className="grid">
            {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </>
  );
}
