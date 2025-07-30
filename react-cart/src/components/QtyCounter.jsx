import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";


const QtyCounter = () =>{
    const [qty, setQty] = useState(0);

    const incQty = () =>{
        setQty(qty + 1);
    }

    const decQty = () =>{

        setQty(qty - 1);
    }
    return(
        <div className="flex flex-row w-max h-full border border-gray-400 rounded text-base font-medium cursor-pointer">
            <button onClick={decQty} className="flex items-center justify-center w-[32px] h-10 text-center px-1 cursor-pointer hover:bg-[var(--color-accentbkp)] hover:text-white"><FiMinus className="w-5 h-5" /></button>
            <div className="flex items-center justify-center w-[65px] h-10 text-center align-middle border-x border-gray-400 px-1">{qty}</div>
            <button onClick={incQty} className="flex items-center justify-center w-[32px] h-10 text-center px-1 cursor-pointer hover:bg-[var(--color-accentbkp)] hover:text-white"><FiPlus className="w-5 h-5"/></button>
        </div>
    );
}

export default QtyCounter;