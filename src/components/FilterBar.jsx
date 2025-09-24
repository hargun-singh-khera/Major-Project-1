import { useEffect, useState } from "react"

const FilterBar = ({ products, setProductsData, isFlex = false, searchQuery }) => {
  const [category, setCategory] = useState([])
  const [rating, setRating] = useState(0)
  const [price, setPrice] = useState(2500)
  const [sortedProducts, setSortedProducts] = useState("")

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target
    if(checked) {
      setCategory((prev) => [...prev, value])
    }
    else {
      setCategory((prev) => prev.filter(category => category !== value))
    }
  }

  const handleClearFilter = (e) => {
    setCategory([])
    setRating(0)
    setPrice(2500)
    setSortedProducts("")
  }

  useEffect(() => {
    if(!products || products.length === 0) return

    let filteredProducts = products
    if(searchQuery !== "") {
      filteredProducts = filteredProducts.filter(product => (product.name.toLowerCase().includes(searchQuery.toLowerCase() || product.title.toLowerCase().includes(searchQuery.toLowerCase()))))
    }
    if(category.length > 0) {
      filteredProducts = filteredProducts.filter(product => category.includes(product.category))
    }
    if(rating > 0) {
      filteredProducts = filteredProducts.filter(product => product.rating >= rating)
    }
    if(price >= 0 && price !== 2500) {
      filteredProducts = filteredProducts.filter(product => product.price <= price)
    }
    if(sortedProducts === "asc") {
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price)
    }
    if(sortedProducts === "desc") {
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price)
    }
    setProductsData(filteredProducts)
  }, [category, rating, sortedProducts, price, searchQuery])


  return (
    <div className={`${!isFlex ? "w-25 d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" : ""} bg-white`}>
      <div className="d-flex justify-content-between align-items-center w-100 p-4">
        <h4>Filters</h4>
        <button className="btn btn-link" onClick={handleClearFilter}>Clear</button>
      </div>
      <div className="px-4 py-3">
        <h4>Price</h4>
        <h6 className="d-flex justify-content-center">₹{price}</h6>
        <input type="range" min="0" max="5000" step={100} value={price} onChange={(e) => setPrice(e.target.value)} className="form-range" id="range1" />
      </div>
      <div className={isFlex ? "d-flex flex-column flex-md-row" : ""}>
        <div className="px-4 py-3">
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
        <div className="px-4 py-3">
          <h4>Rating</h4>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="fourStars" id="fourStars" checked={rating === 4} onChange={() => setRating(4)} />
            <label className="form-check-label" htmlFor="fourStars">
              4 stars & above
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="radioDefault" id="threeStars" checked={rating === 3} onChange={() => setRating(3)} />
            <label className="form-check-label" htmlFor="threeStars">
              3 stars & above
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="radioDefault" id="twoStars" checked={rating === 2} onChange={() => setRating(2)} />
            <label className="form-check-label" htmlFor="twoStars">
              2 stars & above
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="radioDefault" id="oneStar" checked={rating === 1} onChange={() => setRating(1)} />
            <label className="form-check-label" htmlFor="oneStar">
              1 stars & above
            </label>
          </div>
        </div>
        <div className="px-4">
          <h4>Sort by</h4>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="lowToHigh" id="lowToHigh" checked={sortedProducts === "asc"} onChange={() => setSortedProducts("asc")} />
            <label className="form-check-label" htmlFor="lowToHigh">
              Price - Low to High
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="highToLow" id="highToLow" checked={sortedProducts === "desc"} onChange={() => setSortedProducts("desc")} />
            <label className="form-check-label" htmlFor="highToLow">
              Price - High to Low
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FilterBar