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
import UserProfile from './pages/UserProfile.jsx'
import { ProductProvider } from './contexts/ProductContext.jsx'
import { CartProvider } from './contexts/CartContext.jsx'
import { WishlistProvider } from './contexts/WishlistContext.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/shop/products",
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
    path: "/checkout/cart",
    element: <Cart />
  },
  {
    path: "/profile",
    element: <UserProfile />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WishlistProvider>
      <CartProvider>
        <ProductProvider>
          <RouterProvider router={router} />
        </ProductProvider>
      </CartProvider>
    </WishlistProvider>
  </StrictMode>,
)
