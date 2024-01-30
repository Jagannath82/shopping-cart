import 'bootstrap/dist/css/bootstrap.css';
import HeaderMenu from './components/header/HeaderMenu';
import './css/style.css';
import './css/responsive.css'
import Shopping from './components/shopping/ShoppingDisplay.jsx';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Home from './components/home.jsx';
import AddProduct from './components/product/AddProduct.jsx';
import SplashImage from './components/splash-image/SplashImage.jsx';
import LayoutComponent from './LayoutComponent.jsx';
import Blog, { loadPost } from './components/blog.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <LayoutComponent />,
      children: [
        {
          index: true,
          element: < Home />
        },
        {
          path: "shop",
          element: <Shopping />
        },
        {
          path: "splashImage",
          element: <SplashImage />
        },
        {
          path: "addProduct",
          element: <AddProduct />
        },
        {
          path: "blog",
          element: <Blog />,
          loader: loadPost
        }
      ]
    }
  ]
)


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
