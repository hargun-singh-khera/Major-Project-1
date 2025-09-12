import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import Products from './pages/Products.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Wishlist from './pages/Wishlist.jsx'
import Cart from './pages/Cart.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/products/:category",
    element: <Products />
  },
  {
    path: "/products/:category/:productId",
    element: <ProductDetails />
  },
  {
    path: "/wishlist",
    element: <Wishlist />
  },
  {
    path: "/cart",
    element: <Cart />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
