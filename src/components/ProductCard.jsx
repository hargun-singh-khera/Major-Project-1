import { Link } from "react-router-dom"
import { useProductContext } from "../contexts/ProductContext"
import { useState } from "react"

const ProductCard = ({ product}) => {
  const { _id: productId, category, name, price, imageUrl } = product

  const { incrementWishlistCount, decrementWishListCount, incrementCartCount, decrementCartCount } = useProductContext()

  const handleBtnClick = async () => {
    try {
      const response = await fetch(`https://neo-g-backend-jwhg.vercel.app/api/cart/68cab48b2c77561237bcf9f0/${productId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: 1 }),  
      })
      
      const data = await response.json()
      incrementCartCount()
      setBtnText("Remove from Cart")
      console.log("submitted data", data)
    } catch (error) {
      console.log("error", error)
    }
  }

  const handleFavClick = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      const response = await fetch(`https://neo-g-backend-jwhg.vercel.app/api/wishlists/68cab48b2c77561237bcf9f0/${productId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
      
      const data = await response.json()
      incrementWishlistCount()
      console.log("submitted data", data)
    } catch (error) {
      console.log("error", error)
    }
  }


  return (
    <div className="col">
      <Link to={`/products/${category}/${productId}`} className="text-decoration-none">
        <div className="card border-0 rounded">
          <div className="position-relative">
            <img src={imageUrl} className="card-img-top img-fluid" alt="..." />
            <div className="my-2 me-2 position-absolute top-0 end-0 rounded-circle bg-white p-2 d-flex justify-content-center align-items-center">
              <span onClick={handleFavClick} className="material-symbols-outlined fs-5">
                favorite
              </span>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title text-center text-body-secondary">{name}</h5>
            <h3 className="card-text text-center">₹{price}</h3>
          </div>
        </div>
      </Link>
      <button type="button" onClick={handleBtnClick} className="btn btn-secondary rounded-top-0 w-100">Add to Cart</button>
    </div>
  )
}
export default ProductCard