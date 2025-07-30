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
        className={`px-10 py-3 w-max rounded text-white bg-[var(--color-accentbkp)] hover:bg-[var(--text)] cursor-pointer ${className}`}
        >{label}</button>
    )
}
export default MyButton;