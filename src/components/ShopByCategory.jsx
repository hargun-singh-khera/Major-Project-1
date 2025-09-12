import { Link } from "react-router-dom"

const ShopByCategory = () => {
  return (
    <section id="shopByCategory" className="bg-white px-5 py-4">
      <h6 style={{color: "#f53f85"}}>See our collection</h6>
      <h3>Shop By Categories</h3>
      <div className="row">
        <div className="col-md-4">
          <Link to="/products/men" className="text-decoration-none">
            <div class="card border-0">
              <img src="https://templates.hibootstrap.com/xton/default/assets/img/categories/img2.jpg" class="card-img-top img-fluid" alt="..." />
              <div class="card-body">
                <p class="card-text text-center fs-4">Men</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/products/women" className="text-decoration-none">
            <div class="card border-0">
              <img src="https://templates.hibootstrap.com/xton/default/assets/img/categories/img3.jpg" class="card-img-top img-fluid" alt="..." />
              <div class="card-body">
                <p class="card-text text-center fs-4">Women</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/products/kids" className="text-decoration-none">
            <div class="card border-0">
              <img src="https://templates.hibootstrap.com/xton/default/assets/img/categories/img1.jpg" class="card-img-top img-fluid" alt="..." />
              <div class="card-body">
                <p class="card-text text-center fs-4">Kids</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ShopByCategory