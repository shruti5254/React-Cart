import { Link } from "react-router-dom";
import Heroimage from "../assets/hero_img.png";
import { FaApple } from "react-icons/fa";
import { LiaArrowRightSolid } from "react-icons/lia";

const Hero = () => {
  return (
    <>
      <section className="section w-screen relative bg-black opacity-80 h-[70vh]">
        <div
          className="hero-section w-full h-full mx-auto bg-no-repeat bg-contain bg-right"
          style={{ backgroundImage: `url(${Heroimage})` }}
        ></div>
        <div className="absolute left-2 lg:left-12 w-full top-[30%] lg:w-1/2 flex flex-col gap-2 justify-center items-start text-white z-10 px-4 py-4">
          <span className="flex flex-row gap-4 items-center justify-start leading-4">
            <FaApple size="2.5em" className="pr-1"/>
            iphone 14 Series
          </span>
          <span className=" text-3xl lg:text-5xl capitalize font-semibold leading-16">Upto 10% Off voucher</span>
          <Link to={"/"}><span className="capitalize py-1 flex gap-2">Shop Now <LiaArrowRightSolid size="1.5em"/></span></Link>
        </div>
      </section>
    </>
  );
};
export default Hero;
