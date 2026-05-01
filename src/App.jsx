import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const products = [
    { id: 1, name: "Apple", category: "Fruits" },
    { id: 2, name: "Banana", category: "Fruits" },
    { id: 3, name: "Carrot", category: "Vegetables" },
    { id: 4, name: "Milk", category: "Dairy" },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className={darkMode ? "dark" : ""}>
      <h1>Shopping App</h1>

      {/* DARK MODE */}
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* CATEGORY FILTER */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* PRODUCTS */}
      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} addToCart={addToCart} />
      ) : (
        <p>No products available.</p>
      )}

      {/* CART */}
      <h2>Cart ({cart.length})</h2>

      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;