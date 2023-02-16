import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import Products from "./components/Products";
import { products } from "./mocks/products.json";

function App() {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  const filteredProducts = filterProducts(products);
  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
