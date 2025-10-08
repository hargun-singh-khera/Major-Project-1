import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../useFetch";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export default CartContext

export function CartProvider({ children }) {
    const userId = "68cab48b2c77561237bcf9f0"
    const { data } = useFetch(`https://neo-g-backend-jwhg.vercel.app/api/cart/${userId}`)


    const [cart, setCart] = useState([])
    const DELIVERY_CHARGES = 499
    
    useEffect(() => {
        if(data) {
            setCart(data)
        }
    }, [data])

    function increaseQuantity(cartId) {
        setCart((prevCart) => prevCart.map(cartItem => cartItem._id === cartId ? {...cartItem, quantity: Math.min(cartItem?.quantity + 1, 20)} : cartItem))
    }

    function decreaseQuantity(cartId) {
        setCart((prevCart) => prevCart.map(cartItem => cartItem._id === cartId ? {...cartItem, quantity: Math.max(cartItem?.quantity-1, 1)} : cartItem))
    }

    function getCartQuantity(cartId) {
        return cart.find(cartItem => cartItem._id === cartId)?.quantity || 1
    }

    
    function calculateTotalPrice() {
        const totalPrice = cart?.reduce((acc, curr) => acc + (curr?.productId?.price * curr?.quantity), 0)
        return totalPrice
    }
    
    function calculateTotalDiscount() {
        const totalDiscount = Math.round(cart?.reduce((acc, curr) => acc + (curr?.productId?.price * ((curr?.productId?.discount) / 100) * curr?.quantity), 0))
        return totalDiscount
    }
    
    function calculateTotalPayableAmount() {
        const totalPayableAmount = calculateTotalPrice() - calculateTotalDiscount() + DELIVERY_CHARGES
        return totalPayableAmount
    }

    async function addItemToCart(productId, size, quantity=1) {
        // https://neo-g-backend-jwhg.vercel.app/api/cart
        try {
            const response = await fetch(`http://localhost:3000/api/cart/${userId}/${productId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ quantity, size })
            })
            if(!response.ok) {
                throw new Error("Failed to add item to cart.")
            }
            const data = await response.json()
            // console.log("Cart added data", data)
            setCart((prevCart) => ([...prevCart, data.newCartItem]))
        } catch (error) {
            console.log("error", error, error.message)
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
            // console.log("Product deleted from cart")
            setCart((prevCart) => prevCart.filter(cartItem => cartItem._id !== cartId))
        } catch (error) {
            console.log("error", error)
        }
    }

    return (
        <CartContext.Provider value={{ cart, setCart, DELIVERY_CHARGES, increaseQuantity, decreaseQuantity, getCartQuantity, addItemToCart, removeItemFromCart, calculateTotalPrice, calculateTotalDiscount, calculateTotalPayableAmount }}>
            {children}
        </CartContext.Provider>
    )
}