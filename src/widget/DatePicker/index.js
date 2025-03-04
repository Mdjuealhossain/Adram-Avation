"use client"; // If using Next.js App Router

import { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { IoClose } from "react-icons/io5";

const DatePicker = ({ roundWay, setRoundWay, oneWay, setOneWay }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState("journey");
    const [direction, setDirection] = useState("horizontal"); // Default direction
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 778) {
                // Mobile view threshold
                setDirection("vertical");
            } else {
                setDirection("horizontal");
            }
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const getNextDay = (date) => {
        const nextDay = new Date(date);
        nextDay.setDate(date.getDate() + 1);
        return nextDay;
    };

    // Initial State: Handles both one-way and round-trip selection
    const [date, setDate] = useState([
        {
            startDate: new Date(2025, 2, 8), // Default journey date
            endDate: getNextDay(new Date(2025, 2, 8)), // Default return date is 1 day after
            key: "selection",
        },
    ]);

    const datePickerRef = useRef(null);

    // Close the calendar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Update the date state when roundWay changes
    useEffect(() => {
        if (roundWay) {
            setDate([{ startDate: new Date(), endDate: getNextDay(new Date()), key: "selection" }]); // Set end date 1 day after start date
        } else {
            setDate([{ startDate: new Date(), endDate: new Date(), key: "selection" }]); // One-way trip (single date)
        }
    }, [roundWay]);

    const handleClick = () => {
        setType("journey");
        setIsOpen(true);
    };

    const handleReturn = () => {
        setType("return");
        setIsOpen(true);
        setRoundWay(true);
        setOneWay(false);
    };

    // Handle date selection
    const handleSelect = (ranges) => {
        const { startDate, endDate } = ranges.selection;

        if (roundWay) {
            const newEndDate = endDate >= startDate ? endDate : getNextDay(startDate);
            setDate([{ startDate, endDate: newEndDate, key: "selection" }]);

            // Close the calendar only when the end date is selected
            if (startDate && newEndDate && newEndDate !== startDate) {
                setIsOpen(false);
            }
        } else {
            // For one-way trip, set the date as both start and end date are the same
            setDate([{ startDate, endDate: startDate, key: "selection" }]);
            setIsOpen(false);
            // Don't close the menu when only the start date is selected
        }
    };

    return (
        <div className="flex relative items-start w-full md:w-auto bg-white border rounded-[10px] border-divider_2" ref={datePickerRef}>
            {/* Journey Date Section */}
            <div onClick={handleClick} className={`md:px-4 px-3 py-2 border-r w-1/2  border-divider cursor-pointer ${type === "journey" ? "bg-info_deep_light" : "bg-transparent"}`}>
                <p className="text-body2 mb-1 text-info_main uppercase w-full whitespace-nowrap">JOURNEY DATE</p>
                <button className="text-info_main capitalize flex items-center gap-1">
                    <span className="font-bold">{date[0].startDate.toLocaleDateString("en-GB", { day: "2-digit" })}</span>
                    <span className="text-body1">{date[0].startDate.toLocaleDateString("en-GB", { month: "short", year: "2-digit" }).replace(",", "'")}</span>
                </button>
                <div className="text-body2">{date[0].startDate.toLocaleDateString("en-GB", { weekday: "long" })}</div>
            </div>

            {/* Return Date Section */}
            <div onClick={handleReturn} className={`md:px-4 px-3 py-2  w-1/2 ${type === "return" ? "bg-info_deep_light" : "bg-transparent"}`}>
                <p className="text-body2 mb-1 text-info_main uppercase whitespace-nowrap">RETURN DATE</p>
                {roundWay ? (
                    <div className="flex items-center justify-between relative">
                        <div>
                            <button className="text-info_main capitalize flex items-center gap-1">
                                <span className="font-bold">{date[0].endDate.toLocaleDateString("en-GB", { day: "2-digit" })}</span>
                                <span className="text-body1">{date[0].endDate.toLocaleDateString("en-GB", { month: "short", year: "2-digit" }).replace(",", "'")}</span>
                            </button>
                            <div className="text-body2">{date[0].endDate.toLocaleDateString("en-GB", { weekday: "long" })}</div>
                        </div>
                        <span
                            onClick={(e) => {
                                setRoundWay(false);
                                setOneWay(true);
                                e.stopPropagation();
                            }}
                            className="absolute -right-0 bottom-4 rounded-full bg-black/20 p-1 cursor-pointer"
                        >
                            <IoClose size={14} />
                        </span>
                    </div>
                ) : (
                    <button className="text-body2 text-start whitespace-nowrap">
                        Save more on return <br /> flight
                    </button>
                )}
            </div>

            {/* Date Range Picker */}
            {isOpen && (
                <div className="md:mt-1 z-10 md:absolute   lg:!-left-44 xl:!-left-11 fixed inset-0 md:inset-auto md:top-full bg-white px-2 py-6 flex flex-col items-center justify-center">
                    <p className="mb-2 font-semibold text-center capitalize">Select {type} Date</p>
                    <DateRange
                        key={roundWay ? "return" : "journey"}
                        ranges={roundWay ? date : [{ startDate: date[0].startDate, endDate: date[0].startDate, key: "selection" }]}
                        onChange={handleSelect}
                        months={roundWay ? 2 : 1}
                        direction={direction}
                        showSelectionPreview={roundWay}
                        editableDateInputs={false}
                        showDateDisplay={false}
                        minDate={new Date()} // Prevent past dates selection
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
