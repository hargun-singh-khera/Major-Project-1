import { Link } from "react-router-dom"
import Header from "../components/Header"

const Wishlist = () => {
  return (
    <>
      <Header />
      <main className="container my-4">
        <h4>My Wishlist</h4>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <Link to={`/products/`} className="text-decoration-none">
              <div className="card border-0 rounded">
                <div className="position-relative">
                  <img src="https://templates.hibootstrap.com/xton/default/assets/img/products/img4.jpg" className="card-img-top img-fluid" alt="..." />
                  <div className="my-2 me-2 position-absolute top-0 end-0 rounded-circle bg-white py-1 px-2 d-flex justify-content-center align-items-center">
                    <i class="bi bi-heart-fill text-danger"></i>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center text-body-secondary">Men Premium Jacket</h5>
                  <h3 className="card-text text-center">₹ 2000</h3>
                </div>
                <button className="btn btn-secondary rounded-top-0 w-100">Move to Cart</button>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
export default Wishlist