import React from 'react'

const AddressModal = ({ formData, onSubmit, onChange, isSuccess }) => {
    console.log("formData", formData)
    console.log("isSuccess", isSuccess)
    return (
        <form onSubmit={onSubmit}>
            <div className="modal fade" id="addressModal" tabIndex="-1" aria-labelledby="addressModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="addressModalLabel">Add New Address</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="state" className="form-label">State</label>
                                        <input type="text" name="state" className="form-control" id="state" value={formData?.state} onChange={onChange} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="city" className="form-label">City</label>
                                        <input type="text" name="city" className="form-control" id="city" value={formData?.city} onChange={onChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" name="address" className="form-control" id="address" value={formData?.address} placeholder="Address (Building, Street, Area)" onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pincode" className="form-label">Pincode</label>
                                <input type="text" name="pincode" maxLength={6} className="form-control" id="pincode" value={formData?.pincode} onChange={onChange} />
                            </div>
                        </div>
                        <div className="modal-footer d-flex flex-row">
                            <button type="button" className="btn btn-secondary flex-fill" data-bs-dismiss="modal">Cancel</button>
                            <button className="btn btn-success flex-fill" data-bs-dismiss={isSuccess ? "modal" : undefined}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddressModal