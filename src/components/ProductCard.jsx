import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useCartContext } from "../contexts/CartContext";
import { useWishlistContext } from "../contexts/WishlistContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const { _id: productId, category, name, price, discountedPrice, discount, rating, isNew, imageUrl, stockItems, isWishlisted, isAddedToCart } = product

  const { addItemToWishlist, removeItemFromWishlist } = useWishlistContext()
  const { addItemToCart } = useCartContext()

  const [isAddToWishlist, setIsAddToWishlist] = useState(isWishlisted)
  const [isAddToCart, setIsAddToCart] = useState(isAddedToCart)
  
  useEffect(() => {
    setIsAddToWishlist(isWishlisted)
    setIsAddToCart(isAddedToCart)
  }, [isWishlisted, isAddedToCart])
  
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

  const handleAddToCart = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("handle cart clicked")
    if(!isAddToCart) {
      // add item to cart
      await addItemToCart(productId)
      setIsAddToCart(true)
    }
    else {
      navigate("/cart")
    }
  }

  // console.log("isAddToCart", isAddToCart, productId)
  
  return (
    <div className="col">
      <Link to={`/products/${category}/${productId}`} className="text-decoration-none">
        <div className="card border-0 rounded">
          <div className="position-relative">
            <img src={imageUrl} className="card-img-top object-fit-cover object-center img-fluid" alt="..." />
            <div className="my-2 me-2 position-absolute top-0 end-0 rounded-circle bg-white p-2 d-flex justify-content-center align-items-center">
              {isAddToWishlist ? (
                <svg onClick={handleFavClick} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e81717"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Z"/></svg>
              ) : (
                <span onClick={handleFavClick} className="material-symbols-outlined fs-5">
                  favorite
                </span>
              )}
            </div>
            {isNew && <span className="position-absolute ms-1 mt-1 top-0 start-0 badge rounded-pill text-bg-success">New</span>}
            <span className="position-absolute bottom-0 start-0 mb-2 ms-2 badge rounded-pill text-bg-light">
              <i className="bi bi-star-fill text-warning"></i> {rating}
            </span>
            {stockItems <= 5 && <span style={{ fontSize: "10px"}} className="position-absolute bottom-0 end-0 mb-2 mx-2 badge rounded-pill text-bg-danger">Only {stockItems} left!</span>}
          </div>
          <div className="card-body">
            <h5 className="card-title text-body-secondary">{name}</h5>
            <div className="d-flex gap-2 align-items-center">
              {discount > 0 ? (
                <>
                  <h5 className="card-text mb-0">₹{discountedPrice}</h5>
                  <h6 className="card-text text-decoration-line-through fw-lighter mb-0">₹{price}</h6>
                  <p className="mb-0 text-danger-emphasis">({discount}% OFF)</p>
                </>
              ) : (
                <h5 className="card-text mb-0">₹{discountedPrice}</h5>
              )}
            </div>
          </div>
        </div>
      </Link>
      <button type="button" onClick={handleAddToCart} className={`btn ${isAddToCart ? "btn-primary" : "btn-secondary"}  rounded-top-0 w-100`}>{isAddToCart ? "Go to Cart" : "Add to Cart"}</button>
    </div>
  )
}
export default ProductCard