"use client";
import React, { useState } from "react";

// Color Palette
const colors = {
    primary: "#3b82f6", // Blue-500 (Tailwind default)
    secondary: "#6b7280", // Gray-500
    textDark: "#1e3a8a", // Indigo-900 (For Headings)
    textLight: "#374151", // Gray-700 (For descriptions)
    background: "#f9fafb", // Gray-50
    border: "#d1d5db", // Gray-300
    accent: "#facc15", // Yellow-400 (For the "Done" button)
    buttonText: "#ffffff", // White
};

const RoomConfiguration = () => {
    const [rooms, setRooms] = useState([{ id: 1, adults: 2, children: 3 }]);

    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);

    const handleIncrementAdults = () => {
        setAdults(adults + 1);
    };

    const handleDecrementAdults = () => {
        if (adults > 0) {
            setAdults(adults - 1);
        }
    };

    const handleIncrementChildren = () => {
        setChildren(children + 1);
    };

    const handleDecrementChildren = () => {
        if (children > 0) {
            setChildren(children - 1);
        }
    };

    const handleAddRoom = () => {
        const newRoom = {
            id: rooms.length + 1,
            adults: 1,
            children: 0,
        };
        setRooms([...rooms, newRoom]);
    };

    const handleRemoveRoom = (id) => {
        setRooms(rooms.filter((room) => room.id !== id));
    };

    return (
        <div className="bg-white rounded-md shadow-md p-4 w-full max-w-md">
            {rooms.map((room, index) => (
                <div key={room.id} className="mb-4 pb-4 border-b border-gray-200">
                    <div className="flex justify-between items-start">
                        <h3 className="text-lg font-semibold text-indigo-900">Room {index + 1}</h3>
                        <button className={`text-blue-500 hover:text-blue-700 ${index === 0 ? "hidden" : "inline-block"}`} onClick={() => handleRemoveRoom(room.id)}>
                            Remove
                        </button>
                    </div>
                    <p className={`${index === rooms.length - 1 ? "hidden" : "inline-block"} text-sm text-gray-700`}>
                        {room.adults} Adults, {room.children} Children
                    </p>
                </div>
            ))}

            <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Adults</label>
                        <span className="text-xs text-gray-500">10 years +</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="rounded-full h-7 w-7 flex items-center justify-center border border-gray-300 text-gray-500 hover:text-gray-700 focus:outline-none" onClick={handleDecrementAdults} disabled={adults <= 0}>
                            <span>-</span>
                        </button>
                        <span>{adults}</span>
                        <button className="rounded-full h-7 w-7 flex items-center justify-center border border-gray-300 text-gray-500 hover:text-gray-700 focus:outline-none" onClick={handleIncrementAdults}>
                            <span>+</span>
                        </button>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Child</label>
                        <span className="text-xs text-gray-500">0-10 years</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="rounded-full h-7 w-7 flex items-center justify-center border border-gray-300 text-gray-500 hover:text-gray-700 focus:outline-none" onClick={handleDecrementChildren} disabled={children < 0}>
                            <span>-</span>
                        </button>
                        <span>{children}</span>
                        <button className="rounded-full h-7 w-7 flex items-center justify-center border border-gray-300 text-gray-500 hover:text-gray-700 focus:outline-none" onClick={handleIncrementChildren}>
                            <span>+</span>
                        </button>
                    </div>
                </div>
            </div>
            {adults > 3 && rooms.length < 2 && (
                <p className=" text-red-600 text-body2">
                    More than 3 guests ? <br /> Add another room to get more options .{" "}
                </p>
            )}
            <div className="flex justify-between mt-4">
                <button className="bg-white text-blue-500 border border-blue-500 rounded-md py-2 px-4 hover:bg-blue-50 focus:outline-none" onClick={handleAddRoom}>
                    Add Another Room
                </button>
                <button className="bg-yellow-400 text-white rounded-md py-2 px-4 hover:bg-yellow-500 focus:outline-none">Done</button>
            </div>
        </div>
    );
};

export default RoomConfiguration;
