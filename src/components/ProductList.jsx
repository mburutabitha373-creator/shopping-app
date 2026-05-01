import ProductCard from "./ProductCard";

function ProductList({ products, addToCart }) {
  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <main>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </main>
  );
}

export default ProductList;