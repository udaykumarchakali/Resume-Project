import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Prod from "./pages/ProductsPage";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Watch from "./pages/Watches";
import Shirt from "./pages/Shirts";
import Cart from "./pages/Cart";

import Shoes from "./pages/Shoesp";
import Shirts from "./pages/ShirtsP";
import Watches from "./pages/Watchesp";
import LoginPage from "./pages/LoginPage";
import  {SearchProvider} from '../src/context1/SearchContext'

const App = () => {
  return (
    <SearchProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Global Search Page */}
        <Route path="/productsPage" element={<Prod />} />

        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="/shirt/:id" element={<Shirt />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/Shoesp" element={<Shoes />} />
        <Route path="/ShirtsP" element={<Shirts />} />
        <Route path="/Watchesp" element={<Watches />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </SearchProvider>
  );
};

export default App;