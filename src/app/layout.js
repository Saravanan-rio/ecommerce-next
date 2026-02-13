import { CartProvider } from "./context/cartContext";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
