import React from 'react'
import useFetch from '../useFetch'
import AddressModal from "../components/AddressModal"

const OrderHistory = () => {
    const { data, loading, error } = useFetch("https://neo-g-backend-jwhg.vercel.app/api/orders")
    // const { data, loading, error } = useFetch("http://localhost:3000/api/orders")

    console.log("data", data)
    return (
        <div>
            {loading && (
                <div className="d-flex my-5 justify-content-center">
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )} 
            {!loading && error && <p>Something went wrong while fetching orders. Please try again.</p>}
            {!loading && data?.orders?.length === 0 && <p>No orders found.</p>}
            {!loading && data?.orders?.length > 0 && <div className="accordion" id="accordionOrders">
                {data?.orders?.map((order, index) => (
                    <div key={order._id} className="accordion-item">
                        <h2 className="accordion-header">
                            <button className={`accordion-button ${index > 0 ? "collapsed" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${order._id}`} aria-expanded="true" aria-controls={`collapse-${order._id}`}>
                                <div className="d-flex justify-content-between w-100 px-3">
                                    <div>Order Id: {order?._id}</div>
                                    <div>Total: ₹{order?.totalAmount}</div>
                                </div>
                            </button>
                        </h2>
                        <div id={`collapse-${order._id}`} className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`} data-bs-parent="#accordionOrders">
                            <div className="accordion-body">
                                <div className="row g-0 p-3">
                                    {order?.product?.map((product) => (
                                        <div key={product._id} className="card mb-3 border-0">
                                            <div className="row g-0">
                                                <div className="col-md-2 position-relative">
                                                    <img src={product?.productId?.imageUrl} className="img-fluid rounded-start object-fit-cover h-100" alt="..." />
                                                    {product?.quantity > 1 && <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger">
                                                        {product?.quantity}
                                                        <span className="visually-hidden">unread messages</span>
                                                    </span>}
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h6 className="card-title">{product?.productId?.title}</h6>
                                                        <p className="card-text mb-1">Price: <strong>₹{product?.price}</strong></p>
                                                        <p>Size: <strong>{product?.size}</strong></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <hr />
                                    <div className="row g-0 mb-2">
                                        <div className="card p-3 mb-3">
                                            <div className="col">
                                                <h6 className="fw-bold">Order Summary</h6>
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <p className="mb-0">Subtotal:</p>
                                                        <p className="mb-0">Shipping Fee: </p>
                                                        <p className="mb-0">Discount Applied: </p>
                                                        <p><strong>Grand Total:</strong></p>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0">₹{order?.subTotalAmount}</p>
                                                        <p className="mb-0">₹{order?.shippingFeeAmount}</p>
                                                        <p className="mb-0">- ₹{order?.discountAmount}</p>
                                                        <p>₹{order?.totalAmount}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card p-3 ">
                                            <div className="col">
                                                <h6 className="fw-bold">Shipping Address</h6>
                                                <div className="m-0">
                                                    <p className="mb-0">{order?.addressId?.address}</p>
                                                    <p className="mb-0">{order?.addressId?.city}, {order?.addressId?.state}, {order?.addressId?.pincode}</p>
                                                    <p>India</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="card-text text-end"><small className="text-body-secondary">Order placed on {new Date(order?.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default OrderHistory