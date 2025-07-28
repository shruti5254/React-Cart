import Cards from "./Cards";
import MyButton from "../components/Buttons";
import Headphone from "../assets/img-2.png";
import Titles from "./Titles";
const BestSelling = () => {
  return (
    <div className="custom-container mx-auto w-full mt-[40px] mb-[40px]">
        <div className="section-title flex flex-col">
            <Titles titleSmall="This Month" titleLarge="Best Selling Products"/>  
        </div>
        <div className="products-wrapper mt-[30px] w-full mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-4 mx-auto">
                <Cards title="wired Keyboard" image={Headphone} hoverActionLink="/cart" hoverText="add to cart" showHeart={true} showEye={true} priceNew="$400" priceOld="$600"></Cards>

                <Cards title="wired Keyboard" image={Headphone} hoverActionLink="/cart" hoverText="add to cart" showHeart={true} showEye={true} priceNew="$200" priceOld="$300"></Cards>

                <Cards title="wired Keyboard" image={Headphone} hoverActionLink="/cart" hoverText="add to cart" showHeart={true} showEye={true} priceNew="$4000" priceOld="$6000"></Cards>

                <Cards title="wired Keyboard" image={Headphone} hoverActionLink="/cart" hoverText="add to cart" showHeart={true} showEye={true} priceNew="$500" priceOld="$1000"></Cards>

            </div>
            <div className="w-full mx-auto flex justify-center items-start mt-[40px]">
                <MyButton label="View All" btnClickLink="/products"></MyButton>
            </div>

        </div>
    </div>
  );
};
export default BestSelling;
