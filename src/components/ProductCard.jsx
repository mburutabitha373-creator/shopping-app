function ProductCard({ product, addToCart }) {
  return (
    <article style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{product.name}</h3>
      <p>{product.category}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </article>
  );
}

export default ProductCard;