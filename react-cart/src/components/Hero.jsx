import { Link } from "react-router-dom";
import Heroimage from "../assets/img-14.png";
import { LiaArrowRightSolid } from "react-icons/lia";

const Hero = () => {
  return (
    <div className="section w-screen relative bg-customblack h-max">
      <div className="custom-container w-full h-full flex flex-row items-center justify-between gap-14 py-8">
        <div className="w-full lg:w-1/2 flex flex-col gap-2 justify-center items-start text-white z-10 px-4 py-4">
          <h4 className="capitalize font-semibold !leading-14 tracking-wider ">Upgrade Your World with Smart Tech</h4>
          <p>Discover the latest gadgets, smart devices & accessories that simplify your life.</p>

          {/* <MyButton className ="!bg-lime-500 mt-4 mb-2" label="Shop Now !"/> */}
          
          <Link to={"/"}><span className="bg-lime-500 mt-4 mb-2 px-5 py-3 rounded capitalize flex items-center gap-2">Shop Now <LiaArrowRightSolid size="1.5em"/></span></Link>
        </div>
        <div className="hero-section w-full lg:w-1/2 h-[450px]  rounded-full bg-radial from-zinc-500 from-15% to-[#111827] to-50%">
          <img className="w-ful h-full object-contain aspect-auto ml-14" src={Heroimage}/>
        </div>
        
      </div>
    </div>
  );
};
export default Hero;
