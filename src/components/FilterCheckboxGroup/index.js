"use client";
import { useState } from "react";
import { BsCheckSquareFill } from "react-icons/bs";

const FilterCheckboxGroup = ({ title, options, selectedFilters, onSelect }) => {
    const [showAll, setShowAll] = useState(false);
    const visibleOptions = showAll ? options : options.slice(0, 4);

    const handleFilterChange = (id) => {
        const newSelectedFilters = [...selectedFilters];

        if (newSelectedFilters.includes(id)) {
            const index = newSelectedFilters.indexOf(id);
            newSelectedFilters.splice(index, 1);
        } else {
            newSelectedFilters.push(id);
        }

        onSelect(newSelectedFilters);
    };

    return (
        <div className=" ">
            <p className="text-subtitle1 font-semibold text-info_main pb-1">{title}</p>
            <div className="flex flex-col gap-[10px]">
                {visibleOptions.map(({ id, label }) => (
                    <label key={id} className="inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="form-checkbox hidden h-5 w-5 rounded border-gray-300 focus:ring-blue-500"
                            checked={selectedFilters.includes(id)} // Check if the ID is in the selected array
                            onChange={() => handleFilterChange(id)} // Update on change
                        />
                        <div className="h-5 w-5">{selectedFilters.includes(id) ? <BsCheckSquareFill size={18} className="shadow-md text-info_main" /> : <div className="h-[18px] w-[18px] border border-black/50 rounded-[3px] shadow-md"></div>}</div>
                        <span className="ml-1 text-body1 text-gray_400">{label}</span>
                    </label>
                ))}
            </div>
            {/* Show "See More" button only if options > 4 */}
            {options.length > 4 && (
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="text-info_main text-body1 font-medium mt-2"
                        onClick={(e) => {
                            e.preventDefault(); // Prevents form submission issues
                            setShowAll(!showAll);
                        }}
                    >
                        {showAll ? "See Less" : "See More"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default FilterCheckboxGroup;
