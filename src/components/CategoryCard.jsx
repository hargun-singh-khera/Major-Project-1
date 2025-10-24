import { Link } from "react-router-dom"
import { useProductContext } from "../contexts/ProductContext"
const CategoryCard = ({category}) => {
  const {name, imageUrl} = category
  const { setCategory } = useProductContext()
  // console.log("category of category card", cat)
  return (
    <div className="col-lg-6 col-xl-4">
      <Link onClick={() => setCategory([name])} to={`/shop/products`} className="text-decoration-none">
        <div className="card border-0">
          <img src={imageUrl} className="card-img-top img-fluid" alt={name} />
          <div className="card-body">
            <p className="card-text text-center fs-4">{name[0].toUpperCase() + name.slice(1)}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default CategoryCard