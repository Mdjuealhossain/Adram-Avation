import SelectWithSearch from "@/components/Select";
import React, { useState } from "react";

const Visa = () => {
    const [selected, setSelected] = useState(visaLocations[0]); // Default selection for "From"

    return (
        <div className=" grid sm:grid-cols-2 grid-cols-1 gap-[10px]">
            <SelectWithSearch options={visaLocations} location={true} label={"Country"} menuClassName={"md:w-[120%]"} selectedItem={selected} onSelect={setSelected} />
            <div className={`border md:px-4 px-3 py-2 border-divider_2 rounded-[10px] cursor-pointer `}>
                <p className="text-body2 mb-1 text-info_main uppercase">{"Visa Type"}</p>
                <p className="text-subtitle1 font-bold text-info_main capitalize line-clamp-1">{"Tourist"}</p>
                <div className=" h-3"></div>
            </div>
        </div>
    );
};

export default Visa;
const visaLocations = [
    { id: 1, name: "Sri Lanka" },
    { id: 2, name: "Saudi Arabia" },
    { id: 3, name: "Philippines" },
    { id: 4, name: "Malaysia" },
    { id: 5, name: "Singapore" },
];
