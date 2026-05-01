import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  // 🌙 Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // 🛒 Cart state
  const [cart, setCart] = useState([]);

  // 🔍 Category state
  const [category, setCategory] = useState("All");

  // 📦 Product data (STEP 1)
  const products = [
    { id: 1, name: "Apple", category: "Fruits" },
    { id: 2, name: "Banana", category: "Fruits" },
    { id: 3, name: "Carrot", category: "Vegetables" },
    { id: 4, name: "Milk", category: "Dairy" },
  ];

  // 🛒 Add to cart function
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // 🔍 Filter logic
  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className={darkMode ? "dark" : ""}>
      <h1>Shopping App</h1>

      {/* 🌙 Dark Mode Toggle */}
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
      </button>

      {/* 🔍 Category Filter */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* 🧾 Product List */}
      <ProductList
        products={filteredProducts}
        addToCart={addToCart}
      />

      {/* 🛒 Cart */}
      <h2>Cart ({cart.length})</h2>
    </div>
  );
}

export default App;