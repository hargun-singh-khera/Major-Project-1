import { useEffect, useState } from "react"

const FilterBar = ({products, setProductsData, isFlex = false}) => {
  const [category, setCategory] = useState([])
  const [rating, setRating] = useState(0)
  const [sortedProducts, setSortedProducts] = useState(false)

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
    setSortedProducts(false)
  }

  useEffect(() => {
    const filteredProducts = category.length > 0 ? products.filter(product => category.includes(product.category)) : rating > 0 ? products.filter(product => product.rating >= rating) : products
    // const filteredProducts = category.length > 0 ? products.filter(product => category.includes(product.category)) : rating > 0 ? products.filter(product => product.rating >= rating) : sortProductsBy == "asc" ? products.sort((a, b) => a.price - b.price) : sortProductsBy === "desc" ? products.sort((a, b) => b.price - a.price) : products
    setProductsData(filteredProducts)
  }, [category, rating, sortedProducts])

  console.log("rating", rating, "sortedProducts", sortedProducts)

  return (
    <div className={`${!isFlex ? "w-25 d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" : ""} bg-white`}>
      <div className="d-flex justify-content-between align-items-center w-100 p-4">
        <h4>Filters</h4>
        <button className="btn btn-link" onClick={handleClearFilter}>Clear</button>
      </div>
      <div className="px-4 py-3">
        <h4>Price</h4>
        <input type="range" className="form-range" id="range1" />
      </div>
      <div className={isFlex ? "d-flex flex-column flex-md-row" : ""}>
        <div className="px-4 py-3">
          <h4>Category</h4>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="men" value="men" onChange={handleCategoryChange} />
            <label className="form-check-label" htmlFor="men">
              Men Clothing
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="women" value="women" onChange={handleCategoryChange} />
            <label className="form-check-label" htmlFor="women">
              Women Clothing
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="kids" value="kids" onChange={handleCategoryChange} />
            <label className="form-check-label" htmlFor="kids">
              Kids Clothing
            </label>
          </div>
        </div>
        <div className="px-4 py-3">
          <h4>Rating</h4>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" onChange={() => setRating(4)} />
            <label className="form-check-label" htmlFor="radioDefault1">
              4 stars & above
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" onChange={() => setRating(3)} />
            <label className="form-check-label" htmlFor="radioDefault1">
              3 stars & above
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" onChange={() => setRating(2)} />
            <label className="form-check-label" htmlFor="radioDefault1">
              2 stars & above
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" onChange={() => setRating(1)} />
            <label className="form-check-label" htmlFor="radioDefault1">
              1 stars & above
            </label>
          </div>
        </div>
        <div className="px-4">
          <h4>Sort by</h4>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" onChange={() => setSortedProducts(true)} />
            <label className="form-check-label" htmlFor="radioDefault1">
              Price - Low to High
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" onChange={() => setSortedProducts(false)} />
            <label className="form-check-label" htmlFor="radioDefault1">
              Price - High to Low
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FilterBar