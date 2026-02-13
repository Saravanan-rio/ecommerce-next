"use client";

import Link from "next/link";
import { useCart } from "../context/cartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card">
        <img src={product.image} alt="" />
        <h4>{product.title}</h4>
        <div className="price">${product.price}</div>

            <div>
                <Link href={`/product/${product.id}`}>
                    <button className="btn btn-outline">View</button>
                </Link>

                <button
                    className="btn btn-primary"
                    onClick={() => addToCart(product)}
                    >
                    Add to Cart
                </button>
            </div>
        </div>

  );
}
