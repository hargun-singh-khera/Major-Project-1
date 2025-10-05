import { useProductContext } from "../contexts/ProductContext"

const FilterBar = ({ isFlex = false, id="mobile" }) => {
  const { category, setCategory, rating, setRating, price, setPrice, sortedProducts, setSortedProducts, clearFilter, season, setSeason, discount, setDiscount } = useProductContext()
  // console.log("In filterbar category", category, "rating", rating, "price", price)


  const handleCategoryChange = (e) => {
    const { value, checked } = e.target
    if(checked) {
      setCategory((prev) => [...prev, value])
    }
    else {
      setCategory((prev) => prev.filter(category => category !== value))
    }
  }


  return (
    <div className={`${!isFlex ? "w-25 d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block pb-5" : ""} bg-white`}>
      <div className="d-flex justify-content-between align-items-center w-100 px-4 py-2">
        <h4>Filters</h4>
        <button className="btn text-danger" onClick={() => clearFilter()}>Clear All</button>
      </div>
      <hr />
      <div className="px-4 py-1">
        <h4>Price</h4>
        <h6 className="d-flex justify-content-center">₹{price}</h6>
        <input type="range" min="0" max="5000" step={100} value={price} onChange={(e) => setPrice(e.target.value)} className="form-range" id="range1" />
      </div>
      <hr />
      <div className={isFlex ? "d-flex flex-column justify-content-between flex-md-row" : ""}>
        <div className="px-4">
          <h4>Category</h4>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="men" checked={category.includes("men")} value="men" onChange={handleCategoryChange} />
            <label className="form-check-label" htmlFor="men">
              Men Clothing
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="women" checked={category.includes("women")} value="women" onChange={handleCategoryChange} />
            <label className="form-check-label" htmlFor="women">
              Women Clothing
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="kids" checked={category.includes("kids")} value="kids" onChange={handleCategoryChange} />
            <label className="form-check-label" htmlFor="kids">
              Kids Clothing
            </label>
          </div>
        </div>
        <hr />
        <div className="px-4">
          <h4>Rating</h4>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={`rating-${id}`} id={`fourStars-${id}`} checked={rating === 4} onChange={() => setRating(4)} />
            <label className="form-check-label" htmlFor={`fourStars-${id}`}>
              4 stars & above
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={`rating-${id}`} id={`threeStars-${id}`} checked={rating === 3} onChange={() => setRating(3)} />
            <label className="form-check-label" htmlFor={`threeStars-${id}`}>
              3 stars & above
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={`rating-${id}`} id={`twoStars-${id}`} checked={rating === 2} onChange={() => setRating(2)} />
            <label className="form-check-label" htmlFor={`twoStars-${id}`}>
              2 stars & above
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={`rating-${id}`} id={`oneStar-${id}`} checked={rating === 1} onChange={() => setRating(1)} />
            <label className="form-check-label" htmlFor={`oneStar-${id}`}>
              1 stars & above
            </label>
          </div>
        </div>
        <hr />
        <div className="px-4">
          <h4>Sort by</h4>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={`sort-${id}`} id={`lowToHigh-${id}`} checked={sortedProducts === "asc"} onChange={() => setSortedProducts("asc")} />
            <label className="form-check-label" htmlFor={`lowToHigh-${id}`}>
              Price - Low to High
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={`sort-${id}`} id={`highToLow-${id}`} checked={sortedProducts === "desc"} onChange={() => setSortedProducts("desc")} />
            <label className="form-check-label" htmlFor={`highToLow-${id}`}>
              Price - High to Low
            </label>
          </div>
        </div> 
        <hr />
        <div className="px-4">
          <h4>Season</h4>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={`season-${id}`} id={`summer-${id}`} checked={season === "Summer"} onChange={() => setSeason("Summer")} />
            <label className="form-check-label" htmlFor={`summer-${id}`}>
              Summer
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={`season-${id}`} id={`spring-${id}`} checked={season === "Spring"} onChange={() => setSeason("Spring")} />
            <label className="form-check-label" htmlFor={`spring-${id}`}>
              Spring
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={`season-${id}`} id={`autumn-${id}`} checked={season === "Autumn"} onChange={() => setSeason("Autumn")} />
            <label className="form-check-label" htmlFor={`autumn-${id}`}>
              Autumn
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={`season-${id}`} id={`winter-${id}`} checked={season === "Winter"} onChange={() => setSeason("Winter")} />
            <label className="form-check-label" htmlFor={`winter-${id}`}>
              Winter
            </label>
          </div>
        </div> 
        <hr />
        <div className="px-4">
          <h4>Discount Range</h4>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={`discount-${id}`} id={`eightyAndAbove-${id}`} checked={discount === 80} onChange={() => setDiscount(80)} />
            <label className="form-check-label" htmlFor={`eightyAndAbove-${id}`}>
              80% and above
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={`discount-${id}`} id={`seventyAndAbove-${id}`} checked={discount === 70} onChange={() => setDiscount(70)} />
            <label className="form-check-label" htmlFor={`seventyAndAbove-${id}`}>
              70% and above
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={`discount-${id}`} id={`sixtyAndAbove-${id}`} checked={discount === 60} onChange={() => setDiscount(60)} />
            <label className="form-check-label" htmlFor={`sixtyAndAbove-${id}`}>
              60% and above
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={`discount-${id}`} id={`fivetyAndAbove-${id}`} checked={discount === 50} onChange={() => setDiscount(50)} />
            <label className="form-check-label" htmlFor={`fivetyAndAbove-${id}`}>
              50% and above
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={`discount-${id}`} id={`oneStar-${id}`} checked={discount === 40} onChange={() => setDiscount(40)} />
            <label className="form-check-label" htmlFor={`oneStar-${id}`}>
              40% and above
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={`discount-${id}`} id={`thirtyAndAbove-${id}`} checked={discount === 30} onChange={() => setDiscount(30)} />
            <label className="form-check-label" htmlFor={`thirtyAndAbove-${id}`}>
              30% and above
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={`discount-${id}`} id={`twentyAndAbove-${id}`} checked={discount === 20} onChange={() => setDiscount(20)} />
            <label className="form-check-label" htmlFor={`twentyAndAbove-${id}`}>
              20% and above
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={`discount-${id}`} id={`tenAndAbove-${id}`} checked={discount === 10} onChange={() => setDiscount(10)} />
            <label className="form-check-label" htmlFor={`tenAndAbove-${id}`}>
              10% and above
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FilterBar