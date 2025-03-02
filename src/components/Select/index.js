import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SelectWithSearch = ({ label, onSelect = () => {}, options, selectedAirport }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const filteredAirports = options.filter((airport) => airport.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleSelect = (airport) => {
        onSelect(airport);
        setIsOpen(false);
        setSearchTerm("");
    };

    return (
        <div className="relative w-full">
            <div onClick={() => setIsOpen(!isOpen)} className={`border px-4 py-2 border-divider_2 rounded-[10px] cursor-pointer ${isOpen ? " bg-info_deep_light" : " bg-transparent"}`}>
                <p className=" text-body2 mb-1 text-info_main uppercase">{label}</p>
                <p className=" text-subtitle1 font-bold text-info_main capitalize">{selectedAirport.name}</p>
                <p className=" text-body2">{selectedAirport.fullName}</p>
            </div>
            {isOpen && <div className="fixed inset-0 bg-transparent z-10" onClick={() => setIsOpen(false)}></div>}

            {isOpen && (
                <div className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10">
                    <div className="relative py-2">
                        <IoIosSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-black/40" />
                        <input type="text" placeholder="Type to search" className="p-2 pl-9 border-b text-body2 placeholder:text-body2 focus:outline-none" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                    <div className="max-h-60 overflow-y-auto">
                        {filteredAirports.map((airport) => (
                            <div key={airport.id} className="py-2 px-4 hover:bg-blue-100 cursor-pointer flex items-center justify-between" onClick={() => handleSelect(airport)}>
                                <div>
                                    <div className="text-body1 font-bold text-info_main">{airport.name}</div>
                                    <div className="text-body2 text-info_main">{airport.fullName}</div>
                                </div>
                                <p className="text-body1 font-bold text-info_light">xscx</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SelectWithSearch;
