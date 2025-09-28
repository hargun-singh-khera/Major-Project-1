import { useEffect, useState } from "react"
import Header from "../components/Header"
import { useCartContext } from "../contexts/CartContext"
import { useWishlistContext } from "../contexts/WishlistContext"
import useFetch from "../useFetch"

const Cart = () => {
  const userId = "68cab48b2c77561237bcf9f0"
  const { data, loading, error } = useFetch(`https://neo-g-backend-jwhg.vercel.app/api/cart/${userId}`)

  const [cartData, setCartData] = useState([])

  useEffect(() => {
    if (data) {
      setCartData(data)
    }
  }, [data])

  const { removeItemFromCart } = useCartContext()
  const { addItemToWishlist } = useWishlistContext()

  const deliveryCharges = 499
  const totalPrice = cartData?.reduce((acc, curr) => acc + (curr.productId.price * curr.quantity), 0)
  const totalDiscount = Math.round(cartData?.reduce((acc, curr) => acc + (curr.productId.price * (curr.productId.discount / 100)), 0))

  const totalPayableAmount = totalPrice - totalDiscount + deliveryCharges
  const [quantity, setQuantity] = useState(1)

  const handleRemoveFromCart = async (e, cartId, productId) => {
    await removeItemFromCart(cartId, productId)
    setCartData((prevCartData) => prevCartData.filter(cartItem => cartItem._id !== cartId))

  }

  const handleMoveToWishlist = async (e, cartId, productId) => {
    await addItemToWishlist(productId)
    await removeItemFromCart(cartId, productId)
    setCartData((prevCartData) => prevCartData.filter(cartItem => cartItem._id !== cartId))
  }

  console.log("cartData", cartData)

  return (
    <>
      <Header />
      <main className="container my-4">
        <h4 className="text-center mb-3">My Cart ({cartData?.length || 0})</h4>
        {loading && <p className="text-center">Loading ...</p>}
        {error && <p>Something went wrong while loading cart. Please try again later.</p>}
        {cartData && cartData.length > 0 ? (
          <div className="row justify-content-center">
            <div className="col-lg-6">
              {cartData.map(cartItem => (
                <div key={cartItem._id} className="card mb-3 border-0" >
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <img src="https://templates.hibootstrap.com/xton/default/assets/img/products/img4.jpg" className="img-fluid h-100 w-100 object-fit-cover" alt="..." />
                    </div>
                    <div className="col-lg-6 py-xl-5 py-lg-4 py-md-3">
                      <div className="card-body">
                        <h5 className="card-title">{cartItem.productId.name}</h5>
                        <div className="d-flex align-items-center gap-4">
                          <h3 className="fs-2 fw-bold">₹{Math.round(cartItem.productId.price * ((100 - cartItem.productId.discount) / 100))}</h3>
                          <h4 className="text-body-tertiary fw-light text-decoration-line-through text-opacity-50">₹{cartItem.productId.price}</h4>
                        </div>
                        <h4 className="text-body-tertiary fw-light mb-4">{cartItem.productId.discount}% Off</h4>
                        <div className="d-flex gap-3 mb-3">
                          <span><strong>Quantity: </strong></span>
                          <button onClick={() => setQuantity((prev) => prev > 1 ? prev - 1 : prev)} className="btn btn-sm btn-outline-secondary rounded-4">-</button>
                          {quantity}
                          <button onClick={() => setQuantity((prev) => prev + 1)} className="btn btn-sm btn-outline-secondary rounded-4">+</button>
                        </div>
                        <button onClick={(e) => handleRemoveFromCart(e, cartItem._id, cartItem.productId._id)} className="btn btn-secondary mb-2 w-100 rounded-0">Remove From Cart</button>
                        <button onClick={(e) => handleMoveToWishlist(e, cartItem._id, cartItem.productId._id)} className="btn btn-outline-secondary w-100 rounded-0">Move to Wishlist</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-4">
              <div className="card border-0 rounded p-3 sticky-top">
                <div className="card-body">
                  <h3>PRICE DETAILS</h3>
                  <hr />
                  <div>
                    <div className="d-flex justify-content-between">
                      <p className="fs-4">Price ({cartData?.length || 0} item)</p>
                      <p>₹{totalPrice}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="fs-4">Discount</p>
                      <p>- ₹{totalDiscount}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="fs-4">Delivery Charges</p>
                      <p>₹{deliveryCharges}</p>
                    </div>
                  </div>
                  <hr className="m-0" />
                  <div className="d-flex justify-content-between mt-2">
                    <p className="fs-4 fw-bold">TOTAL AMOUNT</p>
                    <p>₹{totalPayableAmount}</p>
                  </div>
                  <hr className="m-0" />
                  <p className="fs-5 mt-2">You will save ₹{totalDiscount} on this order.</p>
                  <button className="btn btn-primary w-100">Place Order</button>
                </div>
              </div>
            </div>
          </div>
        ) : (<p>Looks like your cart is empty. Please add some products to your cart.</p>)}
      </main>
    </>
  )
}
export default Cart