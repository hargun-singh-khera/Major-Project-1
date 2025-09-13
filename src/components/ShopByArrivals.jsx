const ShopByArrivals = () => {
  return (
    <section id="shopByArrivals" >
      <div className="row my-5">
        <div className="col-lg-6">
          <div class="card mb-3 p-5 border-0">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://templates.hibootstrap.com/xton/default/assets/img/instagram/img5.jpg" class="img-fluid rounded" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <p class="card-title mb-3">NEW ARRIVALS</p>
                  <h5>Summer Collection</h5>
                  <p class="card-text ">Check out our best summer collection to stay cool in style this seasion.</p>
                  <a className="btn btn-success px-5 py-2" href="#shopByCategory">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div class="card mb-3 p-5 border-0">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://templates.hibootstrap.com/xton/default/assets/img/instagram/img2.jpg" class="img-fluid rounded" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <p class="card-title mb-3">NEW ARRIVALS</p>
                  <h5>Winter Collection</h5>
                  <p class="card-text ">Check out our best winter collection to stay warm in style this seasion.</p>
                  <a className="btn btn-outline-success px-5 py-2" href="#shopByCategory">Shop Now</a>
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