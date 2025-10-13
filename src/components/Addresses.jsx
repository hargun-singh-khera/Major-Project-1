import { useEffect, useState } from "react"
import AddressModal from "../components/AddressModal"
import useFetch from "../useFetch"
import toast from 'react-hot-toast'

const Addresses = () => {
    const { data, loading, error } = useFetch("https://neo-g-backend-jwhg.vercel.app/api/address")
    console.log("data", data)

    const [formData, setFormData] = useState({
        state: "",
        city: "",
        address: "",
        pincode: "",
    })

    const [addresses, setAddresses] = useState()
    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(() => {
        if (data) {
            setAddresses(data?.addresses)
        }
    }, [data])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }


    async function addAddress(formData) {
        try {
            const response = await fetch("https://neo-g-backend-jwhg.vercel.app/api/address", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
            const data = await response.json()
            console.log("res added", response, "data", data)
            if (response.ok) {
                // setTimeout(() => setIsSuccess(true), 100)
                setIsSuccess(true)
                setAddresses((prev) => ([...prev, data?.address]))
                toast.success("Address added successfully")
            }
            else {
                toast.error(error?.message || "Failed to add address.")
            }
        } catch (error) {
            console.log("Error while adding address. Please try again.")
            toast.error("Error while adding address. Please try again.")
        }
    }

    async function deleteAddress(addressId) {
        console.log("addressId", addressId)
        try {
            const response = await fetch(`https://neo-g-backend-jwhg.vercel.app/api/address/${addressId}`, {
                method: "DELETE",
            })
            console.log("res", response)
            if (!response.ok) {
                throw new Error("Failed to delete address")
            }
            toast.success("Address deleted successfully")
            console.log("addressId", addressId)
            setAddresses((prevAddresses) => prevAddresses.filter(address => address._id !== addressId))
        } catch (error) {
            console.log(error?.message || "Error while deleting address")
            toast.error(error?.message || "Error while deleting address")
        }
    }

    async function fetchAddress(addressId) {
        // http://localhost:3000/api/address
        // https://neo-g-backend-jwhg.vercel.app/api/address
        try {
            const response = await fetch(`http://localhost:3000/api/address/${addressId}`)
            if(!response.ok) {
                toast.error("Failed to fetch address.")
            }
            const data = await response.json()
            console.log("address fetched data", data)
            return data
        } catch (error) {
            console.log("Error fetching address")
        }
    }

    async function updateAddress(addressId) {
        try {
            const response = await fetch(`https://neo-g-backend-jwhg.vercel.app/api/update/address/${addressId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            })
            if (!response.ok) {
                throw new Error("Failed to update address")
            }
            toast.success("Address updated successfully")
        } catch (error) {
            console.log(error?.message || "Error while updating address")
            toast.error(error?.message || "Error while updating address")
        }
    }

    console.log("addresses", addresses)

    const handleDeleteAddress = async (addressId) => {
        await deleteAddress(addressId)
    }

    const handleUpdateAddress = async (addressId) => {
        await updateAddress(addressId)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { state, city, address, pincode } = formData
        let error = ""
        if (!state) {
            error = "Please enter your state"
        }
        else if (!city) {
            error = "Please enter your city"
        }
        else if (!address) {
            error = "Please enter your address"
        }
        else if (!pincode) {
            error = "Please enter your pincode"
        }
        else if (pincode.length !== 6) {
            error = "Please enter a valid pincode of 6 digits"
        }
        if (error) {
            toast.error(error)
        }
        else {
            addAddress(formData)
            setFormData({
                state: "",
                city: "",
                address: "",
                pincode: "",
            })
            console.log(formData)
        }
    }

    return (
        <div>
            <div className="col-lg-5 d-flex justify-content-between align-items-end">
                <h3 className="mt-4 mb-2">Addresses</h3>
                <button type="button" className="btn btn-sm btn-warning text-white px-3 py-2 rounded-3" data-bs-toggle="modal" data-bs-target="#addressModal">+ ADD NEW ADDRESS</button>
                {/* <AddressModal formData={formData} onSubmit={handleSubmit} onChange={handleInputChange} isSuccess={isSuccess} /> */}
            </div>
            <div className="col-lg-5 mt-4 mb-5">
                {loading && <p>Loading...</p>}
                {addresses && addresses?.length > 0 ? (
                    addresses.map(address => (
                        <div key={address?._id} className="card mb-3 border-0 p-2">
                            <div className="card-body">
                                <p><strong>State:</strong> {address?.state}</p>
                                <p><strong>City:</strong> {address?.city}</p>
                                <p><strong>Address: </strong> {address?.address}</p>
                                <p><strong>Pincode:</strong> {address?.pincode}</p>
                                <div className="d-flex gap-3">
                                    <button type="button" className="btn btn-primary flex-fill" data-bs-toggle="modal" data-bs-target="#addressModal">Edit</button>
                                    <button onClick={() => handleDeleteAddress(address?._id)} className="btn btn-danger flex-fill">Remove</button>
                                     {/* onClick={() => handleUpdateAddress(address?._id)} */}
                                    {/* <AddressModal formData={address} onSubmit={() => handleUpdateAddress(address?._id)} onChange={handleInputChange} isSuccess={isSuccess} /> */}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="py-3 text-secondary">Add your addresses and enjoy faster checkout.</p>
                )}
            </div>
        </div>
    )
}

export default Addresses