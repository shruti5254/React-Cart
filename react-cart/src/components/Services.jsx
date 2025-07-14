import { CiDeliveryTruck } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";

const Services = () => {
  return (
    <div className="custom-container mx-auto w-full mt-[50px] mb-[50px]">
      <div className="flex flex-row items-center justify-evenly">
        <div className="flex flex-col gap-3 items-center justify-center">
          <div className="mt-auto w-[90px] h-[90px] rounded-full bg-gray-300 flex items-center justify-center">
            <CiDeliveryTruck className="inline-block w-[70px] h-[70px] bg-customblack rounded-full text-white px-4 py-4" />
          </div>
            <span className="text-xl font-semibold">FREE AND FAST DELIVERY</span>
            <p className="title_small mt-[-4px]">Free delivery for all orders over $140</p>
        </div>

       <div className="flex flex-col gap-3 items-center justify-center">
          <div className="mt-auto w-[90px] h-[90px] rounded-full bg-gray-300 flex items-center justify-center">
            < CiHeadphones className="inline-block w-[70px] h-[70px] bg-customblack rounded-full text-white px-4 py-4" />
          </div>
            <span className="text-xl font-semibold">24/7 CUSTOMER SERVICE</span>
            <p className="title_small mt-[-4px]">Friendlr 24/7 customer support</p>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <div className="mt-auto w-[90px] h-[90px] rounded-full bg-gray-300 flex items-center justify-center">
            <GoShieldCheck className="inline-block w-[70px] h-[70px] bg-customblack rounded-full text-white px-4 py-4" />
          </div>
            <span className="text-xl font-semibold">MONEY BACK GUARANTEE</span>
            <p className="title_small mt-[-4px]">We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
};
export default Services;
