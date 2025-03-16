"use client";
import { useState } from "react";

const SpeedTypes = () => {
    const [isCheapest, setIsCheapest] = useState(true);

    const handleSortChange = (value) => {
        setIsCheapest(value);
    };

    console.log("isCheapest", isCheapest);
    return (
        <div className=" bg-white md:py-4  w-full flex items-center">
            <label className={` md:mx-2 mx-1 px-2 py-1 w-1/2 rounded-md border-divider_2 ${isCheapest ? " bg-default" : " bg-transparent"}`}>
                <input type="radio" name="order-by" value="cheapest" checked={isCheapest} onChange={() => handleSortChange(true)} className="mr-2 hidden" />
                <div className="flex flex-col ">
                    <span className=" font-semibold text-info_main text-center md:text-start">Cheapest</span>
                    <span className=" text-body2 font-light text-secondary hidden md:inline">{isCheapest ? "Showing the cheapest flights in ascending order" : "Click to see the cheapest flights in ascending order"}</span>
                </div>
            </label>
            <div className=" w-[2px] bg-black/20 h-10"></div>
            <label className={`bg-white md:mx-2 mx-1 px-2 py-1 w-1/2  rounded-md ${isCheapest ? " bg-transparent" : "bg-default  "}`}>
                <input type="radio" name="order-by" value="fastest" checked={!isCheapest} onChange={() => handleSortChange(false)} className="mr-2 hidden" />
                <div className="flex flex-col ">
                    <span className=" font-semibold text-info_main text-center md:text-start">Fastest</span>
                    <span className="text-body2 font-light text-secondary hidden md:inline">{!isCheapest ? "Showing the fastest flights in ascending order" : "Click to see the fastest flights in ascending order"}</span>
                </div>
            </label>
        </div>
    );
};

export default SpeedTypes;
