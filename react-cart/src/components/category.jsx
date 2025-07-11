import Cards from "./Cards";
import Titles from "./Titles";
import { IoIosLaptop } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { CiMonitor,CiCamera,CiHeadphones } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import { BsSmartwatch } from "react-icons/bs";
import { LiaGamepadSolid } from "react-icons/lia";
import { GiVacuumCleaner } from "react-icons/gi";

const Category = () => {
    return(
        <div className="custom-container mx-auto w-full mt-[30px] mb-[30px]">
            <Titles titleSmall="Categories" titleLarge="Browse By Categories"/>
            <div className="categories-wrapper mt-[30px] w-full mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 mb-4 mx-auto">
                    <Cards childTitle="Phones" contentPosition="top" className="border border-gray-300 rounded text-gray-600 hover:bg-[var(--color-accentbkp)] hover:text-white transition-all duration-300">
                        <BsPhone className="w-full h-full object-contain "/>
                    </Cards>
                    
                    <Cards childTitle="Computer Accessories" contentPosition="top" className="border border-gray-300 rounded  text-gray-600 hover:bg-[var(--color-accentbkp)] !hover:text-white transition-all duration-300">
                        <CiMonitor className="w-full h-full object-contain"/>
                    </Cards>
                    <Cards childTitle="Smart Watches" contentPosition="top" className="border border-gray-300 rounded  text-gray-600 hover:bg-[var(--color-accentbkp)] hover:text-white transition-all duration-300">
                        <BsSmartwatch className="w-full h-full object-contain"/>
                    </Cards>
                    <Cards childTitle="Camera" contentPosition="top" className="border border-gray-300 rounded  text-gray-600 hover:bg-[var(--color-accentbkp)] hover:text-white transition-all duration-300">
                        <CiCamera className="w-full h-full object-contain"/>
                    </Cards>
                    <Cards childTitle="Headphone" contentPosition="top" className="border border-gray-300 rounded  text-gray-600 hover:bg-[var(--color-accentbkp)] hover:text-white transition-all duration-300">
                        <CiHeadphones className="w-full h-full object-contain"/>
                    </Cards>
                    <Cards childTitle="Gamepad" contentPosition="top" className="border border-gray-300 rounded  text-gray-600 hover:bg-[var(--color-accentbkp)] hover:text-white transition-all duration-300">
                        <LiaGamepadSolid className="w-full h-full object-contain"/>
                    </Cards>
                    <Cards childTitle="Cleaning Accessories" contentPosition="top" className="border border-gray-300 rounded  text-gray-600 hover:bg-[var(--color-accentbkp)] hover:text-white transition-all duration-300">
                        <GiVacuumCleaner className="w-full h-full object-contain"/>
                    </Cards>
                    
                </div>
            </div>
        </div>
    )
}
export default Category;