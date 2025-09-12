import { Link } from "react-router-dom"
import Header from "../components/Header"

const Cart = () => {
  return (
    <>
      <Header />
      <main className="container my-4">
        <h4 className="text-center mb-3">My Cart (1)</h4>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card mb-3 border-0">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://templates.hibootstrap.com/xton/default/assets/img/products/img4.jpg" className="img-fluid " alt="..." />
                </div>
                <div className="col-md-8 p-1">
                  <div className="card-body">
                    <h5 className="card-title">Men Premium Jacket</h5>
                    <div className="d-flex align-items-center gap-4">
                      <h3 className="fs-2 fw-bold">₹ 2000</h3>
                      <h4 className="text-body-tertiary fw-light text-decoration-line-through text-opacity-50">₹ 4000</h4>
                    </div>
                    <h4 className="text-body-tertiary fw-light mb-4">50% Off</h4>
                    <div className="d-flex mb-3">
                      <span><strong>Quantity: </strong></span>
                      <button className="btn btn-outline-secondary rounded-circle">-</button>
                      <input class="form-control" type="text" value="2" aria-label="readonly input example" readonly />
                      <button className="btn btn-outline-secondary rounded-circle">+</button>
                    </div>
                    <button className="btn btn-secondary mb-2 w-100 rounded-0">Remove From Cart</button>
                    <button className="btn btn-outline-secondary w-100 rounded-0">Move to Wishlist</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 rounded p-3">
              <div className="card-body">
                <h3>PRICE DETAILS</h3>
                <hr />
                <div>
                  <div className="d-flex justify-content-between">
                    <p className="fs-4">Price (1 item)</p>
                    <p>₹2000</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="fs-4">Discount</p>
                    <p>- ₹1000</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="fs-4">Delivery Charges</p>
                    <p>₹499</p>
                  </div>
                </div>
                <hr className="m-0" />
                <div className="d-flex justify-content-between mt-2">
                  <p className="fs-4 fw-bold">TOTAL AMOUNT</p>
                  <p>₹1499</p>
                </div>
                <hr className="m-0"  />
                <p className="fs-5 mt-2">You will save ₹1000 on this order.</p>
                <button className="btn btn-primary w-100">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default Cart