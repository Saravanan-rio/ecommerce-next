"use client";

import Link from "next/link";
import { useCart } from "../context/cartContext";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link href="/" className="logo-container">
        <div className="logo-icon">🛍</div>
        <span className="logo-text">ShopVerse</span>
      </Link>

      {/* Categories */}
      <div className="nav-links">
        <Link href="/category/men">Men</Link>
        <Link href="/category/women">Women</Link>
        <Link href="/category/electronics">Electronics</Link>
        <Link href="/category/jewelery">Jewelry</Link>
      </div>

      {/* Cart */}
      <Link href="/cart" className="cart-container">
        <ShoppingCart size={20} color="white" />
        <span className="cart-badge">{totalItems}</span>
      </Link>
    </nav>
  );
}
