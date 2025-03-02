"use client";
import React, { useState } from "react";

const airports = [
    { id: 1, name: "Dhaka, Bangladesh", fullName: "Hazrat Shahjalal International Airport" },
    { id: 2, name: "Cox's Bazar, Bangladesh", fullName: "Cox's Bazar Airport" },
    { id: 3, name: "Jessore, Bangladesh", fullName: "Jessore Airport" },
    { id: 4, name: "Chittagong, Bangladesh", fullName: "Shah Amanat International Airport" },
    { id: 5, name: "Saidpur, Bangladesh", fullName: "Saidpur Airport" },
    { id: 6, name: "Sylhet Osmani, Bangladesh", fullName: "Osmaniy International Airport" },
];

const SelectWithSearch = ({ label, onSelect = () => {} }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedAirport, setSelectedAirport] = useState(null);

    const filteredAirports = airports.filter((airport) => airport.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleSelect = (airport) => {
        setSelectedAirport(airport);
        setIsOpen(false);
        setSearchTerm("");
        onSelect(airport.id); // Pass the airport ID (number) to the parent component
    };

    return (
        <div className="relative w-full mt-64">
            <label className="block text-sm font-medium mb-1">{label}</label>
            <div className="border rounded-md bg-white p-2 cursor-pointer flex items-center justify-between" onClick={() => setIsOpen(!isOpen)}>
                <span>{selectedAirport ? `${selectedAirport.name} (${selectedAirport.id})` : "Select an airport"}</span>
                <span className="material-icons">arrow_drop_down</span>
            </div>

            {isOpen && (
                <div className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10">
                    <input type="text" placeholder="Type to search" className="p-2 border-b focus:outline-none" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <div className="max-h-60 overflow-y-auto">
                        {filteredAirports.map((airport) => (
                            <div key={airport.id} className="p-2 hover:bg-blue-100 cursor-pointer" onClick={() => handleSelect(airport)}>
                                <div>{airport.name}</div>
                                <div className="text-gray-500 text-sm">{airport.fullName}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SelectWithSearch;
