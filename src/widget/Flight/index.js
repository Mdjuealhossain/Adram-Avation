"use client";
import { useState } from "react";
import SelectWithSearch from "@/components/Select";
import { LuArrowLeftRight } from "react-icons/lu";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import TravelerSelect from "@/components/TravelerSelect";
import { IoClose } from "react-icons/io5";

const Flight = () => {
    const [oneWay, setOneWay] = useState(true);
    const [roundWay, setRoundWay] = useState(false);
    const [multiCity, setMultiCity] = useState(false);

    const [selectedFrom, setSelectedFrom] = useState(airports[0]); // Default selection for "From"
    const [selectedTo, setSelectedTo] = useState(airports[1]); // Default selection for "To"
    const [startDate, setStartDate] = useState(new Date(2025, 2, 8)); // State for the selected journey date
    const [isOpen, setIsOpen] = useState(false);
    const [isClass, setIsClass] = useState(false);
    const handleClick = () => {
        setIsOpen(true); // Open date picker on button click
    };
    const handleSwap = () => {
        setSelectedFrom(selectedTo);
        setSelectedTo(selectedFrom);
    };

    return (
        <div>
            <div className="flex items-center gap-4 mb-1">
                <label className={`flex items-center gap-1 text-subtitle1 font-semibold ${oneWay ? " opacity-100" : " opacity-50 cursor-pointer"}`}>
                    <input
                        type="checkbox"
                        checked={oneWay}
                        onChange={() => {
                            setOneWay(true);
                            setRoundWay(false);
                            setMultiCity(false);
                        }}
                        className=" hidden"
                    />
                    <div className={`p-[2px] border-2 border-info_main rounded-full`}>
                        <div className={`h-2 w-2 rounded-full  ${oneWay ? "bg-info_main" : " bg-transparent"}`}></div>
                    </div>
                    <span className=" text-info_main">One Way</span>
                </label>
                <label className={`flex items-center gap-1 text-subtitle1 font-semibold ${roundWay ? " opacity-100" : " opacity-50 cursor-pointer"}`}>
                    <input
                        type="checkbox"
                        checked={roundWay}
                        onChange={() => {
                            setRoundWay(true);
                            setOneWay(false);
                            setMultiCity(false);
                        }}
                        className=" hidden"
                    />
                    <div className={`p-[2px] border-2 border-info_main rounded-full`}>
                        <div className={`h-2 w-2 rounded-full  ${roundWay ? "bg-info_main" : " bg-transparent"}`}></div>
                    </div>
                    <span className=" text-info_main">Round Way</span>
                </label>
                <label className={`flex items-center gap-1 text-subtitle1 font-semibold ${multiCity ? " opacity-100" : " opacity-50 cursor-pointer"}`}>
                    <input
                        type="checkbox"
                        checked={multiCity}
                        onChange={() => {
                            setMultiCity(true);
                            setOneWay(false);
                            setRoundWay(false);
                        }}
                        className=" hidden"
                    />
                    <div className={`p-[2px] border-2 border-info_main rounded-full`}>
                        <div className={`h-2 w-2 rounded-full  ${multiCity ? "bg-info_main" : " bg-transparent"}`}></div>
                    </div>
                    <span className=" text-info_main">Multi City</span>
                </label>
            </div>
            <div className=" flex lg:items-center flex-col md:flex-row gap-[10px]">
                <div className=" flex items-center relative gap-[10px]">
                    <SelectWithSearch options={airports} label={"From"} selectedAirport={selectedFrom} onSelect={setSelectedFrom} />
                    <SelectWithSearch options={airports} label={"To"} selectedAirport={selectedTo} onSelect={setSelectedTo} />
                    <div className=" p-[10px] rounded-full border absolute z-10 cursor-pointer bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" onClick={handleSwap}>
                        <LuArrowLeftRight className=" opacity-60 text-info_main" />
                    </div>
                </div>

                <div className="flex relative items-start bg-white border rounded-[10px] border-divider_2 ">
                    <div onClick={handleClick} className={`md:px-4 px-3 py-2 border-r w-1/2 md:w-auto border-divider  ${isOpen ? " bg-info_deep_light" : " bg-transparent"}`}>
                        <p className=" text-body2 mb-1 text-info_main uppercase max-w-[126px] w-full whitespace-nowrap">JOURNEY DATE</p>
                        <button className="text-info_main capitalize max-w-[126px] w-full flex items-center gap-1">
                            <span className="font-bold">{startDate.toLocaleDateString("en-GB", { day: "2-digit" })}</span>
                            <span className=" text-body1">{startDate.toLocaleDateString("en-GB", { month: "short", year: "2-digit" }).replace(",", "'")}</span>
                        </button>

                        {/* <button className=" text-subtitle1 font-bold text-info_main capitalize max-w-[126px] w-full">{startDate ? startDate.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "2-digit" }) : "Select Date"}</button> */}
                        <div className=" text-body2 max-w-[126px] w-full">{startDate ? startDate.toLocaleDateString("en-GB", { weekday: "long" }) : ""}</div>
                    </div>
                    {isOpen && (
                        <div className="md:mt-1 z-10 md:absolute fixed inset-0 md:inset-auto md:top-full bg-white px-2 py-6 ">
                            <p className=" capitalize mb-2 font-semibold text-center">select journy date</p>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => {
                                    setStartDate(date);
                                    setIsOpen(false); // Close the date picker after selection
                                }}
                                inline // Displays the calendar inline
                                onClickOutside={() => setIsOpen(false)} // Close on outside click
                                className="border rounded-lg shadow-lg p-2"
                                dateFormat="dd/MM/yyyy" // Format of the selected date
                            />
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => {
                                    setStartDate(date);
                                    setIsOpen(false); // Close the date picker after selection
                                }}
                                inline // Displays the calendar inline
                                onClickOutside={() => setIsOpen(false)} // Close on outside click
                                className="border rounded-lg shadow-lg p-2"
                                dateFormat="dd/MM/yyyy" // Format of the selected date
                            />
                            <span onClick={() => setIsOpen(false)} className="absolute top-[90%] left-1/2 -translate-x-1/2 md:hidden rounded-full bg-black/20 p-2 cursor-pointer">
                                <IoClose size={18} />
                            </span>
                        </div>
                    )}

                    <div className=" md:px-4 px-3 py-2 w-1/2 md:w-auto ">
                        <p className=" text-body2 mb-1 text-info_main uppercase max-w-[126px] w-full whitespace-nowrap">RETURN DATE</p>
                        <button className=" text-body2 max-w-[126px] w-full text-start whitespace-nowrap">
                            Save more on return <br /> flight
                        </button>
                    </div>
                </div>
                <TravelerSelect label={"Traveler, Class"} />
            </div>
        </div>
    );
};

export default Flight;
const airports = [
    { id: 1, name: "Dhaka, Bangladesh", fullName: "Hazrat Shahjalal International Airport" },
    { id: 2, name: "Cox's Bazar, Bangladesh", fullName: "Cox's Bazar Airport" },
    { id: 3, name: "Jessore, Bangladesh", fullName: "Jessore Airport" },
    { id: 4, name: "Chittagong, Bangladesh", fullName: "Shah Amanat International Airport" },
    { id: 5, name: "Saidpur, Bangladesh", fullName: "Saidpur Airport" },
    { id: 6, name: "Sylhet Osmani, Bangladesh", fullName: "Osmaniy International Airport" },
];
