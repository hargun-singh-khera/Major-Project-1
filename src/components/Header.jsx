import { Link } from "react-router-dom"
import { useWishlistContext } from "../contexts/WishlistContext"
import { useCartContext } from "../contexts/CartContext"
const Header = ({ setSearchQuery }) => {
  const { wishlistCount } = useWishlistContext()
  const { cartCount } = useCartContext()

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <Link className="navbar-brand" to="/">MyShoppingSite</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <div className="ms-auto py-3 py-lg-1 col-12 col-lg-5">
              <form className="d-flex position-relative align-items-center" role="search">
                <span className="position-absolute material-symbols-outlined px-3">
                  search
                </span>
                <input className="form-control me-2 px-5 rounded-5 py-2" type="search" placeholder="Search for products, brands and more ..." aria-label="Search" onChange={handleSearch} />
              </form>
            </div>

            <div className="ms-auto py-1">
              <ul className="navbar-nav d-flex flex-row py-1" >
                {/* <li><Link className="btn btn-secondary mx-2" to="/login">Login</Link></li> */}
                <li>
                  <Link className="btn position-relative d-flex flex-column" to="/profile">
                    <span className="material-symbols-outlined" style={{ fontSize: "30px"}}>
                      person
                    </span>
                    <h6 style={{ fontSize: "12px" }}>Profile</h6>
                  </Link>
                </li>
                <li>
                  <Link className="btn d-flex flex-column" to="/wishlist">
                    <div className="position-relative">
                      <span className="material-symbols-outlined fs-4">
                        favorite
                      </span>
                      <span className="position-absolute top-0 translate-middle translate-middle badge rounded-pill bg-danger ">
                        {wishlistCount > 0 && wishlistCount}
                        {wishlistCount > 0 && <span className="visually-hidden">unread messages</span>}
                      </span>
                    </div>
                    <h6 style={{ fontSize: "12px" }}>Wishlist</h6>
                  </Link>
                </li>
                <li>
                  <Link className="btn d-flex flex-column" to="/cart">
                    <div className="position-relative">
                      <span className="material-symbols-outlined fs-4">
                        local_mall
                      </span>
                      <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger">
                        {cartCount > 0 && cartCount}
                        {cartCount > 0 && <span className="visually-hidden">unread messages</span>}
                      </span>
                    </div>
                    <h6 style={{ fontSize: "12px" }}>Bag</h6>
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header