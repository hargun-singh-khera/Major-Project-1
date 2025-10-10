import Header from "../components/Header"
import FilterBar from "../components/FilterBar"
import ProductCard from "../components/ProductCard"
import { renderPlaceholders } from "../components/ShopByCategory"
import PlaceholderCard from "../components/PlaceholderCard"
import { useEffect, useState } from "react"
import { useProductContext } from "../contexts/ProductContext"
import useFetch from "../useFetch"
import toast, { Toaster } from 'react-hot-toast'

const Products = () => {
  const { data, loading, error } = useFetch(`https://neo-g-backend-jwhg.vercel.app/api/products`)
  // const { data, loading, error } = useFetch(`http://localhost:3000/api/products`)

  const { filteredProducts: products, setProducts, setSelectedCategory } = useProductContext()
  const { searchQuery } = useProductContext()


  useEffect(() => {
    setSelectedCategory("")
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    if (data) {
      setProducts(data)
    }
  }, [data])

  return (
    <>
      <Header />
      <main className="container-fluid">
        <div className="d-flex">
          <FilterBar id="desktop" />
          <div className="w-100 w-100 p-1 px-md-2 px-lg-5 py-3">
            <h4 className="fs-4 mt-2 mb-4">Showing All Products <span className="fs-6">(Showing {products?.length || 0} products)</span></h4>
            <p className="d-inline-flex gap-1 d-sm-block d-md-block d-lg-block d-block d-xl-none d-xxl-none">
              <button className="btn btn-secondary " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Filter &nbsp; <i className="bi bi-funnel-fill"></i>
              </button>
            </p>
            <div className="collapse mb-3" id="collapseExample">
              <div className="card card-body">
                <FilterBar isFlex={true} />
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              {loading && renderPlaceholders(8, PlaceholderCard)}
            </div>
            {error && <p className="py-5">Something went wrong while loading products. Please try again later. </p>}
            {!loading && products && products.length === 0 && (searchQuery !== "" ? (<p>No matching products found for {searchQuery}.</p>) : (<p>No matching products.</p>))}
            {/* {products && products.length === 0 && searchQuery && <p>No matching products found for {searchQuery}.</p>} */}
            {/* {searchQuery === "" && products && products.length === 0 && <p>No matching products.</p>} */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 py-4">
              {!loading && products && products.length > 0 && products.map(product => (
                <ProductCard key={product._id} product={product} toast={toast} />
              ))}
            </div>
          </div>
        </div>
        <Toaster />
      </main>
    </>
  )
}
export default Products