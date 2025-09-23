import { Link } from "react-router-dom"
import { useProductContext } from "../contexts/ProductContext"
import { useState } from "react"

const ProductCard = ({ product}) => {
  const { _id: productId, category, name, price, imageUrl, isWishlisted } = product

  const { incrementWishlistCount, decrementWishListCount, incrementCartCount, decrementCartCount } = useProductContext()

  // const [isAddToCart, setIsAddToCart] = useState(false)
  const [isAddToWishlist, setIsAddToWishlist] = useState(false)

  // const handleBtnClick = async () => {
  //   try {
  //     const response = await fetch(`https://neo-g-backend-jwhg.vercel.app/api/cart/68cab48b2c77561237bcf9f0/${productId}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ quantity: 1 }),  
  //     })
      
  //     const data = await response.json()
  //     incrementCartCount()
  //     setIsAddToCart(true)
  //     console.log("submitted data", data)
  //   } catch (error) {
  //     console.log("error", error)
  //   }
  // }

  const handleFavClick = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("Handle fav click")
    const userId = "68cab48b2c77561237bcf9f0"
    try {
      const response = await fetch(`https://neo-g-backend-jwhg.vercel.app/api/wishlists/${userId}/${productId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
      
      const data = await response.json()
      incrementWishlistCount()
      setIsAddToWishlist(true)
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
              {/* <span className="material-symbols-outlined fs-5">
                favorite
              </span> */}
              {/* {!isAddToWishlist ? (<span onClick={handleFavClick} className="material-symbols-outlined fs-5">
                favorite
              </span>) : (
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e81717"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Z"/></svg>
              )} */}
              {/* {isWishlisted && <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e81717"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Z"/></svg>} */}
              {isWishlisted ? (
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e81717"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Z"/></svg>
              ) : (
                !isAddToWishlist ? (
                  <span onClick={handleFavClick} className="material-symbols-outlined fs-5">
                    favorite
                  </span>) : (
                  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e81717"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Z"/></svg>
                )
              )}
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title text-center text-body-secondary">{name}</h5>
            <h3 className="card-text text-center">₹{price}</h3>
          </div>
        </div>
      </Link>
      <button type="button"  className="btn btn-secondary rounded-top-0 w-100">Add to Cart</button>
    </div>
  )
}
export default ProductCard