import Cards from "./Cards";
import MyButton from "../components/Buttons";
import Headphone from "../assets/img-2.png";
import Titles from "./Titles";
const OurProducts = () =>{
    return(
        <div>
            <div className="custom-container mx-auto w-full mt-[30px] mb-[30px]">
                <div className="section-title flex flex-col">
                    <Titles titleSmall="Our Products" titleLarge="Explore Our Products"/>  
                </div>
                <div className="products-wrapper mt-[30px] w-full mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mb-4 mx-auto">
                        <Cards title="wired Keyboard" image={Headphone} hoverActionLink="/cart" hoverText="add to cart" showHeart={true} showEye={true} priceNew="$400" priceOld="$600"></Cards>

                        <Cards title="wired Keyboard" image={Headphone} hoverActionLink="/cart" hoverText="add to cart" showHeart={true} showEye={true} priceNew="$200" priceOld="$300"></Cards>

                        <Cards title="wired Keyboard" image={Headphone} hoverActionLink="/cart" hoverText="add to cart" showHeart={true} showEye={true} priceNew="$4000" priceOld="$6000"></Cards>

                        <Cards title="wired Keyboard" image={Headphone} hoverActionLink="/cart" hoverText="add to cart" showHeart={true} showEye={true} priceNew="$500" priceOld="$1000"></Cards>

                        <Cards title="wired Keyboard" image={Headphone} hoverActionLink="/cart" hoverText="add to cart" showHeart={true} showEye={true} priceNew="$800" priceOld="$900"></Cards>
                        <Cards title="wired Keyboard" image={Headphone} hoverActionLink="/cart" hoverText="add to cart" showHeart={true} showEye={true} priceNew="$800" priceOld="$900"></Cards>
                        <Cards title="wired Keyboard" image={Headphone} hoverActionLink="/cart" hoverText="add to cart" showHeart={true} showEye={true} priceNew="$800" priceOld="$900"></Cards>
                        <Cards title="wired Keyboard" image={Headphone} hoverActionLink="/cart" hoverText="add to cart" showHeart={true} showEye={true} priceNew="$800" priceOld="$900"></Cards>

                    </div>
                    <div className="w-full mx-auto flex justify-center items-start mt-[40px]">
                        <MyButton label="View All Products" btnClickLink="/products"></MyButton>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default OurProducts;