import { useState } from "react"
import Header from "../components/Header"
import useFetch from "../useFetch"
import { useProductContext } from "../contexts/ProductContext"

const Cart = () => {
  const userId = "68cab48b2c77561237bcf9f0"
  const { data, loading, error } = useFetch(`https://neo-g-backend-jwhg.vercel.app/api/cart/${userId}`)

  const { decrementCartCount } = useProductContext()

  console.log("cart data", data)
  const deliveryCharges = 499  
  const totalPrice = data?.reduce((acc, curr) => acc + (curr.productId.price * curr.quantity), 0)
  const totalDiscount = Math.round(data?.reduce((acc, curr) => acc + (curr.productId.price * (curr.productId.discount / 100)), 0))

  const totalPayableAmount = totalPrice - totalDiscount + deliveryCharges
  const [quantity, setQuantity] = useState(1)

  const handleRemoveFromCart = async (e, productId) => {
    console.log("remove from cart clicked", productId)
    try {
      const response = await fetch(`https://neo-g-backend-jwhg.vercel.app/api/cart/${userId}/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      })
      if(!response.ok) {
        throw new Error("Failed to remove product from cart")
      }
      const data = await response.json()
      console.log("Product deleted from cart")
      decrementCartCount()
    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <>
      <Header />
      <main className="container my-4">
        <h4 className="text-center mb-3">My Cart ({data?.length || 0})</h4>
        {loading && <p className="text-center">Loading ...</p>}
        {error && <p>Something went wrong while loading cart. Please try again later.</p>}
        {data && data.length > 0 ? (
          <div className="row justify-content-center">
            <div className="col-lg-6">
              {data.map(cartItem => (
                <div className="card mb-3 border-0" >
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
                        <button onClick={(e) => handleRemoveFromCart(e, cartItem.productId._id)} className="btn btn-secondary mb-2 w-100 rounded-0">Remove From Cart</button>
                        <button className="btn btn-outline-secondary w-100 rounded-0">Move to Wishlist</button>
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
                      <p className="fs-4">Price ({data?.length || 0} item)</p>
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