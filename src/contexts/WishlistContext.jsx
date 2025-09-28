import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../useFetch";

const WishlistContext = createContext()

export const useWishlistContext = () => useContext(WishlistContext)

export default WishlistContext

export function WishlistProvider({ children }) {
    const userId = "68cab48b2c77561237bcf9f0"
    const { data } = useFetch(`https://neo-g-backend-jwhg.vercel.app/api/wishlists/${userId}`)

    const [wishlistCount, setWishlistCount] = useState(0)

    useEffect(() => {
        if (data) {
            setWishlistCount(data.length)
        }
    }, [data])


    function incrementWishlistCount() {
        setWishlistCount((count) => count + 1)
    }

    function decrementWishListCount() {
        setWishlistCount((count) => count > 0 ? count - 1 : 0)
    }

    async function addItemToWishlist(productId) {
        try {
            const response = await fetch(`https://neo-g-backend-jwhg.vercel.app/api/wishlists/${userId}/${productId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            if(!response.ok) {
                throw new Error("Failed to add item to wishlist.")
            }
            // const data = await response.json()
            incrementWishlistCount()
        } catch (error) {
            console.log("error", error)
        }
    }

    async function removeItemFromWishlist(productId) {
        try {
            const response = await fetch(`https://neo-g-backend-jwhg.vercel.app/api/wishlists/${userId}/${productId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            if(!response.ok) {
                throw new Error("Failed to remove item from wishlist.")
            }
            // const data = await response.json()
            decrementWishListCount()
        } catch (error) {
            console.log("error", error)
        }
    }

    return (
        <WishlistContext.Provider value={{ wishlistCount, incrementWishlistCount, decrementWishListCount, addItemToWishlist, removeItemFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}