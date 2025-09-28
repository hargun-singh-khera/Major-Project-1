import { Link } from "react-router-dom"
import Header from "../components/Header"
import useFetch from "../useFetch"
import { renderPlaceholders } from "../components/ShopByCategory"
import PlaceholderCard from "../components/PlaceholderCard"
import { useState } from "react"
import { useEffect } from "react"
import { useWishlistContext } from "../contexts/WishlistContext"
import { useCartContext } from "../contexts/CartContext"

const Wishlist = () => {
  const userId = "68cab48b2c77561237bcf9f0"
  // const { data, loading, error } = useFetch(`https://neo-g-backend-jwhg.vercel.app/api/wishlists/${userId}`)
  const { data, loading, error } = useFetch(`http://localhost:3000/api/wishlists/${userId}`)

  console.log("data", data)

  const { removeItemFromWishlist } = useWishlistContext()
  const { addItemToCart } = useCartContext()

  const [wishlistData, setWishlistData] = useState([])

  useEffect(() => {
    if(data) {
      setWishlistData(data)
    }
  }, [data])

  const handleDeleteWishlist = async (e, productId) => {
    e.preventDefault()
    e.stopPropagation()
    await removeItemFromWishlist(productId)
    setWishlistData((prevProduct) => prevProduct.filter(product => product.productId._id !== productId))
  }

  const handleMoveToCart = async (e, productId) => {
    e.preventDefault()
    e.stopPropagation()
    await addItemToCart(productId)
    setWishlistData((prevProduct) => prevProduct.filter(product => product.productId._id !== productId))
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
                    {product.productId.isNew && <span class="position-absolute ms-1 mt-1 top-0 start-0 badge rounded-pill text-bg-success">New</span>}
                    <span className="position-absolute bottom-0 start-0 mb-2 ms-2 badge rounded-pill text-bg-light">
                      <i className="bi bi-star-fill text-warning"></i> {product.productId.rating}
                    </span>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-body-secondary">{product.productId.name}</h5>
                    <div className="d-flex gap-2 align-items-center">
                      <h5 className="card-text mb-0">₹{Math.round(product.productId.price * (100-product.productId.discount)/100)}</h5>
                      <h6 className="card-text text-decoration-line-through fw-lighter mb-0">₹{product.productId.price}</h6>
                      <p className="mb-0 text-danger-emphasis">({product.productId.discount}% OFF)</p>
                    </div>
                  </div>  
                  <button onClick={(e) => handleMoveToCart(e, product.productId._id)} className="btn btn-secondary rounded-top-0 w-100">Move to Cart</button>
                </div>
              </Link>
            </div>))}
        </div>
      </main>
    </>
  )
}
export default Wishlist