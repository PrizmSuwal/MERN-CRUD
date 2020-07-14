import React from 'react';
import { BrowserRouter as Router , Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import Navbar from "./component/navbar.component";
import Productlist from "./component/product-list.component";
import EditProduct from "./component/edit-product.component";
import CreateProduct from "./component/create-product.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component= {Productlist} />
        <Route path="/edit/:id" exact component= {EditProduct} />
        <Route path="/add" exact component= {CreateProduct} />
        </div>
    </Router>
  );
}

export default App;