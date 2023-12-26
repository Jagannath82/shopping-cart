import 'bootstrap/dist/css/bootstrap.css';
import HeaderMenu from './components/header/HeaderMenu';
import './css/style.css';
import './css/responsive.css'
import Shopping from './components/shopping/ShoppingDisplay.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './components/home.jsx';
import Blog from './components/blog.jsx';
import ContactUs from './components/contactUs';
import AddProduct from './components/product/AddProduct.jsx';
import EmployeeSearch from './components/pages/EmployeeSearch.jsx';

function App() {
  return (
    <Router>
      <div>
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
          <title>Shop</title>
          <meta name="keywords" content="" />
          <meta name="description" content="" />
          <meta name="author" content="" />
          <link rel="icon" href="images/fevicon.png" type="image/gif" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,600;0,800;1,400&family=Sen:wght@400;700;800&display=swap" rel="stylesheet" />
        </head>

        <HeaderMenu />
        <Routes>
        <Route
            exact
            path="/"
            element={<Home />}
          ></Route>
          <Route
            exact
            path="/index"
            element={<Home />}
          ></Route>
          <Route
            exact
            path="/shop"
            element={<Shopping />}
          ></Route>
          <Route
            exact
            path="/blog"
            element={<Blog />}
          ></Route>
          <Route
            exact
            path="/contact"
            element={<EmployeeSearch />}
          ></Route>
          <Route
            exact
            path="/addProduct"
            element={<AddProduct />}
          ></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
