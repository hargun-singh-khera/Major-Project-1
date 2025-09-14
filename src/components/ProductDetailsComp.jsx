import Rating from './Rating.jsx';
import ProductBuyingBenefits from './ProductBuyingBenefits.jsx';

const ProductDetailsComp = ({ product, category }) => {
  const { title, price, discount, size, description } = product;
  return (
    <div className="card mb-3 border-0">
      <div className="row g-0">
        <div className="col-lg-4 p-3 position-relative">
          <img
            src="https://templates.hibootstrap.com/xton/default/assets/img/products/img4.jpg"
            className="img-fluid"
            alt="..."
          />
          <div className="my-4 me-4 position-absolute top-0 end-0 rounded-circle bg-white p-2 d-flex justify-content-center align-items-center">
            <span className="material-symbols-outlined fs-5">favorite</span>
          </div>
          <button className="btn btn-block btn-primary my-3 w-100">
            Buy Now
          </button>
          <button className="btn btn-secondary w-100">Add to Cart</button>
        </div>
        <div className="col-lg-6 px-4">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <Rating />
            <div className="d-flex align-items-center gap-4">
              <h3 className="fs-2 fw-bold">
                ₹{Math.round(price * ((100 - discount) / 100))}
              </h3>
              <h4 className="text-body-tertiary fw-light text-decoration-line-through text-opacity-50">
                ₹{price}
              </h4>
            </div>
            <h4 className="text-body-tertiary fw-light mb-4">
              {discount}% Off
            </h4>
            <div className="d-flex gap-3 mb-3">
              <span>
                <strong>Quantity: </strong>
              </span>
              <button className="btn btn-sm btn-outline-secondary rounded-4">
                -
              </button>
              1
              <button className="btn btn-sm btn-outline-secondary rounded-4">
                +
              </button>
            </div>
            <div className="d-flex">
              <span>
                <strong>Size:</strong>
              </span>
              <div className="d-flex flex-wrap gap-4 ms-2">
                {size.map((item, index) => (
                  <button
                    key={index}
                    className="btn btn-outline-secondary rounded-0"
                  >
                    {item}
                  </button>
                ))}
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
                {description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="p-3">
          <hr />
          <h3 className="fs-4 fw-semibold">
            More items you may like in apparel
          </h3>
          <div className="row row-cols-1 row-cols-md-4 g-4 my-2">
            {/* <ProductCard category={category} productId={1} />
            <ProductCard category={category} productId={2} />
            <ProductCard category={category} productId={3} />
            <ProductCard category={category} productId={4} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailsComp;
