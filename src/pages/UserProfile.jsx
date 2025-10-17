import Header from "../components/Header"
import { Toaster } from 'react-hot-toast'
import Addresses from "../components/Addresses"
import OrderHistory from "../components/OrderHistory"

const UserProfile = () => {
  return (
    <>
      <Header />
      <main className="container my-4">
        <div className="row gap-5">
          <div className="col-lg-5">
            <h3>User Profile</h3>
            <div className="card border-0 p-2 rounded-3">
              <div className="card-body">
                <p><strong>Name:</strong> Hargun Singh Khera</p>
                <p><strong>Email:</strong> hargun@gmail.com</p>
                <p><strong>Mobile: </strong> +91 8539984975</p>
              </div>
            </div>
            <Addresses />
          </div>
          <div className="col-lg-6">
            <h3>Your Orders</h3>
            <OrderHistory />
          </div>
        </div>
        <Toaster />
      </main>
    </>
  )
}
export default UserProfile