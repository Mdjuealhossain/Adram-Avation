import React, { useState, useEffect } from "react";

const SearchSelect = ({ options, select, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        // Update the input value with the selected option
        if (!filter) {
            setFilter(select); // Reset filter to the selected option when closed
        }
    }, [isOpen]);

    const handleOptionClick = (option) => {
        onSelect(option);
        setIsOpen(false);
        setFilter(option); // Set filter to the selected option
    };

    return (
        <div className="relative inline-block h-full">
            <div className="border border-gray-300 rounded-lg bg-white cursor-pointer py-2 px-4 flex items-center" onClick={() => setIsOpen(!isOpen)}>
                <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} className="w-full focus:outline-none" onFocus={() => setIsOpen(true)} />
            </div>
            {isOpen && (
                <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                    {options.map((option) => (
                        <div key={option} onClick={() => handleOptionClick(option)} className={`cursor-pointer text-body1 font-light capitalize hover:bg-info_deep_light px-4 py-2 ${option === select ? " bg-info_main text-white" : " "}`}>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchSelect;
