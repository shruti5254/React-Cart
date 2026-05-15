import Cards from "./Cards";
import Titles from "./Titles";
import { categoriesData } from "../data/categoriesData";

const Category = () => {
    return(
        <div className="custom-container mx-auto w-full mt-[40px] mb-[40px]">
            <Titles titleSmall="Categories" titleLarge="Browse By Categories"/>
            <div className="categories-wrapper mt-[30px] w-full mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 mb-4 mx-auto">
                    {categoriesData.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <Cards 
                                key={category.id}
                                childTitle={category.title} 
                                contentPosition="top" 
                                className="border border-gray-300 rounded text-gray-600 hover:bg-[var(--color-accentbkp)] hover:text-white transition-all duration-300"
                            >
                                <IconComponent className="w-full h-full object-contain"/>
                            </Cards>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default Category;