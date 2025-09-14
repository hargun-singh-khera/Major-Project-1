import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <Link className="navbar-brand" to="/">MyShoppingSite</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <div className="mx-auto py-3 py-lg-1">
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              </form>
            </div>
            
            <div className="ms-auto py-1">
              <ul className="navbar-nav d-flex flex-row py-1" >
                <li><Link className="btn btn-secondary" to="/login">Login</Link></li>
                <li>
                  <Link className="btn position-relative" to="/wishlist">
                    <span className="material-symbols-outlined">
                      favorite
                    </span>
                    <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger">
                      0
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="btn position-relative" to="/cart">
                    <span className="material-symbols-outlined">
                      shopping_cart
                    </span>
                    <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger">
                      0
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="btn position-relative" to="/profile">
                    <span className="material-symbols-outlined">
                      person
                    </span>
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