import { createContext, useContext, useState } from "react";

const ProductContext = createContext()

export const useProductContext = () => useContext(ProductContext)

export default ProductContext

export function ProductProvider({ children }) {
    const [wishlistCount, setWishlistCount] = useState(0)
    const [cartCount, setCartCount] = useState(0)

    function incrementWishlistCount () {
        setWishlistCount((count) => count + 1)
    }

    function decrementWishListCount () {
        setWishlistCount((count) => count - 1)
    }

    function incrementCartCount () {
        setCartCount((count) => count + 1)
    }

    function decrementCartCount () {
        setCartCount((count) => count - 1)
    }

    return (
        <ProductContext.Provider value={{wishlistCount, cartCount, incrementWishlistCount, decrementWishListCount, incrementCartCount, decrementCartCount}}>
            {children}
        </ProductContext.Provider>
    )

}
