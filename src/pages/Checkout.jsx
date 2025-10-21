import React, { useState } from 'react'
import Header from '../components/Header'
import useFetch from '../useFetch'
import AddressModal from '../components/AddressModal'
import { useCartContext } from '../contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

const Checkout = () => {
    const navigate = useNavigate()
    const { data, loading, error } = useFetch("https://neo-g-backend-jwhg.vercel.app/api/address")
    // console.log("address data", data)
    const { cart, setCart, DELIVERY_CHARGES, calculateTotalPrice, calculateTotalDiscount, calculateTotalPayableAmount } = useCartContext()

    const [orderLoading, setOrderLoading] = useState(false)
    const [selectedAddress, setSelectedAddress] = useState({})

    console.log("cart", cart, "selectedAddress", selectedAddress)

    const placeOrder = async () => {
        try {
            setOrderLoading(true)
            const response = await fetch(`https://neo-g-backend-jwhg.vercel.app/api/order/${selectedAddress._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    product: cart.map((item) => ({
                        productId: item.productId._id,
                        quantity: item.quantity,
                        size: item.size,
                        price: item.productId.price,
                    })),
                    subTotalAmount: calculateTotalPrice(),
                    discountAmount: calculateTotalDiscount(),
                    shippingFeeAmount: DELIVERY_CHARGES,
                    totalAmount: calculateTotalPayableAmount(),
                }),
            })
            if (!response.ok) {
                toast.error("Failed to place order. Please try again.")
                return
            }
            const data = await response.json()
            console.log("res", data)
            setCart([])
            toast.success("Order placed successfully.")
            navigate("/checkout/success", {
                state: {
                    address: selectedAddress,
                    order: data?.order
                }
            })
        } catch (error) {
            console.log("Error while placing order", error)
            toast.error("Something went wrong while placing the order.")
        } finally {
            setOrderLoading(false)
        }
    }

    const handlePlaceOrder = () => {
        if(!Object.keys(selectedAddress).length) {
            toast.error("Please select a delivery address.")
        }
        else {
            placeOrder()
        }
    }

    console.log("selected address", selectedAddress)

    return (
        <>
            <Header />
            <main>
                <div className="container my-5">
                    <div className="row d-flex justify-content-around gap-5">
                        <div className="col-lg-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4>Select a delivery address</h4>
                                <button type="button" className="btn btn-sm btn-warning text-white px-3 py-2 rounded-3" data-bs-toggle="modal" data-bs-target="#addressModal">+ ADD NEW ADDRESS</button>
                            </div>
                            {data?.addresses?.map((address, index) => (
                                <div key={address._id} className="p-3 card mb-3 border-0 rounded-3">
                                    <div key={index} className="form-check">
                                        <input value={address} checked={address._id === selectedAddress._id} onChange={() => setSelectedAddress(address)} className="my-5 form-check-input" type="radio" name="radioDefault" id={address?._id} />
                                        <label className="px-3 form-check-label" htmlFor="radioDefault1">
                                            <p><strong>Hargun Singh Khera</strong></p>
                                            <p>{address.address}, {address.city}, {address.state}, {address.pincode}</p>
                                            <p>Mobile: <strong>8787733772</strong></p>
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-4 align-self-center sticky-top">
                            <div className="card border-0 rounded p-3 sticky-top">
                                <div className="card-body">
                                    <h3>Order Summary</h3>
                                    <hr />
                                    <div>
                                        <div className="d-flex justify-content-between">
                                            <p className="fs-4">Price ({cart?.length || 0} item)</p>
                                            <p>₹{calculateTotalPrice().toLocaleString('en-US')}</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="fs-4">Discount</p>
                                            <p>- ₹{calculateTotalDiscount().toLocaleString('en-US')}</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="fs-4">Delivery Charges</p>
                                            <p>₹{DELIVERY_CHARGES}</p>
                                        </div>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="d-flex justify-content-between mt-2">
                                        <p className="fs-4 fw-bold">TOTAL AMOUNT</p>
                                        <p>₹{calculateTotalPayableAmount().toLocaleString('en-US')}</p>
                                    </div>
                                    <hr className="m-0" />
                                    <p className="fs-5 mt-2">You will save ₹{calculateTotalDiscount().toLocaleString('en-US')} on this order.</p>
                                    <button onClick={handlePlaceOrder} className="btn btn-primary w-100" disabled={orderLoading}>
                                        {orderLoading && <span className="spinner-border spinner-border-sm mx-2" aria-hidden="true"></span>}
                                        <span role="status">{!orderLoading ? "Place Order" : "Placing Order"}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Toaster />
            </main>
        </>
    )
}

export default Checkout