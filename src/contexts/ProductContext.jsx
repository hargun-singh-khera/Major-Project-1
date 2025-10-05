import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../useFetch";

const ProductContext = createContext()

export const useProductContext = () => useContext(ProductContext)

export default ProductContext

export function ProductProvider({ children }) {
    const { data } = useFetch(`https://neo-g-backend-jwhg.vercel.app/api/products`)

    const DEFAULT_MAX_PRICE = 2500
    
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [category, setCategory] = useState([])
    const [rating, setRating] = useState(0)
    const [price, setPrice] = useState(2500)
    const [sortedProducts, setSortedProducts] = useState("")
    const [season, setSeason] = useState("")
    const [discount, setDiscount] = useState(0)
    const [selectedCategory, setSelectedCategory] = useState("")

    useEffect(() => {
        if(data) {
            setProducts(data)
        }
    }, [data])

    console.log("products", products, "filteredProducts", filteredProducts)
    console.log("category", category)

    function filterProducts () {
        if(!products || products.length === 0) return

        let filtered = [...products]
        
        if (searchQuery !== "") {
            filtered = filtered.filter(product => (product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.title.toLowerCase().includes(searchQuery.toLowerCase())))
        }
        if (category.length > 0) {
            filtered = filtered.filter(product => category.includes(product.category))
        }
        if (rating > 0) {
            filtered = filtered.filter(product => product.rating >= rating)
        }
        if (price >= 0 && price !== DEFAULT_MAX_PRICE) {
            filtered = filtered.filter(product => product.price <= price)
        }
        if (sortedProducts === "asc") {
            filtered = filtered.sort((a, b) => a.discountedPrice - b.discountedPrice)
        }
        if (sortedProducts === "desc") {
            filtered = filtered.sort((a, b) => b.discountedPrice - a.discountedPrice)
        }
        if(season !== "") {
            filtered = filtered.filter(product => product.season === season)
        }
        if(discount > 0) {
            filtered = filtered.filter(product => product.discount >= discount)
        }
        setFilteredProducts(filtered)
    }

    function clearFilter () {
        setCategory([])
        setRating(0)
        setPrice(DEFAULT_MAX_PRICE)
        setSortedProducts("")
        setFilteredProducts(products)
        setSeason("")
        setDiscount(0)
    }

    useEffect(() => {
        filterProducts()
    }, [products, category, rating, sortedProducts, price, searchQuery, season, discount])

    return (
        <ProductContext.Provider value={{ selectedCategory, setSelectedCategory, season, setSeason, discount, setDiscount, setProducts, filteredProducts, setFilteredProducts, filterProducts, searchQuery, setSearchQuery, category, setCategory, rating, setRating, price, setPrice, sortedProducts, setSortedProducts, clearFilter }}>
            {children}
        </ProductContext.Provider>
    )

}
