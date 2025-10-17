import React from 'react'
import useFetch from '../useFetch'
import AddressModal from "../components/AddressModal"

const OrderHistory = () => {
    const { data, loading, error } = useFetch("https://neo-g-backend-jwhg.vercel.app/api/orders")
    console.log("data", data)
    return (
        <div>
            {!loading && data?.orders?.length > 0 && data?.orders?.map((order, index) => (
                <div key={index} className="card border-0 rounded-3 shadow-sm mb-3">
                    <div className="row g-0">
                        <div className="col-md-3 d-flex">
                            <img src={order?.productId?.imageUrl} className="img-fluid rounded-start object-fit-cover" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{order?.productId?.title}</h5>
                                <p className="card-text mb-1">Total <span className="text-danger">₹{order?.productId?.price}</span></p>
                                <p>Size: {order?.size}</p>
                                <p>Ship To {order?.addressId?.address}, {order?.addressId?.city}, {order?.addressId?.state}, {order?.addressId?.pincode}</p>
                                <p className="card-text"><small className="text-body-secondary">Ordered on {order?.createdAt.toLocaleString("en-US")}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OrderHistory