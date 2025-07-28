import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { HiOutlineEye } from "react-icons/hi2";
import { CiTrash } from "react-icons/ci";
import StarRating from "./StarRatings";

const Cards = ({
  title,
  childTitle,
  image,
  children,
  hoverText,
  className = "",
  contentPosition = "bottom",
  hoverActionLink,
  showHeart = false,
  showTrash = false,
  showEye = false,
  priceNew,
  priceOld,
  tagLeft,
}) => {
  const navigate = useNavigate();
  const handleHoverClick = () => {
    if (hoverActionLink) {
      navigate(hoverActionLink);
    }
  };
  return (
    <div
      className={`relative group overflow-hidden w-full cursor-pointer pt-2 ${className}`}
    >
        
        {image && (
        
            <div className="relative flex items-center justify-center h-[200px] px-3 py-3 w-full rounded mb-1 color-bgbkp bg-shadow-md overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-40 object-contain"
                />
                {tagLeft && (
                    <div className="icons-tr absolute top-3 left-2.5 z-10">
                        <span className="px-2 py-1.5 bg-customred rounded w-max text-white uppercase text-xs">{tagLeft}</span>
                    </div>
                )}
            
                <div className="icons-tr absolute top-3 right-2 flex flex-col gap-2 z-10">
                    {showHeart && (
                        <span className="rounded-full p-0.5 bg-white flex items-center justify-center">
                            <CiHeart className="color-text"size="1.45em" />
                        </span>
                    )}
                    
                    {showTrash && (
                    <span className="rounded-full p-0.5 bg-white flex items-center justify-center">
                        <CiTrash className="color-text" size="1.45em" />
                    </span>
                    )}

                    {showEye && (
                        <Link to={"/products/details"}>
                            <span className="rounded-full p-0.5 bg-white flex items-center justify-center">
                                <HiOutlineEye className="color-text" size="1.45em" />
                            </span>
                        </Link>
                    
                    )}
                </div>
                {/* Hover Text Reveal */}
                {hoverText && (
                    <div
                    onClick={handleHoverClick}
                    className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-sm capitalize text-center px-3 py-3 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 cursor-pointer"
                    >
                    {hoverText}
                    </div>
                )}
                
            </div>
        )}
       
        <div className={contentPosition === "top" ? "mb-4" : ""}>
            <div className="title_medium py-2">{title}</div>
            {/* <p className="text-gray-600 mb-4">{description}</p> */}
            {/* price section */}
            {priceNew && (
                <div>
                    <div className="flex flex-row gap-5 justify-start items-start text-sm pb-2">
                        <span className="color-accentbkp font-medium">{priceNew}</span>
                        {priceOld && (
                            <div className="relative w-max h-max">
                                <span className="text-gray-400 font-medium">{priceOld}</span>
                                <span className="absolute w-[calc(98% + 1rem)] bg-gray-400 h-px left-0 right-0 top-1/2 transform translate-y-1/2 z-10"></span>
                            </div>    
                        )}
                    </div>
                    <StarRating/>
                </div>
            
            )} 
        </div>

       
       
        {/* Children area — user can add button, icons, etc. */}
        {children && (
            <div className={contentPosition === "top" ? "px-2 py-2 w-full h-max": contentPosition === "bottom" ? "mt-auto" : ""}>
                <div className="flex flex-col gap-2 justify-center items-center">
                    <div className="w-full h-[55px] ">{children}</div>
                    <div className="text-xs font-semibold my-1">{childTitle}</div>   
                </div>  
            </div>
        )}
    </div>
  );
};
export default Cards;
