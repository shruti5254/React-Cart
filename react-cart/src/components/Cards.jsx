import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { CiTrash } from "react-icons/ci";

const Cards = ({
  title,
  childTitle,
 /*  description, */
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
}) => {
  const navigate = useNavigate();
  const handleHoverClick = () => {
    if (hoverActionLink) {
      navigate(hoverActionLink);
    }
  };
  return (
    <div
      className={`relative group overflow-hidden w-full cursor-pointer ${className}`}
    >
        {image && (
            <div className="relative px-3 py-3 w-full rounded mb-1 bg-gray-200 bg-shadow-md overflow-hidden">
            <img
                src={image}
                alt={title}
                className="w-full h-50 object-contain "
            />
            <div className="icons-tr absolute top-2 right-2 flex flex-col gap-3 z-10">
                {showHeart && (
                    <span className="w-[25px] h-[25px] rounded-full bg-white flex items-center justify-center">
                        <CiHeart className="color-accentbkp"size="1.2em" />
                    </span>
                )}
                
                {showTrash && (
                <span className="w-[25px] h-[25px] rounded-full bg-white flex items-center justify-center">
                    <CiTrash className="color-accentbkp" size="1.2em" />
                </span>
                )}

                {showEye && (
                <span className="w-[25px] h-[25px] rounded-full bg-white flex items-center justify-center">
                    <IoEyeOutline className="color-accentbkp" size="1.2em" />
                </span>
                )}
            </div>
            {/* Hover Text Reveal */}
            {hoverText && (
                <div
                onClick={handleHoverClick}
                className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-sm px-4 py-2 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 cursor-pointer"
                >
                {hoverText}
                </div>
            )}
            </div>
        )}

        <div className={contentPosition === "top" ? "mb-4" : ""}>
            <div className="title_medium mb-1">{title}</div>
            {/* <p className="text-gray-600 mb-4">{description}</p> */}
            {/* price section */}
            {priceNew && (
                <div className="flex flex-row gap-5 justify-start items-start">
                    <span className="color-accentbkp font-medium">{priceNew}</span>
                    {priceOld && (
                        <div className="relative w-max h-max">
                            <span className="text-gray-400 font-medium">{priceOld}</span>
                            <span className="absolute w-[calc(98% + 1rem)] bg-gray-400 h-px left-0 right-0 top-1/2 transform translate-y-1/2 z-10"></span>
                        </div>    
                    )}
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
