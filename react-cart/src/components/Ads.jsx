import Speaker from "../assets/speaker.png";
import MyButton from "./Buttons";
import Titles from "./Titles";

const Ads = () =>{
    return(
        <div className="w-screen bg-customblack mt-[30px] mb-[30px]">
            <div className="custom-container w-full h-max mx-auto py-8">
                <div className="flex flex-col md:flex-row gap-4 md:gap-14 items-center justify-between">
                    <div className="w-full md:w-1/2 flex flex-col item-start justify-start py-4">
                        <Titles titleSmall="Categories" titleLarge="Enhance Your Music Experience" spanClassName="color-accentbkp" headingClassName="!text-white tracking-wide py-2 md:pt-4 leading-[45px]"/>
                        {/* <h4 className="]">Enhance Your Music Experience</h4> */}
                        <div className="timer flex flex-row gap-4 py-2 md:pt-4">
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
                        <MyButton className =" mt-6 mb-2" label="Buy Now !"/>
                    </div>

                    <div className="w-full md:w-1/2 h-[350px] ml-auto rounded-full bg-radial from-zinc-500 from-15% to-[#111827] to-50%">
                        <img src={Speaker} className="w-full h-full object-contain aspect-auto "/>
                    </div>  
                </div>
                
            </div>
        </div>
    )
}
export default Ads;