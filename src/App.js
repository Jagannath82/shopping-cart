import './App.css';
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
import BlogPostDetails, { loadBlogPostDetails } from './components/blogPostDetails.jsx';
import AddBlog from './components/AddBlog.jsx';
import { action as addBlogPostAction} from './components/AddBlog.jsx'
import Math from './Math.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <LayoutComponent />,
      children: [
        {
          path: "index",
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
          loader: loadPost,
          children:[{
            path: ":id",
            element: <BlogPostDetails/>,
            loader: loadBlogPostDetails
          }]
          
        },
        {
          path: "addPost",
          element: <AddBlog />,
          action: addBlogPostAction
        },
        {
          path: "mathPuzzle",
          element: <Math />
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
