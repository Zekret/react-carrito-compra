import "./App.css";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Products from "./components/Products";
import { IS_DEVELOPMENT } from "./config";
import useFilters from "./hooks/useFilters";
import { products } from "./mocks/products.json";

function App() {
  
  const { filters, filterProducts } = useFilters()

  const filteredProducts = filterProducts(products);
  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  );
}

export default App;
