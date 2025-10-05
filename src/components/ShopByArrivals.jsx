import { Link } from "react-router-dom"
import { useProductContext } from "../contexts/ProductContext"

const ShopByArrivals = () => {
  const { setSeason } = useProductContext()
  return (
    <section id="shopByArrivals" >
      <div className="row my-5">
        <div className="col-md-6">
          <div className="card mb-3 p-5 border-0">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://templates.hibootstrap.com/xton/default/assets/img/instagram/img5.jpg" className="img-fluid rounded" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-title mb-3">NEW ARRIVALS</p>
                  <h5>Summer Collection</h5>
                  <p className="card-text ">Check out our best summer collection to stay cool in style this seasion.</p>
                  <Link onClick={() => setSeason("Summer")} to={"/products"} className="btn btn-outline-success px-5 py-2" href="#shopByCategory">Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3 p-5 border-0">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://templates.hibootstrap.com/xton/default/assets/img/instagram/img2.jpg" className="img-fluid rounded" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-title mb-3">NEW ARRIVALS</p>
                  <h5>Winter Collection</h5>
                  <p className="card-text ">Check out our best winter collection to stay warm in style this seasion.</p>
                  <Link onClick={() => setSeason("Winter")} to={"/products"} className="btn btn-outline-success px-5 py-2" href="#shopByCategory">Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopByArrivals