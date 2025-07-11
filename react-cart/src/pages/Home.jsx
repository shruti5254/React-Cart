import Hero from "../components/hero";
import FlashSale from "../components/FlashSale";
import Category from "../components/Category";
import BestSelling from "../components/BestSelling";
import Ads from "../components/Ads";
import OurProducts from "../components/OurProducts";
const Home = () => {
    return (
        <>
          <Hero/>
          <FlashSale/>
          <Category/>
          <BestSelling/>
          <Ads/>
          <OurProducts/>
        </>
    )

}

export default Home;