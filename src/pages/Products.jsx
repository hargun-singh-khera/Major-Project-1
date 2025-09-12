import { useParams } from "react-router-dom"
import Header from "../components/Header"
import FilterBar from "../components/FilterBar"
import ProductCard from "../components/ProductCard"

const Products = () => {
  const { category } = useParams()
  console.log("category", category)
  return (
    <>
      <Header />
      <main className="container-fluid">
        <div className="d-flex">
          <FilterBar />
          <div className="w-75 px-5 py-3">
            <h4 className="fs-4 mt-2 mb-4">Showing All Products <span className="fs-6">(Showing 20 products)</span></h4>
            <div className="row row-cols-1 row-cols-md-4 g-4">
              <div className="col">
                <ProductCard category={category} productId={1} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default Products