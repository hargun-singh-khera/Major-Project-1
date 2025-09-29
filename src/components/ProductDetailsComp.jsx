import Rating from './Rating.jsx';
import ProductBuyingBenefits from './ProductBuyingBenefits.jsx';
import { useState } from 'react';
import { useWishlistContext } from '../contexts/WishlistContext.jsx';

const ProductDetailsComp = ({ product, category }) => {
  const { _id: productId, name, title, price, rating, discount, discountedPrice, stockItems, size, description, isWishlisted, isAddedToCart } = product;
  const [quantity, setQuantity] = useState(1)

  const { addItemToWishlist, removeItemFromWishlist } = useWishlistContext()
  const [isAddToWishlist, setIsAddToWishlist] = useState(isWishlisted)
  
  const handleFavClick = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (!isAddToWishlist) {
      // add item to wishlist
      await addItemToWishlist(productId)
    }
    else {
      // remove wishlisted item
      await removeItemFromWishlist(productId)
    }
    setIsAddToWishlist(!isAddToWishlist)
  }

  return (
    <div className="card mb-3 border-0">
      <div className="row g-0">
        <div className="col-lg-4 p-3 position-relative">
          <img
            src="https://templates.hibootstrap.com/xton/default/assets/img/products/img4.jpg"
            className="img-fluid"
            alt={name}
          />
          <div className="my-4 me-4 position-absolute top-0 end-0 rounded-circle bg-white p-2 d-flex justify-content-center align-items-center">
            {isAddToWishlist ? (
                <svg onClick={handleFavClick} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e81717"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Z"/></svg>
              ) : (
                <span onClick={handleFavClick} className="material-symbols-outlined fs-5">
                  favorite
                </span>
              )}
          </div>
          <button className="btn btn-block btn-primary my-3 w-100">
            Buy Now
          </button>
          <button className="btn btn-secondary w-100">{isAddedToCart ? "Remove from Cart" : "Add to Cart"}</button>
        </div>
        <div className="col-lg-6 px-4">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <Rating rating={rating} />
            <div className="d-flex align-items-center gap-4">
              {discount > 0 ? (
                <>
                  <h3 className="fs-2 fw-bold">₹{discountedPrice}</h3>
                  <h4 className="text-body-tertiary fw-light text-decoration-line-through text-opacity-50">₹{price}</h4>
                </>
              ) : (
                <h3 className="fs-2 fw-bold">₹{price}</h3>
              )}
            </div>
            {discount > 0 && <h4 className="text-body-tertiary fw-light mb-4">{discount}% Off</h4>}
            <div className="d-flex gap-3 mb-3">
              <span>
                <strong>Quantity: </strong>
              </span>
              <button className="btn btn-sm btn-outline-secondary rounded-circle px-2" onClick={() => setQuantity(quantity => quantity > 1 ? quantity - 1 : 1)}>
                -
              </button>
              <span>{quantity}</span>
              <button className="btn btn-sm btn-outline-secondary rounded-circle px-2" onClick={() => setQuantity(quantity => quantity < 10 ? quantity + 1: quantity)}>
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
