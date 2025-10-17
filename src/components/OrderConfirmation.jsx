import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const OrderConfirmation = () => {
  return (
    <>
        {/* <Header /> */}
        <main className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="container my-5">
                <div className="d-flex gap-3 align-items-center justify-content-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/1200px-Eo_circle_green_checkmark.svg.png" className="img-fluid" style={{ width: "3rem"}} alt="" />
                    <h2 className="text-center">Order Placed Successfully</h2>
                </div>
                <div className="d-flex gap-4 text-center my-5 justify-content-center">
                    <Link to={"/shop/products"} className="btn btn-success">Continue Shopping</Link>
                    <Link to={"/profile"} className="btn btn-info text-white">View Orders</Link>
                </div>
            </div>
        </main>
    </>
  )
}

export default OrderConfirmation