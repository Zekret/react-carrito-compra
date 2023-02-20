import "./App.css";
import { Cart } from './components/Cart.jsx'
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Products } from "./components/Products.jsx";
import { IS_DEVELOPMENT } from "./config";
import { CartProvider } from "./context/cart.jsx";
import { useFilters } from "./hooks/useFilters";
import { products } from "./mocks/products.json";

function App() {
  
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products);
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  );
}

export default App;
