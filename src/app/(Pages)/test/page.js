"use client";
import { useState, useRef, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const SelectComponent = ({ destinations, properties }) => {
    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const selectRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelect = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
        setSearch("");
    };

    const filteredDestinations = destinations.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    const filteredProperties = properties.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="relative  w-[600px] mt-64" ref={selectRef}>
            <div onClick={() => setIsOpen(!isOpen)} className={`border px-4 py-2 rounded-md cursor-pointer ${isOpen ? "bg-gray-100" : "bg-white"}`}>
                <p className="text-gray-600 text-sm">Select an option</p>
                <p className="text-lg font-bold">{selectedItem?.name || "Select a city or property"}</p>
            </div>

            {isOpen && (
                <div className="absolute w-full mt-2 bg-white shadow-lg rounded-lg p-4 ">
                    <div className="relative mb-2">
                        <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input type="text" placeholder="Type to search" className="w-full p-2 pl-10 border rounded-md focus:outline-none" value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>

                    <div className=" flex ">
                        <div className=" w-1/2 max-h-96 overflow-y-auto z-10">
                            <h2 className="text-lg font-bold text-blue-600">Top Destinations</h2>
                            <ul className="mt-2 space-y-2">
                                {filteredDestinations.map((item, index) => (
                                    <li key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer" onClick={() => handleSelect(item)}>
                                        <img src={item.image} alt={item.name} className="w-8 h-8 rounded-md" />
                                        <div>
                                            <p className="font-medium">{item.name}</p>
                                            <p className="text-sm text-gray-500">{item.location}</p>
                                        </div>
                                        {item.hot && <span className="ml-auto text-red-500">🔥</span>}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className=" w-1/2 max-h-96 overflow-y-auto z-10">
                            <h2 className="mt-4 text-lg font-bold text-green-600">Top Properties</h2>
                            <ul className="mt-2 space-y-2">
                                {filteredProperties.map((item, index) => (
                                    <li key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer" onClick={() => handleSelect(item)}>
                                        <img src={item.image} alt={item.name} className="w-8 h-8 rounded-md" />
                                        <div>
                                            <p className="font-medium">{item.name}</p>
                                            <p className="text-sm text-gray-500">{item.location}</p>
                                        </div>
                                        {item.hot && <span className="ml-auto text-red-500">🔥</span>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <span onClick={() => setIsOpen(false)} className="absolute top-[100%] left-1/2 transform -translate-x-1/2 bg-black/20 p-2 rounded-full cursor-pointer">
                        <IoClose size={18} />
                    </span>
                </div>
            )}
        </div>
    );
};

export default function App() {
    const topDestinations = [
        { name: "Cox's Bazar", location: "City", image: "coxs-bazar.jpg", hot: true },
        { name: "Sylhet", location: "City", image: "sylhet.jpg", hot: true },
        { name: "Sreemangal", location: "City", image: "sreemangal.jpg", hot: false },
        { name: "Gazipur", location: "City", image: "gazipur.jpg", hot: true },
        { name: "Dhaka", location: "City", image: "dhaka.jpg", hot: false },
        { name: "Cox's Bazar", location: "City", image: "coxs-bazar.jpg", hot: true },
        { name: "Sylhet", location: "City", image: "sylhet.jpg", hot: true },
        { name: "Sreemangal", location: "City", image: "sreemangal.jpg", hot: false },
        { name: "Gazipur", location: "City", image: "gazipur.jpg", hot: true },
        { name: "Dhaka", location: "City", image: "dhaka.jpg", hot: false },
    ];

    const topProperties = [
        { name: "Sea Pearl Beach Resort", location: "Cox's Bazar", image: "sea-pearl.jpg", hot: true },
        { name: "Sayeman Beach Resort", location: "Cox's Bazar", image: "sayeman.jpg", hot: false },
        { name: "Sayeman Heritage", location: "Cox's Bazar", image: "heritage.jpg", hot: true },
        { name: "Paragon Hotel & Resort", location: "Sreemangal", image: "paragon.jpg", hot: true },
        { name: "Sea Pearl Beach Resort", location: "Cox's Bazar", image: "sea-pearl.jpg", hot: true },
        { name: "Sayeman Beach Resort", location: "Cox's Bazar", image: "sayeman.jpg", hot: false },
        { name: "Sayeman Heritage", location: "Cox's Bazar", image: "heritage.jpg", hot: true },
        { name: "Paragon Hotel & Resort", location: "Sreemangal", image: "paragon.jpg", hot: true },
    ];

    return (
        <div className="flex justify-center p-6 bg-gray-50 min-h-screen">
            <SelectComponent destinations={topDestinations} properties={topProperties} />
        </div>
    );
}
