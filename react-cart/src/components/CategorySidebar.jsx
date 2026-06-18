import { categoriesData } from "../data/categoriesData";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

const CategorySidebar = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="hidden lg:flex flex-col w-[25%] bg-white rounded-sm border border-gray-200 overflow-hidden h-fit sticky top-[100px]">
      <div className="bg-white divide-y divide-gray-200">
        {categoriesData.map((category) => {
          const IconComponent = category.icon;
          return (
            <div
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-[var(--color-accentbkp)] text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <IconComponent className="w-5 h-5" />
                <span className="text-sm font-medium">{category.title}</span>
              </div>
              <MdKeyboardArrowRight className="w-4 h-4" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySidebar;
