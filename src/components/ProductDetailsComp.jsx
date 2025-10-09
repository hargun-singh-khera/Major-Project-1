import ProductBuyingBenefits from './ProductBuyingBenefits.jsx';
import { useEffect, useState } from 'react';
import { useWishlistContext } from '../contexts/WishlistContext.jsx';
import { useCartContext } from '../contexts/CartContext.jsx';
import PlaceholderCard from "../components/PlaceholderCard"
import { renderPlaceholders } from "../components/ShopByCategory"
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard.jsx';
import { useProductContext } from '../contexts/ProductContext.jsx';

const ProductDetailsComp = ({ product, toast }) => {
  const navigate = useNavigate()
  const { _id: productId, name, title, imageUrl, price, category, rating, discount, discountedPrice, stockItems, size, description, isWishlisted, isAddedToCart } = product;

  const { addItemToWishlist, removeItemFromWishlist } = useWishlistContext()
  const { addItemToCart } = useCartContext()
  const [isAddToWishlist, setIsAddToWishlist] = useState(isWishlisted)
  const [quantity, setQuantity] = useState(1)
  const [isAddToCart, setIsAddToCart] = useState(isAddedToCart)
  const [sizeSelected, setSizeSelected] = useState(size[0])
  const [loading, setLoading] = useState(true)

  const { filteredProducts: products, setSelectedCategory} = useProductContext()
  // console.log("Fproducts", products, "cateogory of product details", cat, "selectedCategory", selectedCategory)

  const handleFavClick = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (!isAddToWishlist) {
      // add item to wishlist
      await addItemToWishlist(productId)
      toast.success("Item added to wishlist")
    }
    else {
      // remove wishlisted item
      await removeItemFromWishlist(productId)
      toast.success("Item removed from wishlist")
    }
    setIsAddToWishlist(!isAddToWishlist)
  }

  const handleAddToCart = async (e) => {
    if (!isAddToCart) {
      await addItemToCart(productId, sizeSelected)
      setIsAddToCart(true)
      toast.success("Item added to bag")
    }
    else {
      navigate("/checkout/cart")
    }
  }

  useEffect(() => {
    // console.log("Product details useEffect triggered")
    window.scrollTo(0, 0)
    setSelectedCategory(category)
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const randomIndex = Math.floor(Math.random() * (products.length-1))
  const fixedLength = 4

  return (
    <div className="card mb-3 border-0">
      <div className="row g-0">
        <div className="col-lg-4 p-3 position-relative sticky-top">
          <img
            src={imageUrl}
            className="img-fluid object-fit-cover object-center w-100"
            alt={name}
          />
          <div className="my-4 me-4 position-absolute top-0 end-0 rounded-circle bg-white p-2 d-flex justify-content-center align-items-center">
            {isAddToWishlist ? (
              <svg onClick={handleFavClick} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e81717"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Z" /></svg>
            ) : (
              <span onClick={handleFavClick} className="material-symbols-outlined fs-5">
                favorite
              </span>
            )}
          </div>
          <button className="btn btn-block btn-primary my-3 w-100">
            Buy Now
          </button>
          <button onClick={handleAddToCart} className="btn btn-secondary w-100">{isAddToCart ? "Go to Cart" : "Add to Cart"}</button>
        </div>
        <div className="col-lg-6 px-4 ">
          <div className="card-body">
            <h3 className="card-title ">{name}</h3>
            <h5 className="card-text text-body-tertiary">{title}</h5>
            <div className="d-flex gap-1 mb-1">
              {rating}
              <i className="bi bi-star-fill text-warning"></i>
            </div>
            <div className="mb-4">
              <span className={stockItems === 0 || stockItems <= 5 ? "text-danger" : "text-success"}>{stockItems === 0 ? "Out of Stock" : stockItems <= 5 ? "Limited stock left" : "In Stock"}</span>
            </div>
            <hr />
            <div className="d-flex align-items-center gap-4">
              {discount > 0 ? (
                <>
                  <h3 className="fs-2 fw-bold">₹{discountedPrice}</h3>
                  <h4 className="text-body-tertiary fw-light text-decoration-line-through text-opacity-50">₹{price}</h4>
                </>
              ) : (
                <h3 className="fs-2 fw-bold">₹{price}</h3>
              )}
            </div>
            {discount > 0 && <h4 className="text-body-tertiary fw-light mb-4">{discount}% Off</h4>}
            <div className="d-flex gap-3 mb-3">
              <span>
                <strong>Quantity: </strong>
              </span>
              <button className="btn btn-sm btn-outline-secondary rounded-circle px-2" onClick={() => setQuantity(quantity => quantity > 1 ? quantity - 1 : 1)}>
                -
              </button>
              <span>{quantity}</span>
              <button className="btn btn-sm btn-outline-secondary rounded-circle px-2" onClick={() => setQuantity(quantity => quantity < 10 ? quantity + 1 : quantity)}>
                +
              </button>
            </div>
            <div className="d-flex align-items-center gap-3">
              <span>
                <strong>Size:</strong>
              </span>
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
            </div>
            <hr />
            <div className="d-flex gap-4 flex-wrap">
              <ProductBuyingBenefits />
            </div>
            <hr />
            <div>
              <h5>Description:</h5>
              <ul>
                {description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {loading && <div className="row row-cols-1 row-cols-md-4 g-4 my-2">{renderPlaceholders(4, PlaceholderCard)}</div>}
        {!loading && products && products.length > 0 && (
          <div className="p-3">
            <hr />
            <h3 className="fs-4 fw-semibold">
              More items you may like in apparel
            </h3>
            <div className="row row-cols-1 row-cols-md-4 g-4 my-2">
              {products.filter(product => product._id !== productId).slice(Math.min(randomIndex, products.length - 1 - fixedLength), randomIndex + fixedLength).map(item => <ProductCard key={item._id} product={item} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductDetailsComp;
