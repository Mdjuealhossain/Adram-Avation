"use client"; // If using Next.js App Router

import React, { useState, useRef, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const SelectWithSearch = ({ label, onSelect = () => {}, options, selectedAirport }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null); // Create a ref for the dropdown

    const filteredAirports = options.filter((airport) => airport.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleSelect = (airport) => {
        onSelect(airport);
        setIsOpen(false);
        setSearchTerm("");
    };

    // Handle clicks outside of the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        // Add event listener for clicks
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Cleanup the event listener on component unmount
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative w-full" ref={selectRef}>
            <div onClick={() => setIsOpen(!isOpen)} className={`border md:px-4 px-3 py-2 border-divider_2 rounded-[10px] cursor-pointer ${isOpen ? " bg-info_deep_light" : " bg-transparent"}`}>
                <p className="text-body2 mb-1 text-info_main uppercase">{label}</p>
                <p className="text-subtitle1 font-bold text-info_main capitalize line-clamp-1">{selectedAirport.name}</p>
                <p className="text-body2 line-clamp-1">{selectedAirport.fullName}</p>
            </div>

            {isOpen && (
                <div className="md:absolute md:w-[400px] fixed inset-0 md:inset-auto md:mt-1 bg-white border rounded-md shadow-lg z-20">
                    <div className="relative py-2">
                        <IoIosSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-black/40" />
                        <input type="text" placeholder="Type to search" className="p-2 pl-9 border-b text-body2 placeholder:text-body2 focus:outline-none" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>

                    <div className="md:max-h-60 overflow-y-auto">
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

                    <span onClick={() => setIsOpen(false)} className="absolute top-[90%] left-1/2 -translate-x-1/2 rounded-full bg-black/20 p-2">
                        <IoClose size={18} />
                    </span>
                </div>
            )}
        </div>
    );
};

export default SelectWithSearch;
