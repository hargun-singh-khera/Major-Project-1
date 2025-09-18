import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../useFetch";

const ProductContext = createContext()

export const useProductContext = () => useContext(ProductContext)

export default ProductContext

export function ProductProvider({ children }) {
    const userId = "68cab48b2c77561237bcf9f0"
    const { data: wishlistData } = useFetch(`https://neo-g-backend-jwhg.vercel.app/api/wishlists/${userId}`)
    const { data: cartData } = useFetch(`https://neo-g-backend-jwhg.vercel.app/api/cart/${userId}`)
    
    const [wishlistCount, setWishlistCount] = useState(0)
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        if(wishlistData) {
            setWishlistCount(wishlistData.length)
        }
        if(cartData) {
            setCartCount(cartData.length)
        }
    }, [wishlistData, cartData])

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
