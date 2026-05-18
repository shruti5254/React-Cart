
import Cards from "./Cards";
import MyButton from "../components/Buttons";
import Titles from "./Titles";
import { getProductsByCategory } from "../data/productsData";

const OurProducts = () =>{
    const allProducts = getProductsByCategory("all-products");

    return(
        <div>
            <div className="custom-container mx-auto w-full mt-[40px] mb-[40px]">
                <div className="section-title flex flex-col">
                    <Titles titleSmall="Our Products" titleLarge="Explore Our Products"/>  
                </div>
                <div className="products-wrapper mt-[30px] w-full mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-4 mx-auto">
                        {allProducts.map((product) => (
                            <Cards 
                                key={product.id}
                        product={product}
                                title={product.title} 
                                image={product.image} 
                                hoverActionLink={product.hoverActionLink} 
                                hoverText={product.hoverText} 
                                showHeart={product.showHeart} 
                                showEye={product.showEye} 
                                priceNew={product.priceNew} 
                                priceOld={product.priceOld}
                                tagLeft={product.tagLeft}
                            />
                        ))}
                    </div>
                    <div className="w-full mx-auto flex justify-center items-start mt-[40px]">
                        <MyButton label="View All Products" btnClickLink="/products"></MyButton>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default OurProducts;