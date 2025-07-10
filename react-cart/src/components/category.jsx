import Cards from "./Cards";
import Titles from "./Titles";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

const Category = () => {
    return(
        <div className="custom-container mx-auto w-full mt-[30px] mb-[30px]">
            <Titles titleSmall="Categories" titleLarge="Browse By Categories"/>
            <div className="categories-wrapper mt-[30px] w-full mx-auto">
                <div className="grid grid-cols-8 gap-3 mb-4">
                    <Cards childTitle="Phones" contentPosition="top" className="border border-gray-400 rounded hover:bg-[var(--color-accentbkp)] hover:text-white transition-all duration-300">
                        <MdOutlinePhoneAndroid className="w-full h-full object-contain "/>
                    </Cards>
                    <Cards childTitle="Computers" contentPosition="top" className="border border-gray-400 rounded hover:bg-[var(--color-accentbkp)] hover:text-white transition-all duration-300">
                        <HiOutlineComputerDesktop className="w-full h-full object-contain"/>
                    </Cards>
                    <Cards childTitle="Computers" contentPosition="top" className="border border-gray-400 rounded hover:bg-[var(--color-accentbkp)] hover:text-white transition-all duration-300">
                        <RiComputerLine className="w-full h-full object-contain"/>
                    </Cards>
                    <Cards childTitle="Computers" contentPosition="top" className="border border-gray-400 rounded hover:bg-[var(--color-accentbkp)] hover:text-white transition-all duration-300">
                        <RiComputerLine className="w-full h-full object-contain"/>
                    </Cards>
                    <Cards childTitle="Computers" contentPosition="top" className="border border-gray-400 rounded hover:bg-[var(--color-accentbkp)] hover:text-white transition-all duration-300">
                        <RiComputerLine className="w-full h-full object-contain"/>
                    </Cards>
                    <Cards childTitle="Computers" contentPosition="top" className="border border-gray-400 rounded hover:bg-[var(--color-accentbkp)] hover:text-white transition-all duration-300">
                        <RiComputerLine className="w-full h-full object-contain"/>
                    </Cards>
                    <Cards childTitle="Computers" contentPosition="top" className="border border-gray-400 rounded hover:bg-[var(--color-accentbkp)] hover:text-white transition-all duration-300">
                        <RiComputerLine className="w-full h-full object-contain"/>
                    </Cards>
                    <Cards childTitle="Computers" contentPosition="top" className="border border-gray-400 rounded hover:bg-[var(--color-accentbkp)] hover:text-white transition-all duration-300">
                        <RiComputerLine className="w-full h-full object-contain"/>
                    </Cards>
                    
                    
                </div>
            </div>
        </div>
    )
}
export default Category;