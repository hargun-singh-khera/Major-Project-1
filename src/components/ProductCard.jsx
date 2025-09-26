import { Link, useNavigate } from "react-router-dom"
import { useProductContext } from "../contexts/ProductContext"
import { useEffect, useState } from "react"

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const { _id: productId, category, name, price, imageUrl, isWishlisted, isAddedToCart } = product

  const { incrementWishlistCount, decrementWishListCount, incrementCartCount } = useProductContext()
  const userId = "68cab48b2c77561237bcf9f0"

  const [isAddToWishlist, setIsAddToWishlist] = useState(isWishlisted)
  const [isAddToCart, setIsAddToCart] = useState(isAddedToCart)

  const handleFavClick = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (!isAddToWishlist) {
      // add item to wishlist
      try {
        const response = await fetch(`https://neo-g-backend-jwhg.vercel.app/api/wishlists/${userId}/${productId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          }
        })
        const data = await response.json()
        incrementWishlistCount()
      } catch (error) {
        console.log("error", error)
      }
    }
    else {
      // remove wishlisted item
       try {
        const response = await fetch(`https://neo-g-backend-jwhg.vercel.app/api/wishlists/${userId}/${productId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }
        })
        const data = await response.json()
        decrementWishListCount()
      } catch (error) {
        console.log("error", error)
      }
    }
    setIsAddToWishlist(!isAddToWishlist)
  }

  const handleAddToCart = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("handle cart clicked")
    if(!isAddToCart) {
      // add item to cart
      try {
        const response = await fetch(`https://neo-g-backend-jwhg.vercel.app/api/cart/${userId}/${productId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          }
        })
        const data = await response.json()
        incrementCartCount()
      } catch (error) {
        console.log("error", error)
      }
    }
    else {
      navigate("/cart")
    }
    // else {
    //   // remove item from cart
      // try {
      //   const response = await fetch(`https://neo-g-backend-jwhg.vercel.app/api/cart/${userId}/${productId}`, {
      //     method: "DELETE",
      //     headers: {
      //       "Content-Type": "application/json",
      //     }
      //   })
      //   const data = await response.json()
      //   decrementCartCount()
      // } catch (error) {
      //   console.log("error", error)
      // }
    // }
    setIsAddToCart(!isAddToCart)
  }

  console.log("isAddToCart", isAddToCart)
  return (
    <div className="col">
      <Link to={`/products/${category}/${productId}`} className="text-decoration-none">
        <div className="card border-0 rounded">
          <div className="position-relative">
            <img src={imageUrl} className="card-img-top img-fluid" alt="..." />
            <div className="my-2 me-2 position-absolute top-0 end-0 rounded-circle bg-white p-2 d-flex justify-content-center align-items-center">
              {isAddToWishlist ? (
                <svg onClick={handleFavClick} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e81717"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Z"/></svg>
              ) : (
                <span onClick={handleFavClick} className="material-symbols-outlined fs-5">
                  favorite
                </span>
              )}
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title text-center text-body-secondary">{name}</h5>
            <h3 className="card-text text-center">₹{price}</h3>
          </div>
        </div>
      </Link>
      <button type="button" onClick={handleAddToCart} className={`btn ${isAddToCart ? "btn-primary" : "btn-secondary"}  rounded-top-0 w-100`}>{isAddToCart ? "Go to Cart" : "Add to Cart"}</button>
    </div>
  )
}
export default ProductCard