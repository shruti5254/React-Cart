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
        <div className="flex flex-row items-center justify-center w-full h-[40px] border border-gray-300 divide-x divide-gray-300 rounded text-xl font-medium cursor-pointer">
            <button onClick={decQty} className="w-6 h-6 text-center mx-auto cursor-pointer"><FiMinus className="w-full h-full" /></button>
            <span className="w-10 h-6 text-center mx-auto">{qty}</span>
            <button onClick={incQty} className="w-6 h-6 text-center mx-auto cursor-pointer"><FiPlus className="w-full h-full"/></button>
        </div>
    );
}

export default QtyCounter;