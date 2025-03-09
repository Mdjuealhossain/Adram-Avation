import Image from "next/image";
import React from "react";

const Offer = () => {
    return (
        <div className=" bg-white p-[14px] flex items-center justify-between rounded w-[600px]">
            <p className=" text-body2 font-semibold text-info_main">attractions & shows</p>
            <Image src={"/assets/images/tour/attractions.png"} height={32} width={32} alt="show" className=" h-8 w-8" />
        </div>
    );
};

export default Offer;
