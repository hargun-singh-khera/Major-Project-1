const FilterBar = () => {
  return (
    <div className="w-25 min-vh-100 bg-white">
      <div className="d-flex justify-content-between align-items-center p-4">
        <h4>Filters</h4>
        <button className="btn btn-link">Clear</button>
      </div>
      <div className="px-4 py-3">
        <h4>Price</h4>
        <input type="range" class="form-range" id="range1" />
      </div>
      <div className="px-4 py-3">
        <h4>Category</h4>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="checkDefault" />
          <label class="form-check-label" for="checkDefault">
            Men Clothing
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="checkDefault" />
          <label class="form-check-label" for="checkDefault">
            Women Clothing
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="checkDefault" />
          <label class="form-check-label" for="checkDefault">
            Kids Clothing
          </label>
        </div>
      </div>
      <div className="px-4 py-3">
        <h4>Rating</h4>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
          <label class="form-check-label" for="radioDefault1">
            4 stars & above
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
          <label class="form-check-label" for="radioDefault1">
            3 stars & above
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
          <label class="form-check-label" for="radioDefault1">
            2 stars & above
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
          <label class="form-check-label" for="radioDefault1">
            1 stars & above
          </label>
        </div>
      </div>
      <div className="px-4">
        <h4>Sort by</h4>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
          <label class="form-check-label" for="radioDefault1">
            Price - Low to High
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
          <label class="form-check-label" for="radioDefault1">
            Price - High to Low
          </label>
        </div>
      </div>
    </div>
  )
}
export default FilterBar