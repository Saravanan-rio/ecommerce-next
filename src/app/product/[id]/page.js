import { notFound } from "next/navigation";

async function getProduct(id) {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/${id}`,
      { cache: "no-store" }
    );

    console.log(res);

    
    if (!res.ok) return null;

    const text = await res.text();

    if (!text) return null; // prevents JSON error

    return JSON.parse(text);
  } catch (error) {
    return null;
  }
}

export default async function ProductPage({ params }) {
//   if (!params?.id) return notFound();
  const { id } = await params;  
  
  if (!id) return notFound();

  const product = await getProduct(id);

  if (!product) return notFound();

  return (
    <div className="container">
      <div className="product-detail">
        <img src={product.image} alt={product.title} />

        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
        </div>
      </div>
    </div>
  );
}
