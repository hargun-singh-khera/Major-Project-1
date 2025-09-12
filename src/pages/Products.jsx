import { Link, useParams } from "react-router-dom"
import Header from "../components/Header"
import FilterBar from "../components/FilterBar"

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
                <Link to={`/products/${category}/1`} className="text-decoration-none">
                  <div className="card border-0 rounded">
                    <div className="position-relative">
                      <img src="https://templates.hibootstrap.com/xton/default/assets/img/products/img4.jpg" className="card-img-top img-fluid" alt="..." />
                      <div className="my-2 me-2 position-absolute top-0 end-0 rounded-circle bg-white p-2 d-flex justify-content-center align-items-center">
                        <span class="material-symbols-outlined fs-5">
                          favorite
                        </span>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title text-center text-body-secondary">Men Premium Jacket</h5>
                      <h3 className="card-text text-center">₹2000</h3>
                    </div>
                    <button className="btn btn-secondary rounded-top-0 w-100">Add to Cart</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default Products