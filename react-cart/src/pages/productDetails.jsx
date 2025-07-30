import { Link } from "react-router-dom";
import GamepadWhite from "../assets/gamepad-white.png";
import StarRating from "../components/StarRatings";
import QtyCounter from "../components/QtyCounter";
import MyButton from "../components/Buttons";
import { CiHeart } from "react-icons/ci";
import { FaTruckFast } from "react-icons/fa6";
import { HiMiniArrowPath } from "react-icons/hi2";

const ProductDetails = () => {
  return (
    <div className="custom-container mx-auto w-full mt-[50px] mb-[50px]">
        <div className="grid grid-cols-12 mx-auto gap-12">
            <div className="col-span-12 md:col-span-7">
                <div className="flex flex-col sm:flex-row gap-8 w-full">
                    <div className="w-full sm:w-[25%] h-max flex flex-row sm:flex-col gap-2 sm:gap-4">
                        <div className="w-full h-[140px] p-4 flex items-center rounded color-bgbkp">
                            <img
                            src={GamepadWhite}
                            className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="w-full h-[140px] p-4 flex items-center rounded color-bgbkp">
                            <img
                            src={GamepadWhite}
                            className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="w-full h-[140px] p-4 flex items-center rounded color-bgbkp">
                            <img
                            src={GamepadWhite}
                            className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="w-full h-[140px] p-4 flex items-center rounded color-bgbkp">
                            <img
                            src={GamepadWhite}
                            className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                    <div className="w-full sm:w-[75%] h-[450px] sm:h-[600px] px-4 py-4 color-bgbkp flex items-center rounded">
                        <div className="align-middle mx-auto min-w-[300px] min-h-[300px] max-w-[400px] max-h-[400px]">
                            <img
                            src={GamepadWhite}
                            className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-5 px-2">
                <div className="details-wrapper flex flex-col justify-center items-start gap-4 ">
                    <h6>Havic HV-G92 Gamepad</h6>
                    <StarRating />
                    <div className="price">
                    <span className="text-[var(--text)] font-medium text-[20px]">
                        $600.00
                    </span>
                    </div>
                    <p className="description para text-base">
                    Playstation 5 Controller Skin High quality vinyl with air channel
                    adhesive for easy bubble free install and mess free removal
                    Pressure sensitive.
                    </p>
                    <hr className="text-gray-400 w-full h-[1px] mt-4" />
                    <div className="color flex flex-row items-center gap-4 mt-4">
                    <p className="font-medium para text-lg md:text-xl mr-6">
                        Colors:{" "}
                    </p>
                    <div className="w-4 h-4 rounded-[50%] outline-2 outline-gray-600 outline-offset-2 bg-red-600"></div>
                    <div className="w-4 h-4 rounded-[50%] outline-2 outline-gray-600 outline-offset-2 bg-black"></div>
                    <div className="w-4 h-4 rounded-[50%] outline-2 outline-gray-600 outline-offset-2 bg-lime-600"></div>
                    </div>
                    <div className="size flex flex-row items-center gap-4 mt-4">
                        <p className="font-medium para text-lg md:text-xl mr-6">Size: </p>
                        <div className="w-8 h-8 flex items-center justify-center rounded text-xs border border-gray-400 text-center">
                            XS
                        </div>
                        <div className="w-8 h-8 flex items-center justify-center rounded text-xs border border-gray-400 text-center">
                            S
                        </div>
                        <div className="w-8 h-8 flex items-center justify-center rounded text-xs border border-gray-400 text-center">
                            M
                        </div>
                        <div className="w-8 h-8 flex items-center justify-center rounded text-xs border border-gray-400 text-center">
                            L
                        </div>
                        <div className="w-8 h-8 flex items-center justify-center rounded text-xs border border-gray-400 text-center">
                            XL
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-4 mt-4">
                        <QtyCounter />
                        <MyButton
                            className=""
                            label="Buy Now"
                            btnClickLink="/cart"
                        ></MyButton>
                        <div className="p-1 border border-gray-400 rounded flex items-center hover:bg-[var(--color-accentbkp)] hover:text-white">
                            <CiHeart className="" size="2em" />
                        </div>
                    </div>
                    <div className="delivary-wrap flex flex-col items-start justify-stretch w-max h-full border border-gray-400 rounded mt-4 py-3">
                        <div className="flex flex-row gap-4 items-center px-4 py-5 border-b border-gray-400">
                            <FaTruckFast className="w-10 h-10"/>
                            <div className="w-full px-1">
                                <p className="text-lg font-semibold capitalize tracking-wide">Free Delivary</p>
                                <Link to={"#"} className="capitalize !text-xs tracking-wide font-normal underline">enter you postal code for delivary availiability</Link>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 items-center px-4 py-5">
                            <HiMiniArrowPath className="w-10 h-10"/>
                            <div className="w-full px-1">
                                <p className="text-lg font-semibold capitalize tracking-wide">Return Delivary</p>
                                <Link to={"#"} className="capitalize !text-xs tracking-wide font-normal underline">Free 30 Days delivary.Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProductDetails;
