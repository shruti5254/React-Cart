import { useNavigate } from "react-router-dom";
const MyButton = ({
    label,
    btnClickLink,
    type = "button",
    className = "",
}) =>{
    const navigate = useNavigate();
    const handleClick = () =>{
        if (btnClickLink){
            navigate(btnClickLink);
        }
    }
    return(
        <button type={type}
        onClick={handleClick}
        className={`px-6.5 py-4 w-max rounded text-white bg-customred hover:bg-customblack cursor-pointer ${className}`}
        >{label}</button>
    )
}
export default MyButton;