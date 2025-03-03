"use client"; // If using Next.js App Router

import { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main styles
import "react-date-range/dist/theme/default.css"; // Theme styles
import { IoClose } from "react-icons/io5";

const DatePicker = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isReturn, setIsReturn] = useState(false);
    const [type, setType] = useState("journey");

    const [startDate, setStartDate] = useState(new Date(2025, 2, 8)); // Default journey date
    const [endDate, setEndDate] = useState(new Date(2025, 2, 10)); // Default return date

    const [date, setDate] = useState([
        {
            startDate: new Date(2025, 2, 8), // Default journey date
            endDate: new Date(2025, 2, 10), // Default return date
            key: "selection",
        },
    ]);

    const datePickerRef = useRef(null); // Create a ref for the date picker

    // Handle click to open the calendar for the journey date
    const handleClick = () => {
        setType("journey");
        setIsReturn(false); // Reset return state
        setIsOpen(true); // Open calendar
    };

    // Handle click to open the calendar for the return date
    const handleReturn = () => {
        setType("return");
        setIsReturn(true); // Set return date mode
        setIsOpen(true); // Open calendar
    };

    // Handle date selection and update state for both single and range date selection
    const handleSelect = (ranges) => {
        const { startDate, endDate } = ranges.selection; // Destructure selected dates

        if (isReturn) {
            setEndDate(endDate);
            setDate([{ startDate, endDate, key: "selection" }]); // Update date state directly for return
        } else {
            setStartDate(startDate);
            setDate([{ startDate, endDate: startDate, key: "selection" }]); // Same for single date
        }
    };

    // Handle clicks outside of the date picker
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        // Add event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Cleanup the event listener on component unmount
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex relative items-start bg-white border rounded-[10px] border-divider_2" ref={datePickerRef}>
            {/* Journey Date Section */}
            <div onClick={handleClick} className={`md:px-4 px-3 py-2 border-r w-1/2 md:w-auto border-divider cursor-pointer ${type === "journey" ? "bg-info_deep_light" : "bg-transparent"}`}>
                <p className="text-body2 mb-1 text-info_main uppercase max-w-[126px] w-full whitespace-nowrap">JOURNEY DATE</p>
                <button className="text-info_main capitalize max-w-[126px] w-full flex items-center gap-1">
                    <span className="font-bold">{startDate.toLocaleDateString("en-GB", { day: "2-digit" })}</span>
                    <span className="text-body1">{startDate.toLocaleDateString("en-GB", { month: "short", year: "2-digit" }).replace(",", "'")}</span>
                </button>
                <div className="text-body2 max-w-[126px] w-full">{startDate ? startDate.toLocaleDateString("en-GB", { weekday: "long" }) : ""}</div>
            </div>

            {/* Return Date Section */}
            <div onClick={handleReturn} className={`md:px-4 px-3 py-2 w-1/2 md:w-auto ${type === "return" ? "bg-info_deep_light" : "bg-transparent"}`}>
                <p className="text-body2 mb-1 text-info_main uppercase max-w-[126px] w-full whitespace-nowrap">RETURN DATE</p>
                <button className="text-info_main capitalize max-w-[126px] w-full flex items-center gap-1">
                    <span className="font-bold">{endDate.toLocaleDateString("en-GB", { day: "2-digit" })}</span>
                    <span className="text-body1">{endDate.toLocaleDateString("en-GB", { month: "short", year: "2-digit" }).replace(",", "'")}</span>
                </button>
                <div className="text-body2 max-w-[126px] w-full">{endDate ? endDate.toLocaleDateString("en-GB", { weekday: "long" }) : ""}</div>
            </div>

            {/* Date Range Picker (opens on button click) */}
            {isOpen && (
                <div className="md:mt-1 z-10 md:absolute fixed inset-0 md:inset-auto md:top-full bg-white px-2 py-6">
                    <p className="mb-2 font-semibold text-center capitalize">Select {type} Date</p>
                    <DateRange
                        key={isReturn ? "return" : "journey"} // Force re-render on type change
                        ranges={date}
                        onChange={handleSelect}
                        months={isReturn ? 2 : 1} // Show 2 calendars for return date
                        direction="horizontal"
                        showSelectionPreview={isReturn}
                        editableDateInputs={false}
                        showDateDisplay={false}
                    />
                    {/* Close Icon */}
                    <span onClick={() => setIsOpen(false)} className="absolute top-[90%] left-1/2 -translate-x-1/2 md:hidden rounded-full bg-black/20 p-2 cursor-pointer">
                        <IoClose size={18} />
                    </span>
                </div>
            )}
        </div>
    );
};

export default DatePicker;
