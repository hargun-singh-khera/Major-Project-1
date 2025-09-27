import Header from "../components/Header"
import FilterBar from "../components/FilterBar"
import ProductCard from "../components/ProductCard"
import useFetch from "../useFetch"
import { renderPlaceholders } from "../components/ShopByCategory"
import PlaceholderCard from "../components/PlaceholderCard"
import { useEffect, useState } from "react"

const Products = () => {
  const { data, loading, error } = useFetch(`https://neo-g-backend-jwhg.vercel.app/api/products`)
  // const { data, loading, error } = useFetch(`http://localhost:3000/api/products`)


  const [productsData, setProductsData] = useState(data)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    if(data) {
      setProductsData(data)
    }
  }, [data])

  return (
    <>
      <Header setSearchQuery={setSearchQuery} />
      <main className="container-fluid">
        <div className="d-flex">
          <FilterBar products={data} setProductsData={setProductsData} searchQuery={searchQuery} />
          <div className="w-100 w-100 p-1 px-md-2 px-lg-5 py-3">
            <h4 className="fs-4 mt-2 mb-4">Showing All Products <span className="fs-6">(Showing {productsData?.length || 0} products)</span></h4>
            <p className="d-inline-flex gap-1 d-sm-block d-md-block d-lg-block d-block d-xl-none d-xxl-none">
              <button className="btn btn-secondary " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Filter &nbsp; <i className="bi bi-funnel-fill"></i>
              </button>
            </p>
            <div className="collapse mb-3" id="collapseExample">
              <div className="card card-body">
                <FilterBar products={data} setProductsData={setProductsData} searchQuery={searchQuery} isFlex={true} />
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              {loading && renderPlaceholders(8, PlaceholderCard)}
            </div>
            {error && <p className="py-5">Something went wrong while loading products. Please try again later. </p>}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 py-4">
              {productsData && productsData.length > 0 && productsData.map(product => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default Products