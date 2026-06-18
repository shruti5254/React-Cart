import Hero from "./hero";
import CategorySidebar from "./CategorySidebar";

const HomeHeroLayout = () => {
  return (
    <div className="custom-container mx-auto w-full flex flex-col lg:flex-row gap-6 mt-[25px] mb-[30px]">
      <CategorySidebar />
      <div className="w-full lg:w-[75%]">
        <Hero />
      </div>
    </div>
  );
};

export default HomeHeroLayout;
