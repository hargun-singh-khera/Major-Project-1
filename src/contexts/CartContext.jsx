import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../useFetch";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export default CartContext

export function CartProvider({ children }) {
    const userId = "68cab48b2c77561237bcf9f0"
    const { data } = useFetch(`https://neo-g-backend-jwhg.vercel.app/api/cart/${userId}`)
    
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        if (data) {
            setCartCount(data.length)
        }
    }, [data])

    function incrementCartCount() {
        setCartCount((count) => count + 1)
    }

    function decrementCartCount() {
        setCartCount((count) => count > 0 ? count - 1 : 0)
    }

    async function addItemToCart(productId) {
        try {
            const response = await fetch(`https://neo-g-backend-jwhg.vercel.app/api/cart/${userId}/${productId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            if(!response.ok) {
                throw new Error("Failed to add item to cart.")
            }
            // const data = await response.json()
            incrementCartCount()
        } catch (error) {
            console.log("error", error)
        }
    }

    async function removeItemFromCart(cartId, productId) {
        try {
            const response = await fetch(`https://neo-g-backend-jwhg.vercel.app/api/cart/${userId}/${productId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            if (!response.ok) {
                throw new Error("Failed to remove product from cart")
            }
            // const data = await response.json()
            console.log("Product deleted from cart")
            decrementCartCount()
            // setCartData((prevCartData) => prevCartData.filter(cartItem => cartItem._id !== cartId))
        } catch (error) {
            console.log("error", error)
        }
    }

    return (
        <CartContext.Provider value={{ cartCount, incrementCartCount, decrementCartCount, addItemToCart, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    )
}