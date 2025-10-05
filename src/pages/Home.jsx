import { useEffect } from "react"
import Carousel from "../components/Carousel"
import Header from "../components/Header"
import ShopByArrivals from "../components/ShopByArrivals"
import ShopByBanner from "../components/ShopByBanner"
import ShopByCategory from "../components/ShopByCategory"
import { useProductContext } from "../contexts/ProductContext"

const Home = () => {
  const {  setCategory, setDiscount, setSeason } = useProductContext()

  useEffect(() => {
    setCategory([])
    setDiscount(0)
    setSeason("")
  }, [])
  return (
    <>
      <Header />
      <Carousel />
      <main className="container my-5">
        <ShopByCategory />
        <ShopByBanner />
        <ShopByArrivals />
      </main>
    </>
  )
}

export default Home