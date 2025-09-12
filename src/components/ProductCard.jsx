import { Link } from "react-router-dom"
const ProductCard = ({category, productId}) => {
  return (
      <Link to={`/products/${category}/${productId}`} className="text-decoration-none">
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
  )
}
export default ProductCard