import { Link } from "react-router-dom";
import Heroimage from "../assets/img-14.png";
import Smart from "../assets/img-11.png";
import { LiaArrowRightSolid } from "react-icons/lia";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <div className="w-screen bg-customblack py-8 mx-auto relative mb-[30px]">
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
        className="mySwiper custom-container mx-auto"
      >
        <SwiperSlide className="px-4">
          <div className="w-full h-max mx-auto py-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-14 items-center justify-between">
              <div className="w-full md:w-1/2 flex flex-col item-start justify-start py-4">
                <div className="text-white pb-4">
                  <h5 className="capitalize tracking-wider text-white mb-[10px]">
                    50% off. Hurry Up
                  </h5>
                  <p className="text-white">
                    Discover the latest gadgets, smart devices & accessories.
                  </p>
                </div>

                <div className="timer flex flex-row gap-4 py-4 md:pt-4">
                  <div className="flex flex-col items-center bg-white rounded-full px-3 py-3">
                    <span className="title_small font-bold">03</span>
                    <span className="title_small font-medium">Days</span>
                  </div>
                  <div className="flex flex-col items-center bg-white rounded-full px-3 py-3">
                    <span className="title_small font-bold">03</span>
                    <span className="title_small font-medium">Days</span>
                  </div>
                  <div className="flex flex-col items-center bg-white rounded-full px-3 py-3">
                    <span className="title_small font-bold">03</span>
                    <span className="title_small font-medium">Days</span>
                  </div>
                  <div className="flex flex-col items-center bg-white rounded-full px-3 py-3">
                    <span className="title_small font-bold">03</span>
                    <span className="title_small font-medium">Days</span>
                  </div>
                </div>
                <Link to={"/"}>
                  <span className="bg-[var(--color-accentbkp)] text-white mt-4 mb-2 px-5 py-3 w-max rounded capitalize flex items-center gap-2">
                    Shop Now <LiaArrowRightSolid size="1.5em" />
                  </span>
                </Link>
                {/* <MyButton
                  className="!bg-lime-500 mt-6 mb-2"
                  label="Buy Now !"
                /> */}
              </div>

              <div className="w-full md:w-1/2 h-[350px] ml-auto rounded-full bg-radial from-zinc-500 from-15% to-[#111827] to-50%">
                <img
                  src={Heroimage}
                  className="w-full h-full object-contain aspect-auto "
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-8">
          <div className="custom-container w-full h-max mx-auto py-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-14 items-center justify-between">
              <div className="w-full md:w-1/2 flex flex-col item-start justify-start py-4">
                <div className="text-white pb-4">
                  <h5 className="capitalize tracking-wider text-white mb-[10px]">
                    Get On 50% off. Hurry Up
                  </h5>
                  <p className="text-white">
                    Discover the latest gadgets, smart devices & accessories.
                  </p>
                </div>

                <div className="timer flex flex-row gap-4 py-4 md:pt-4">
                  <div className="flex flex-col items-center bg-white rounded-full px-3 py-3">
                    <span className="title_small font-bold">03</span>
                    <span className="title_small font-medium">Days</span>
                  </div>
                  <div className="flex flex-col items-center bg-white rounded-full px-3 py-3">
                    <span className="title_small font-bold">03</span>
                    <span className="title_small font-medium">Days</span>
                  </div>
                  <div className="flex flex-col items-center bg-white rounded-full px-3 py-3">
                    <span className="title_small font-bold">03</span>
                    <span className="title_small font-medium">Days</span>
                  </div>
                  <div className="flex flex-col items-center bg-white rounded-full px-3 py-3">
                    <span className="title_small font-bold">03</span>
                    <span className="title_small font-medium">Days</span>
                  </div>
                </div>
                <Link to={"/"}>
                  <span className="bg-[var(--color-accentbkp)] text-white mt-4 mb-2 px-5 py-3 w-max rounded capitalize flex items-center gap-2">
                    Shop Now <LiaArrowRightSolid size="1.5em" />
                  </span>
                </Link>
                {/* <MyButton
                  className="!bg-lime-500 mt-6 mb-2"
                  label="Buy Now !"
                /> */}
              </div>

              <div className="w-full md:w-1/2 h-[350px] ml-auto rounded-full bg-radial from-zinc-500 from-15% to-[#111827] to-50%">
                <img
                  src={Smart}
                  className="w-full h-full object-contain aspect-auto "
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <div className="section custom-container bg-customblack w-screen relative h-max mx-auto mt-4 rounded">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper custom-container"
      >
        <SwiperSlide>
          <div className="w-full h-[400px] flex flex-row items-center justify-between rounded">
            <div className=" w-full lg:w-1/2 flex flex-col gap-2 justify-center items-start text-white z-10 px-4 py-4">
              <h4 className="capitalize font-semibold !leading-14 tracking-wider ">
                Upgrade Your World with Smart Tech
              </h4>
              <p>
                Discover the latest gadgets, smart devices & accessories that
                simplify your life.
              </p>
              <Link to={"/"}>
                <span className="bg-lime-500 mt-4 mb-2 px-5 py-3 rounded capitalize flex items-center gap-2">
                  Shop Now <LiaArrowRightSolid size="1.5em" />
                </span>
              </Link>
            </div>
            <div className="hero-section w-full md:w-1/2 h-[350px] ml-auto rounded-full bg-radial from-zinc-500 from-15% to-[#111827] to-50%">
              <img
                className="w-ful h-full object-contain ml-20"
                src={Heroimage}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[400px] flex flex-row items-center justify-between rounded">
            <div className=" w-full lg:w-1/2 flex flex-col gap-2 justify-center items-start text-white z-10 px-4 py-4">
               <h4 className="capitalize font-semibold !leading-14 tracking-wider ">
                Upgrade Your World with Smart Tech
              </h4>
              <p>
                Discover the latest gadgets, smart devices & accessories that
                simplify your life.
              </p> 
              <Link to={"/"}>
                <span className="bg-lime-500 mt-4 mb-2 px-5 py-3 rounded capitalize flex items-center gap-2">
                  Shop Now <LiaArrowRightSolid size="1.5em" />
                </span>
              </Link>
            </div>
            <div className="hero-section w-full md:w-1/2 h-[350px] ml-auto rounded-full bg-radial from-zinc-500 from-15% to-[#111827] to-50%">
              <img
                className="w-full h-full object-contain ml-14"
                src={Smart}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div> */}
    </div>
  );
};
export default Hero;
