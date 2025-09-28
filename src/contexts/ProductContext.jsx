import { createContext, useContext, useEffect, useState } from "react";
import CartContext from "./CartContext";
import WishlistContext from "./WishlistContext";
import useFetch from "../useFetch";

const ProductContext = createContext()

export const useProductContext = () => useContext(ProductContext)

export default ProductContext

export function ProductProvider({ children }) {
    // const { data, loading, error } = useFetch(`https://neo-g-backend-jwhg.vercel.app/api/products`)
    // const { data, loading, error } = useFetch(`http://localhost:3000/api/products`)

    // const [productsData, setProductsData] = useState([])
    
    // useEffect(() => {
    //     if (data) {
    //         setProductsData(data)
    //     }
    // }, [data])
    
    return (
        <ProductContext.Provider value={{  }}>
            {children}
        </ProductContext.Provider>
    )

}
