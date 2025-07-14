import Hero from "../components/hero";
import FlashSale from "../components/FlashSale";
import Category from "../components/Category";
import BestSelling from "../components/BestSelling";
import Ads from "../components/Ads";
import OurProducts from "../components/OurProducts";
import Newarrival from "../components/Newarrival";
import Services from "../components/Services";
const Home = () => {
    return (
        <>
          <Hero/>
          <FlashSale/>
          <Category/>
          <BestSelling/>
          <Ads/>
          <OurProducts/>
          <Newarrival/>
          <Services/>
        </>
    )

}

export default Home;