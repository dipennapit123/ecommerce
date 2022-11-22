import Home from "./pages/Home";
import Register from "./pages/Register";

import Login from "./pages/Login";

import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>


        
        
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/Product" element={<Product />} />
        <Route exact path="/ProductList" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default App;
