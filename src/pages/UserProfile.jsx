import Header from "../components/Header"
import { Toaster } from 'react-hot-toast'
import Addresses from "../components/Addresses"

const UserProfile = () => {
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
        <Addresses />
        <Toaster />
      </main>
    </>
  )
}
export default UserProfile