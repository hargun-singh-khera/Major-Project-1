import React from 'react'
import Header from './Header'
import { Link, useLocation } from 'react-router-dom'
import useFetch from '../useFetch'

const CheckoutSuccess = () => {
    const location = useLocation()
    const { address, order } = location.state
    console.log("address", address)
    console.log("order", order)

    return (
        <>
            <Header />
            <main className="d-flex justify-content-center align-items-center w-75 mx-auto">
                <div className="container my-5 card p-4 border-0 rounded-3 shadow-sm mx-2">
                    <div className="d-flex gap-3 align-items-center justify-content-center mb-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/1200px-Eo_circle_green_checkmark.svg.png" className="img-fluid" style={{ width: "2.4rem" }} alt="" />
                        <h2 className="text-success">Order Placed, thank you</h2>
                    </div>
                    <div>
                        <p className="fs-6 text-center"><strong>Shipping to Hargun Singh Khera,</strong> {address.address}, {address.city}, {address.state}, {address.pincode}</p>
                        <p className="text-end my-0"><strong>Order ID:</strong> {order?._id}</p>
                    </div>
                    <hr />
                    {order && order?.product.length > 0 && order?.product?.map(product => (
                        <div key={product._id}>
                            <div className="card mb-3 border-1">
                                <div className="row g-0">
                                    <div className="col-md-1 position-relative">
                                        <img src={product?.productId?.imageUrl} className="img-fluid rounded-start object-fit-cover h-100" alt="..." />
                                        {product?.quantity > 1 && <span className="position-absolute bottom-0 end-0 badge rounded-pill bg-danger">
                                            {product?.quantity}
                                            <span className="visually-hidden">unread messages</span>
                                        </span>}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h6 className="card-title">{product?.productId?.title}</h6>
                                            <p className="card-text">₹{product?.price}</p>
                                            {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))}
                    

                    <div className="d-flex flex-column flex-md-row gap-4 text-center my-5 justify-content-center">
                        <Link to={"/shop/products"} className="btn btn-success">Continue Shopping</Link>
                        <Link to={"/profile"} className="btn btn-warning btn-info text-white">View Orders</Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default CheckoutSuccess