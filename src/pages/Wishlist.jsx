import { Link } from "react-router-dom"
import Header from "../components/Header"

const Wishlist = () => {
  return (
    <>
      <Header />
      <main className="container my-4">
        <h4>My Wishlist</h4>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col">
            <Link to={`/products/`} className="text-decoration-none">
              <div className="card border-0 rounded">
                <div className="position-relative">
                  <img src="https://templates.hibootstrap.com/xton/default/assets/img/products/img4.jpg" className="card-img-top img-fluid" alt="..." />
                  <div className="my-2 me-2 position-absolute top-0 end-0 rounded-circle bg-white p-2 d-flex justify-content-center align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e81717"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Z"/></svg>
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