import { Link } from "react-router-dom";
import Heroimage from "../assets/img-14.png";
import GamepadRed from "../assets/gamepad-red.png";
import { LiaArrowRightSolid } from "react-icons/lia";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <div className="w-full bg-customblack rounded py-8 relative mb-[30px]">
      <Swiper
        spaceBetween={15}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        navigation={false}
        pagination={{clickable:true}}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper mx-auto"
      >
        <SwiperSlide className="px-8">
          <div className="w-full h-max mx-auto py-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-14 items-center justify-between">
              <div className="w-full md:w-1/2 flex flex-col item-start justify-start py-4">
                <div className="text-white pb-4">
                  <h4 className="capitalize tracking-wider text-white mb-[10px]">
                    Get on 50% off. Hurry Up
                  </h4>
                  <p className="text-white">
                    Discover the latest gadgets, smart devices & accessories.
                  </p>
                </div>

                <Link to={"/"}>
                  <span className="bg-[var(--color-accentbkp)] text-white mt-4 mb-2 px-5 py-3 w-max rounded capitalize flex items-center gap-2">
                    Shop Now <LiaArrowRightSolid size="1.5em" />
                  </span>
                </Link>
              </div>

              <div className="w-full md:w-1/2 h-[350px] ml-auto rounded-full">
              {/* bg-radial from-zinc-500 from-15% to-[#111827] to-50% */}
                <img
                  src={Heroimage}
                  className="w-full h-full object-contain aspect-auto "
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-8">
          <div className="w-full h-max mx-auto py-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-14 items-center justify-between">
              <div className="w-full md:w-1/2 flex flex-col item-start justify-start py-4">
                <div className="text-white pb-4">
                  <h4 className="capitalize tracking-wider text-white mb-[10px]">
                    Get On 50% off. Hurry Up
                  </h4>
                  <p className="text-white">
                    Discover the latest gadgets, smart devices & accessories.
                  </p>
                </div>

                <Link to={"/"}>
                  <span className="bg-[var(--color-accentbkp)] text-white mt-4 mb-2 px-5 py-3 w-max rounded capitalize flex items-center gap-2">
                    Shop Now <LiaArrowRightSolid size="1.5em" />
                  </span>
                </Link>
              </div>

              <div className="w-full md:w-1/2 h-[350px] ml-auto rounded-full">
              {/* bg-radial from-zinc-500 from-15% to-[#111827] to-50% */}
                <img
                  src={GamepadRed}
                  className="w-full h-full object-contain aspect-auto "
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Hero;
