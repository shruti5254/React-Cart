import Cards from "./Cards";
import MyButton from "../components/Buttons";
import Headphone from "../assets/img-2.png";
import Titles from "./Titles";
const FlashSale = () => {
  return (
    <div className="custom-container mx-auto w-full mt-[40px] mb-[40px]">
        <div className="section-title flex flex-col">
            <div className="flex flex-row justify-between w-full lg:w-1/2">
                <Titles titleSmall="Today's" titleLarge="Flash Sales"/>
                <div className="timer flex flex-row gap-4">
                    <div className="flex flex-col items-center gap-2">
                        <span>Days</span>
                        <h5>03</h5>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span>Minutes</span>
                        <h5>30</h5>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span>Hours</span>
                        <h5>10</h5>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span>Seconds</span>
                        <h5>08</h5>
                    </div>
                </div>
            </div>
        </div>
        <div className="products-wrapper mt-[30px] w-full mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-4 mx-auto">
                <Cards title="wired Keyboard" image={Headphone} hoverActionLink="/cart" hoverText="add to cart" tagLeft="New" showHeart={true} showEye={true} priceNew="$400" priceOld="$600"></Cards>

                <Cards title="wired Keyboard" image={Headphone} hoverActionLink="/cart" hoverText="add to cart" tagLeft="-40%"showHeart={true} showEye={true} priceNew="$200" priceOld="$300"></Cards>

                <Cards title="wired Keyboard" image={Headphone} hoverActionLink="/cart" hoverText="add to cart" tagLeft="sold out" showHeart={true} showEye={true} priceNew="$4000" priceOld="$6000"></Cards>

                <Cards title="wired Keyboard" image={Headphone} hoverActionLink="/cart" hoverText="add to cart" tagLeft="new" showHeart={true} showEye={true} priceNew="$500" priceOld="$1000"></Cards>

                <Cards title="wired Keyboard" image={Headphone} hoverActionLink="/cart" hoverText="add to cart" tagLeft="-15%"  showHeart={true} showEye={true} priceNew="$500" priceOld="$1000"></Cards>


            </div>
            <div className="w-full mx-auto flex justify-center items-start mt-[40px]">
                <MyButton label="View All Products" btnClickLink="/products"></MyButton>
            </div>

        </div>
    </div>
  );
};
export default FlashSale;
