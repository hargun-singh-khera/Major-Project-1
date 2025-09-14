import { useParams } from "react-router-dom"
import Header from "../components/Header"
import useFetch from "../useFetch"
import ProductDetailsComp from "../components/ProductDetailsComp"
import PlaceholderProductDetails from "../components/PlaceholderProductDetails"

const ProductDetails = () => {
  const { category, productId } = useParams()
  const { data, loading, error } = useFetch(`https://neo-g-backend-jwhg.vercel.app/api/products/${productId}`)
  console.log("data", data)
  return (
    <>
      <Header />
      <main className="container my-4 ">
        {loading && <PlaceholderProductDetails />}
        {error && <p>Something went wrong while loading product details. Please try again later.</p>}
        {data && <ProductDetailsComp product={data} category={category} />}
      </main>
    </>
  )
}
export default ProductDetails