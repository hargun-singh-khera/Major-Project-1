import { Link } from "react-router-dom"
import Header from "../components/Header"
import { useProductContext } from "../contexts/ProductContext"
import useFetch from "../useFetch"
import { renderPlaceholders } from "../components/ShopByCategory"
import PlaceholderCard from "../components/PlaceholderCard"
import { useState } from "react"
import { useEffect } from "react"

const Wishlist = () => {
  const userId = "68cab48b2c77561237bcf9f0"
  const { data, loading, error } = useFetch(`https://neo-g-backend-jwhg.vercel.app/api/wishlists/${userId}`)

  console.log("data", data)

  const { decrementWishListCount } = useProductContext()

  const [wishlistData, setWishlistData] = useState([])

  useEffect(() => {
    if(data) {
      setWishlistData(data)
    }
  }, [data])

  const handleDeleteWishlist = async (e, productId) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      const response = await fetch(`https://neo-g-backend-jwhg.vercel.app/api/wishlists/${userId}/${productId}`, {
        method: "DELETE",
      })
      if(response.ok) {
        console.log("Product deleted from wishlist")
      }
      setWishlistData((prevProduct) => prevProduct.filter(product => product.productId._id !== productId))
      decrementWishListCount()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header />
      <main className="container my-4">
        <h4>My Wishlist</h4>
        {loading && <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {renderPlaceholders(4, PlaceholderCard)}
        </div>}
        
        {!loading && wishlistData && wishlistData.length === 0 && <p>Your wishlist is empty. Get started by adding some products.</p>}
        {error && <p className="py-5">Something went wrong while loading products. Please try again later. </p>}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 py-2">
          {wishlistData && wishlistData.length > 0 && wishlistData.map(product => (
            <div key={product._id} className="col">
              <Link to={`/products/${product.productId.category}/${product.productId._id}`} className="text-decoration-none">
                <div className="card border-0 rounded">
                  <div className="position-relative">
                    <img src="https://templates.hibootstrap.com/xton/default/assets/img/products/img4.jpg" className="card-img-top img-fluid" alt={product.productId.name} />
                    <div className="my-2 me-2 position-absolute top-0 end-0 rounded-circle bg-white p-2 d-flex justify-content-center align-items-center">
                      <svg onClick={(e) => handleDeleteWishlist(e, product.productId._id)} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e81717"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Z"/></svg>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center text-body-secondary">{product.productId.name}</h5>
                    <h3 className="card-text text-center">₹{product.productId.price}</h3>
                    <p></p>
                  </div>
                  <button className="btn btn-secondary rounded-top-0 w-100">Move to Cart</button>
                </div>
              </Link>
            </div>))}
        </div>
      </main>
    </>
  )
}
export default Wishlist