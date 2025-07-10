import Cards from "./Cards";
import Headphone from "../assets/img-2.png";
const FlashSale = () => {
  return (
    <div className="custom-container mx-auto w-full mt-[30px] mb-[30px]">
        <div className="section-title flex flex-col">
            <div className="flex flex-row justify-between w-full lg:w-1/2">
                <div className="title-wrap">
                    <span className="title_accent-small pl-4 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:bg-[#DB4444] before:h-full before:z-10">Today's</span>
                    <h3 className="color-accentbkp mt-2">Flash Sales</h3>
                </div>
                
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
            <div className="grid grid-cols-5 gap-3">
                <Cards title="wired Keyboard" image={Headphone} hoverActionLink="/cart" hoverText="add to cart" showEye={true} priceNew="$400" priceOld="$600"></Cards>

                <Cards title="wired Keyboard" image={Headphone} hoverActionLink="/cart" hoverText="add to cart" showEye={true} priceNew="$200" priceOld="$300"></Cards>

                <Cards title="wired Keyboard" image={Headphone} hoverActionLink="/cart" hoverText="add to cart" showEye={true} priceNew="$4000" priceOld="$6000"></Cards>

                <Cards title="wired Keyboard" image={Headphone} hoverActionLink="/cart" hoverText="add to cart" showEye={true} priceNew="$500" priceOld="$1000"></Cards>

                <Cards title="wired Keyboard" image={Headphone} hoverActionLink="/cart" hoverText="add to cart" showEye={true} priceNew="$800" priceOld="$900"></Cards>

            </div>

        </div>
    </div>
  );
};
export default FlashSale;
