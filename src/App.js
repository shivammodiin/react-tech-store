import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/AboutPage";
import SingleProduct from "./pages/SingleProductPage";
import Cart from "./pages/CartPage";
import Contact from "./pages/ContactPage";
import Default from "./pages/Default";
import Home from "./pages/HomePage";
import Products from "./pages/ProductsPage";

import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideCart from "./components/SideCart";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <SideCart />
      <Sidebar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/cart" component={Cart} />
        <Route path="/" exact component={Home} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
