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
          <div className="w-100 w-100 p-1 px-md-2 px-lg-5 py-3">
            <h4 className="fs-4 mt-2 mb-4">Showing All Products <span className="fs-6">(Showing 20 products)</span></h4>
            <p className="d-inline-flex gap-1 d-sm-block d-md-block d-lg-block d-block d-xl-none d-xxl-none">
              <button className="btn btn-secondary " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Filter &nbsp; <i class="bi bi-funnel-fill"></i>
              </button>
            </p>
            <div className="collapse mb-3" id="collapseExample">
              <div className="card card-body">
                <FilterBar isFlex={true} />
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              <ProductCard category={category} productId={1} />
              <ProductCard category={category} productId={2} />
              <ProductCard category={category} productId={3} />
              <ProductCard category={category} productId={4} />
              <ProductCard category={category} productId={5} />
              <ProductCard category={category} productId={5} />
              <ProductCard category={category} productId={5} />
              <ProductCard category={category} productId={5} />
            </div>
          </div>
        </div>
      
      </main>
    </>
  )
}
export default Products