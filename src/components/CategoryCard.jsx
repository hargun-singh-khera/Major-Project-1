import { Link } from "react-router-dom"
const CategoryCard = ({category}) => {
  const {name, imageUrl} = category
  return (
    <div className="col-lg-4">
      <Link to={`/products`} className="text-decoration-none">
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