import Image from "next/image";
import React from "react";

const Offer = ({ id, label, icon, onSelect, className }) => {
    return (
        <div onClick={onSelect} className={`  rounded cursor-pointer ${className}`}>
            <div className=" flex w-[153px]  p-[14px]">
                <p className=" text-body2 font-semibold text-info_main">{label}</p>
                <Image src={icon} height={32} width={32} alt="show" className=" h-8 w-8" />
            </div>
        </div>
    );
};

export default Offer;
