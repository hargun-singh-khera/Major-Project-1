import React from 'react'

const AddToCartModal = ({ productId, imageUrl, name, title, price, discount, discountedPrice, size, sizeSelected, setSizeSelected, sizeError, onClick }) => {
    return (
        <div onClick={(e) => {e.preventDefault(); e.stopPropagation();}} className="modal fade" id={`addToCartModal-${productId}`} tabIndex="-1" aria-labelledby={`addToCartModalLabel-${productId}`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="card border-0 mb-3">
                            <div className="row g-0">
                                <div className="col-md-2">
                                    <img src={imageUrl} className="img-fluid rounded-start object-fit-cover" alt="..." />
                                </div>
                                <div className="col-md-8 p-0">
                                    <div className="card-body px-0 px-md-3">
                                        <h5 className="card-title m-0">{name}</h5>
                                        <h6 className="card-text text-body-tertiary">{title.slice(0, 32)}...</h6>
                                        <div className="d-flex gap-2 align-items-center">
                                            {discount > 0 ? (
                                                <>
                                                    <h5 className="card-text mb-0">₹{discountedPrice}</h5>
                                                    <h6 className="card-text text-decoration-line-through fw-lighter mb-0">₹{price}</h6>
                                                    <p className="mb-0 text-danger-emphasis">({discount}% OFF)</p>
                                                </>
                                            ) : (
                                                <h5 className="card-text mb-0">₹{discountedPrice}</h5>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                    </div>
                    <div className="modal-body">
                        <h5 className="card-text fs-6 ">Select Size</h5>
                        <div className="d-flex flex-wrap gap-4 ms-2">
                            {size.map((item, index) => (
                                <button
                                    onClick={() => setSizeSelected(item)}
                                    key={index}
                                    className={`btn ${sizeSelected === item ? "btn-outline-primary" : "btn-outline-secondary"} rounded-2 px-3 p-2`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                        {sizeError && <p className="text-danger">{sizeError}</p>}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary px-4" data-bs-dismiss="modal">Close</button>
                        <button onClick={onClick} type="button" className="btn btn-success px-4" data-bs-dismiss={sizeSelected !== "" ? "modal" : undefined}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddToCartModal