import { useParams } from "react-router-dom"
import Header from "../components/Header"
import ProductCard from "../components/ProductCard"
import Rating from "../components/Rating"
import ProductBuyingBenefits from "../components/ProductBuyingBenefits"

const ProductDetails = () => {
  const { category, productId } = useParams()
  return (
    <>
      <Header />
      <main className="container my-4 ">
        <div className="card mb-3 border-0" >
          <div className="row g-0">
            <div className="col-md-4 p-3 position-relative">
              <img src="https://templates.hibootstrap.com/xton/default/assets/img/products/img4.jpg" className="img-fluid " alt="..." />
              <div className="my-4 me-4 position-absolute top-0 end-0 rounded-circle bg-white p-2 d-flex justify-content-center align-items-center">
                <span class="material-symbols-outlined fs-5">
                  favorite
                </span>
              </div>
              <button className="btn btn-block btn-primary my-3 w-100">Buy Now</button>
              <button className="btn btn-secondary w-100">Add to Cart</button>
            </div>
            <div className="col-md-6 px-4">
              <div className="card-body">
                <h3 className="card-title">Men Premium Jacket Quilted Hooded Winter Jackets for Men & Boys Full Sleve</h3>
                <Rating />
                <div className="d-flex align-items-center gap-4">
                  <h3 className="fs-2 fw-bold">₹2000</h3>
                  <h4 className="text-body-tertiary fw-light text-decoration-line-through text-opacity-50">₹4000</h4>
                </div>
                <h4 className="text-body-tertiary fw-light mb-4">50% Off</h4>
                <div className="d-flex gap-3 mb-3">
                  <span><strong>Quantity: </strong></span>
                  <button className="btn btn-sm btn-outline-secondary rounded-4">-</button>
                  2
                  <button className="btn btn-sm btn-outline-secondary rounded-4">+</button>
                </div>
                <div className="d-flex">
                  <span><strong>Size:</strong></span>
                  <div className="d-flex flex-wrap gap-4 ms-2">
                    <button className="btn btn-outline-secondary rounded-0">S</button>
                    <button className="btn btn-outline-secondary rounded-0">M</button>
                    <button className="btn btn-outline-secondary rounded-0">XL</button>
                    <button className="btn btn-outline-secondary rounded-0">XXL</button>
                  </div>
                </div>
                <hr />
                <div className="d-flex gap-4 flex-wrap">
                  <ProductBuyingBenefits />
                </div>
                <hr />
                <div>
                  <h5>Description:</h5>
                  <ul>
                    <li>STYLE REDEFINED: Elevate your look with our versatile Bomber Jacket. Combining timeless design with modern flair, it offers a cool, effortless style and long-lasting durability.</li>
                    <li>ALL-WEATHER READY: Stay comfortable in any weather with its wind-resistant and water-repellent features, perfect for transitioning between seasons.</li>
                    <li>UNPARALLELED COMFORT: Enjoy a snug, non-restrictive fit and premium materials for a cozy experience year-round.</li>
                    <li>VERSATILE ESSENTIAL: Ideal for any occasion, from casual outings to semi-formal events. Pair it with jeans or dress it up—it’s a wardrobe staple.</li>
                    <li>TRAVEL-FRIENDLY: Lightweight and easy to pack, it’s the perfect travel companion for style on the go. Redefine your fashion standards with this chic, versatile jacket.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-3">
              <hr  />
              <h3 className="fs-4 fw-semibold">More items you may like in apparel</h3>
              <div className="row row-cols-1 row-cols-md-4 g-4 my-2">
                <div className="col">
                  <ProductCard category={category} productId={productId} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default ProductDetails