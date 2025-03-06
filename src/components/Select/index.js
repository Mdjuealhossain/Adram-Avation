"use client"; // If using Next.js App Router

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const SelectWithSearch = ({ label, onSelect = () => {}, options = [], options2 = [], selectedItem, location = false, isDouble = false, menuClassName = "md:w-[350px]" }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null); // Create a ref for the dropdown

    const filteredItems = options.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredItems2 = options2.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleSelect = (item) => {
        onSelect(item);
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
                <p className="text-subtitle1 font-bold text-info_main capitalize line-clamp-1">{selectedItem?.name || "Select a city"}</p>
                <p className="text-body2 line-clamp-1 capitalize">{selectedItem?.fullName || selectedItem?.country}</p>
            </div>

            {isOpen && (
                <div className={`md:absolute  ${menuClassName} fixed inset-0 md:inset-auto md:mt-1 bg-white border rounded-md shadow-lg z-20`}>
                    <div className="relative py-2">
                        <IoIosSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-black/40" />
                        <input type="text" placeholder="Type to search" className="p-2 pl-9 border-b text-body2 placeholder:text-body2 focus:outline-none" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                    {isDouble ? (
                        <div className=" flex p-4 pt-[10px] ">
                            <div className=" w-1/2">
                                <h2 className=" text-subtitle1 font-semibold text-info_main mb-4">Top Destinations</h2>
                                <ul className="mt-2 space-y-[10px]">
                                    {filteredItems.map((item, index) => (
                                        <li key={index} onClick={() => handleSelect(item)} className="flex items-center gap-2 cursor-pointer">
                                            <Image src={item.image} alt={item.name} height={40} width={40} className="w-10 h-10 rounded-md" />
                                            <div>
                                                <div className=" relative flex">
                                                    <p className=" text-body1 font-semibold line-clamp-1 relative">{item.name}</p>
                                                    {item.hot && <span className=" "> 🔥 </span>}
                                                </div>
                                                <p className=" text-body2 line-clamp-1">{item.location}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className=" w-1/2 z-10">
                                <h2 className=" text-subtitle1 font-semibold text-info_main mb-4">Top Properties</h2>
                                <ul className="mt-2 space-y-[10px]">
                                    {filteredItems2.map((item, index) => (
                                        <li key={index} onClick={() => handleSelect(item)} className="flex items-center gap-2 cursor-pointer">
                                            <Image src={item.image} alt={item.name} height={40} width={40} className="w-10 h-10 rounded-md" />
                                            <div>
                                                <div className=" relative flex">
                                                    <p className=" text-body1 font-semibold line-clamp-1 relative">{item.name}</p>
                                                    {item.hot && <span className=" "> 🔥 </span>}
                                                </div>
                                                <p className=" text-body2 line-clamp-1">{item.location}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ) : location ? (
                        <div className="md:max-h-72overflow-y-auto">
                            {filteredItems.map((item) => (
                                <div key={item.id} className="py-2 px-4 hover:bg-blue-100 cursor-pointer flex items-center justify-between" onClick={() => handleSelect(item)}>
                                    <div className="text-body1 text-info_main">{item.name}</div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="md:max-h-72overflow-y-auto">
                            {filteredItems.map((item) => (
                                <div key={item.id} className="py-2 px-4 hover:bg-blue-100 cursor-pointer flex items-center justify-between" onClick={() => handleSelect(item)}>
                                    <div>
                                        <div className="text-body1 font-bold text-info_main">{item.name}</div>
                                        <div className="text-body2 text-info_main">{item.fullName}</div>
                                    </div>
                                    <p className="text-body1 font-bold text-info_light">xscx</p>
                                </div>
                            ))}
                        </div>
                    )}

                    <span onClick={() => setIsOpen(false)} className="absolute top-[90%] left-1/2 -translate-x-1/2 rounded-full bg-black/20 p-2 md:hidden">
                        <IoClose size={18} />
                    </span>
                </div>
            )}
        </div>
    );
};

export default SelectWithSearch;
