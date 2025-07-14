import Titles from "./Titles";
import PlayStation from "../assets/playstation.png";
import Perfumes from "../assets/perfumes.png";
import Woman from "../assets/attractive-woman.png";
import Speakers from "../assets/speakers.png";

const Newarrival = () =>{
    return(
        <div>
            <div className="custom-container mx-auto w-full mt-[50px] mb-[50px]">
                <div className="section-title flex flex-col">
                    <Titles titleSmall="Featured" titleLarge="New Arrivals"/>  
                </div>
                <div className="block mt-[30px] w-full mx-auto h-[400px]">
                    <div className="w-1/2 h-full float-left bg-customblack rounded pr-4">
                        <img src={PlayStation} className="w-full h-[80%] m-auto aspect-auto object-contain"/>
                    </div> 
                    <div className="w-1/2 h-full float-right pl-4">
                        <div className="flex flex-row align-items-center w-full h-1/2 bg-customblack rounded pb-4">
                            <p className=" text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugit cupiditate</p>
                            <img src={Woman} className="w-[45%] h-full aspect-auto object-contain"/>
                        </div>
                        <div className="w-full h-1/2 flex flex-col md:flex-row gap-4 pt-4">
                            <div className="w-full h-full inline bg-customblack rounded">
                                <img src={Speakers} className="w-full h-full aspect-auto object-contain"/>
                            </div>
                            <div className="inline bg-customblack rounded w-full h-full">
                                <img src={Perfumes} className="w-full h-full aspect-auto object-contain"/>
                            </div>
                        </div>
                    </div>           
                </div>
            </div>
        </div>
    )
}
export default Newarrival;