import CategoryCard from "./CategoryCard"
import useFetch from "../useFetch"
import PlaceholderCard from "../components/PlaceholderCard"

export const renderPlaceholders = (count, Component, isRender) => {
  return [...Array(count)].map((item, index) => <Component isRender={isRender} key={index} />)
}

const ShopByCategory = () => {
  const { data, loading, error } = useFetch("https://neo-g-backend-ckt5.vercel.app/api/categories")
  // console.log("data", data)

  return (
    <section id="shopByCategory" className="bg-white px-5 py-4">
      <h6 style={{color: "#f53f85"}}>See our collection</h6>
      <h3>Shop By Categories</h3>
      {loading && (
        <div className="row">
          {renderPlaceholders(3, PlaceholderCard, true)}
        </div>
      )} 
      {error && <p>Something went wrong while fetching categories. Please try again later.</p>}
      <div className="row">
        {data && data.length > 0 && data.map(category => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </section>
  )
}

export default ShopByCategory