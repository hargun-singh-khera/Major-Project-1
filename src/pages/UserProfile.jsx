import { useState } from "react"
import AddressModal from "../components/AddressModal"
import Header from "../components/Header"
import useFetch from "../useFetch"
import toast, { Toaster } from 'react-hot-toast'

const UserProfile = () => {
  const { data, loading, error } = useFetch("https://neo-g-backend-jwhg.vercel.app/api/address")
  console.log("data", data)

  const [formData, setFormData] = useState({
    state: "",
    city: "",
    address: "",
    pincode: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({...prev, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { state, city, address, pincode } = formData
    let error = ""
    if(!state) {
      error = "Please enter your state"
    }
    else if(!city) {
      error = "Please enter your city"
    }
    else if(!address) {
      error = "Please enter your address"
    }
    else if(!pincode) {
      error = "Please enter your pincode"
    }
    else if(pincode.length !== 6) {
      error = "Please enter a valid pincode of 6 digits"
    }
    if(error) {
      toast.error(error)
    }
    console.log(formData)
  }

  async function deleteAddress(addressId) {
    console.log("addressId", addressId)
    try {
      const response = await fetch(`https://neo-g-backend-jwhg.vercel.app/api/address/${addressId}`, {
        method: "DELETE",
      })
      console.log("res", response)
      if(!response.ok) {
        throw new Error("Failed to delete address")
      }
      toast.success("Address deleted successfully")
    } catch (error) {
      console.log(error?.message || "Error while deleting address")
      toast.error(error?.message || "Error while deleting address")
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
      if(!response.ok) {
        throw new Error("Failed to update address")
      }
      toast.success("Address updated successfully")
    } catch (error) {
      console.log(error?.message || "Error while updating address")
      toast.error(error?.message || "Error while updating address")
    }
  }

  const handleDeleteAddress = async (e, addressId) => {
    await deleteAddress(addressId)
  }

  const handleUpdateAddress = async (e, addressId) => {
    await updateAddress(addressId)
  }
  
  return (
    <>
      <Header />
      <main className="container my-4">
        <h3>User Profile</h3>
        <div className="col-lg-5">
          <div className="card border-0 p-2">
            <div className="card-body">
              <p><strong>Name:</strong> Hargun Singh Khera</p>
              <p><strong>Email:</strong> hargun@gmail.com</p>
              <p><strong>Mobile: </strong> +91 8539984975</p>
            </div>
          </div>
        </div>
        <div>
          <div className="col-lg-5 d-flex justify-content-between align-items-end">
            <h3 className="mt-4 mb-2">Addresses</h3>
            <button type="button" className="btn btn-sm btn-warning text-white px-3 py-2 rounded-3" data-bs-toggle="modal" data-bs-target="#addressModal">+ ADD NEW ADDRESS</button>
          </div>
          <div className="col-lg-5 mt-4 mb-5">
            {loading && <p>Loading...</p>}
            {data && data?.addresses?.length > 0 ? (
              data?.addresses?.map(address => (
                <div key={address._id} className="card mb-3 border-0 p-2">
                  <div className="card-body">
                    <p><strong>State:</strong> {address.state}</p>
                    <p><strong>City:</strong> {address.city}</p>
                    <p><strong>Address: </strong> {address.address}</p>
                    <p><strong>Pincode:</strong> {address.pincode}</p>
                    <div className="d-flex gap-3">
                      <button onClick={(e) => handleUpdateAddress(e, address._id)} className="btn btn-primary flex-fill">Edit</button>
                      <button onClick={(e) => handleDeleteAddress(e, address._id)} className="btn btn-danger flex-fill">Remove</button>
                    </div>
                  </div>
                  <AddressModal formData={formData} onSubmit={handleSubmit} onChange={handleInputChange} />
                </div>
              ))
            ) : (
              <p className="py-3 text-secondary">Add your addresses and enjoy faster checkout</p>
            )}
          </div>
        </div>
        <Toaster />
      </main>
    </>
  )
}
export default UserProfile