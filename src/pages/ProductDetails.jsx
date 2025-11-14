import { useParams } from "react-router-dom"
import Header from "../components/Header"
import useFetch from "../useFetch"
import ProductDetailsComp from "../components/ProductDetailsComp"
import PlaceholderProductDetails from "../components/PlaceholderProductDetails"
import toast, { Toaster } from 'react-hot-toast'

const ProductDetails = () => {
  const { productId } = useParams()
  const { data, loading, error } = useFetch(`https://neo-g-backend-ckt5.vercel.app/api/products/${productId}`)
  // const { data, loading, error } = useFetch(`http://localhost:3000/api/products/${productId}`)
  
  // console.log("data", data)
  return (
    <>
      <Header />
      <main className="container my-4 ">
        {loading && <PlaceholderProductDetails />}
        {error && <p>Something went wrong while loading product details. Please try again later.</p>}
        {!loading && !error && data && <ProductDetailsComp product={data} toast={toast} />}
        <Toaster />
      </main>
    </>
  )
}
export default ProductDetails