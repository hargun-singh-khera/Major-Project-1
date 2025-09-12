import Carousel from "../components/Carousel"
import Header from "../components/Header"
import ShopByArrivals from "../components/ShopByArrivals"
import ShopByBanner from "../components/ShopByBanner"
import ShopByCategory from "../components/ShopByCategory"

const Home = () => {
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