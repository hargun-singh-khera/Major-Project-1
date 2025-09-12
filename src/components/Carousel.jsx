const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://templates.hibootstrap.com/xton/default/assets/img/main-banner5.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-flex flex-column h-100 justify-content-center align-items-start fs-6 fs-md-5 fs-lg-4">
            <h6>Limited Time Offer!</h6>
            <h4 className="display-6 fw-semibold text-start">Winter-Spring 2025!</h4>
            <p>Take 20% Off 'Sales Must Have'</p>
            <div className="d-flex gap-3 justify-content-start">
              <a className="btn btn-light" href="#shopByCategory">SHOP WOMEN'S</a>
              <a className="btn btn-outline-light" href="#shopByCategory">SHOP MEN'S</a>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://templates.hibootstrap.com/xton/default/assets/img/main-banner3.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-flex flex-column h-100 justify-content-center align-items-start">
            <h6 className="text-black">Buy Now!</h6>
            <h4 className="display-6 fw-semibold text-black text-start">New Season Canvas!</h4>
            <p className="text-black">Take 20% Off 'Sales Must Have'</p>
            <div className="d-flex gap-3  justify-content-start">
              <a  className="btn btn-light text-white" style={{backgroundColor: "#FF16AA"}} href="#shopByCategory"> SHOP WOMEN'S</a>
              <a className="btn btn-outline-dark text-white" href="#shopByCategory">SHOP MEN'S</a>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://templates.hibootstrap.com/xton/default/assets/img/main-banner4.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-flex flex-column h-100 justify-content-center align-items-start">
            <h6>Exclusive Offer!</h6>
            <h4 className="display-6 fw-semibold">Winter 2025!</h4>
            <p>Last year offer 'Sales Must Have'</p>
            <div className="d-flex gap-3  justify-content-start">
              <a className="btn btn-light" href="#shopByCategory">SHOP WOMEN'S</a>
              <a className="btn btn-outline-light" href="#shopByCategory">SHOP MEN'S</a>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    // https://templates.hibootstrap.com/xton/default/assets/img/main-banner5.jpg
    // https://templates.hibootstrap.com/xton/default/assets/img/main-banner3.jpg
    // https://templates.hibootstrap.com/xton/default/assets/img/main-banner4.jpg
  )
}

export default Carousel