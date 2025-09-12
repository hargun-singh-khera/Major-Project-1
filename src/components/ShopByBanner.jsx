const ShopByBanner = () => {
  return (
    <section className="my-5">
      <div class="card">
        <img src="https://templates.hibootstrap.com/xton/rtl/assets/img/offer-bg.jpg" class="rounded img-fluid" alt="..." />
        <div class="card-img-overlay d-flex justify-content-center align-items-center">
          <div class="text-center bg-white bg-opacity-75 p-4 rounded ">
            <div class="card-body">
              <h6 className="text-uppercase small">Limited Time Offer!</h6>
              <h2 className="display-6 fw-semibold">OFF 40%-</h2>
              <p className="mb-3">Get the best deals now.</p>
              <a className="btn text-white p-auto" style={{backgroundColor: "#f53f85"}} href="#shopByCategory">Discover Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopByBanner