"use client";
import { useState } from "react";
import SelectWithSearch from "@/components/Select";
import { LuArrowLeftRight } from "react-icons/lu";

import TravelerSelect from "@/components/TravelerSelect";
import DatePicker from "../DatePicker";

const FlightService = () => {
    const [oneWay, setOneWay] = useState(true);
    const [roundWay, setRoundWay] = useState(false);
    const [multiCity, setMultiCity] = useState(false);

    const [selectedFrom, setSelectedFrom] = useState(airports[0]); // Default selection for "From"
    const [selectedTo, setSelectedTo] = useState(airports[1]); // Default selection for "To"

    const handleSwap = () => {
        setSelectedFrom(selectedTo);
        setSelectedTo(selectedFrom);
    };
    const handlePassenger = (data) => {
        console.log("data", data);
    };

    // fo date
    const getNextDay = (date) => {
        const nextDay = new Date(date);
        nextDay.setDate(date.getDate() + 1);
        return nextDay;
    };
    const [date, setDate] = useState([
        {
            startDate: new Date(2025, 2, 8),
            endDate: getNextDay(new Date(2025, 2, 8)),
            key: "selection",
        },
    ]);

    return (
        <div className=" w-full">
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
            <div className=" grid lg:grid-cols-2 grid-cols-1 gap-[10px]">
                <div className=" grid grid-cols-2 relative gap-[10px]">
                    <SelectWithSearch options={airports} label={"From"} selectedItem={selectedFrom} onSelect={setSelectedFrom} />
                    <SelectWithSearch options={airports} label={"To"} selectedItem={selectedTo} onSelect={setSelectedTo} />
                    <div className={`${multiCity ? " hidden" : "inline-block"} p-[10px] rounded-full border absolute z-10 cursor-pointer bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} onClick={handleSwap}>
                        <LuArrowLeftRight className=" opacity-60 text-info_main" />
                    </div>
                </div>
                <div className=" grid lg:grid-cols-5 gap-[10px]">
                    <div className=" lg:col-span-3 col-span-5">
                        <DatePicker getNextDay={getNextDay} date={date} onSelect={setDate} roundWay={roundWay} setRoundWay={setRoundWay} oneWay={oneWay} setOneWay={setOneWay} multiCity={multiCity} setMultiCity={setMultiCity} startLabel="journy date" endLabel="return date" />
                    </div>
                    <div className=" lg:col-span-2 col-span-5">
                        <TravelerSelect maxAdult={5} maxChildren={4} onSelect={handlePassenger} service={"flight"} label={"Traveler, Class"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightService;
const airports = [
    { id: 1, name: "Dhaka, Bangladesh", fullName: "Hazrat Shahjalal International Airport" },
    { id: 2, name: "Cox's Bazar, Bangladesh", fullName: "Cox's Bazar Airport" },
    { id: 3, name: "Jessore, Bangladesh", fullName: "Jessore Airport" },
    { id: 4, name: "Chittagong, Bangladesh", fullName: "Shah Amanat International Airport" },
    { id: 5, name: "Saidpur, Bangladesh", fullName: "Saidpur Airport" },
    { id: 6, name: "Sylhet Osmani, Bangladesh", fullName: "Osmaniy International Airport" },
];
