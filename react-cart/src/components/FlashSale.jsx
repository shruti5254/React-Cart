import Cards from "./Cards";
import MyButton from "../components/Buttons";
import Titles from "./Titles";
import { getProductsByCategory } from "../data/productsData";
import useCountdownTimer from "./useCountdownTimer";

const FlashSale = () => {
  const flashSaleProducts = getProductsByCategory("flash-sale");
  
  // Set target date to 3 days from now
  const targetDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString();
  const { days, hours, minutes, seconds } = useCountdownTimer(targetDate);

  return (
    <div className="custom-container mx-auto w-full mt-[40px] mb-[40px]">
        <div className="section-title flex flex-col">
            <div className="flex flex-row justify-between w-full lg:w-1/2">
                <Titles titleSmall="Today's" titleLarge="Flash Sales"/>
                <div className="timer flex flex-row gap-4">
                    <div className="flex flex-col items-center gap-2">
                        <span>Days</span>
                        <h5>{String(days).padStart(2, '0')}</h5>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span>Hours</span>
                        <h5>{String(hours).padStart(2, '0')}</h5>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span>Minutes</span>
                        <h5>{String(minutes).padStart(2, '0')}</h5>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span>Seconds</span>
                        <h5>{String(seconds).padStart(2, '0')}</h5>
                    </div>
                </div>
            </div>
        </div>
        <div className="products-wrapper mt-[30px] w-full mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-4 mx-auto">
                {flashSaleProducts.map((product) => (
                    <Cards 
                        key={product.id}
                        product={product}
                        title={product.title} 
                        image={product.image} 
                        hoverActionLink={product.hoverActionLink} 
                        hoverText={product.hoverText} 
                        showHeart={product.showHeart} 
                        showEye={product.showEye} 
                        priceNew={product.priceNew} 
                        priceOld={product.priceOld}
                        tagLeft={product.tagLeft}
                    />
                ))}
            </div>
            <div className="w-full mx-auto flex justify-center items-start mt-[40px]">
                <MyButton label="View All Products" btnClickLink="/products"></MyButton>
            </div>

        </div>
    </div>
  );
};
export default FlashSale;
