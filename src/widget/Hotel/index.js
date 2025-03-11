"use client";
import SelectWithSearch from "@/components/Select";
import React, { useState } from "react";
import { BsCheckSquareFill } from "react-icons/bs";
import DatePicker from "../DatePicker";
import TravelerSelect from "@/components/TravelerSelect";

const HotelSerice = ({ isSearchFor = false }) => {
    const [selected, setSelected] = useState(topDestinations[0]); // Default selection for "From"

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
    const handlePassenger = (data) => {
        console.log("data-hotel", data);
    };
    console.log("selected", selected);

    console.log("date?.startDate", date);
    const [filters, setFilters] = useState({
        business: false,
        couples: false,
        families: false,
        friends: false,
        solo: false,
    });

    const handleFilterChange = (filterName) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: !prevFilters[filterName],
        }));
    };

    const filterOptions = [
        { name: "business", label: "Business" },
        { name: "couples", label: "Couples" },
        { name: "families", label: "Families" },
        { name: "friends", label: "Friends" },
        { name: "solo", label: "Solo" },
    ];

    return (
        <div className=" w-full">
            <div className=" grid md:grid-cols-5 grid-cols-1 gap-[10px] w-full ">
                <div className=" md:col-span-2">
                    <SelectWithSearch options={topDestinations} menuClassName={"md:w-[500px]"} options2={topProperties} isDouble label={"City/Hotel/Resort/Area"} selectedItem={selected} onSelect={setSelected} />
                </div>
                <div className=" md:col-span-2">
                    <DatePicker date={date} onSelect={setDate} oneWay={false} getNextDay={getNextDay} roundWay={true} service="hotel" startLabel="Check In" endLabel="Check out" />
                </div>
                <TravelerSelect onSelect={handlePassenger} label={"Rooms & Guests"} service="hotel" menuClassName="md:!w-[400px] !right-0" maxAdult={100} maxChildren={4} />
            </div>
            {isSearchFor && (
                <div className="flex items-center space-x-4 my-3">
                    <span className=" text-body1 font-semibold text-info_main">Search for</span>
                    {filterOptions.map(({ name, label }) => (
                        <label key={name} className={`inline-flex items-center cursor-pointer`}>
                            <input type="checkbox" className={`form-checkbox hidden h-5 w-5  rounded border-gray-300 focus:ring-blue-500`} checked={filters[name]} onChange={() => handleFilterChange(name)} />
                            <div className=" h-5 w-5 ">{filters[name] ? <BsCheckSquareFill size={18} className="shadow-md text-info_main" /> : <div className=" h-[18px] w-[18px] border border-black/50 rounded-[3px] shadow-md"></div>}</div>
                            <span className="ml-1 text-body1 text-gray_400">{label}</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HotelSerice;
const airports = [
    { id: 1, name: "Dhaka, Bangladesh", fullName: "Hazrat Shahjalal International Airport" },
    { id: 2, name: "Cox's Bazar, Bangladesh", fullName: "Cox's Bazar Airport" },
    { id: 3, name: "Jessore, Bangladesh", fullName: "Jessore Airport" },
    { id: 4, name: "Chittagong, Bangladesh", fullName: "Shah Amanat International Airport" },
    { id: 5, name: "Saidpur, Bangladesh", fullName: "Saidpur Airport" },
    { id: 6, name: "Sylhet Osmani, Bangladesh", fullName: "Osmaniy International Airport" },
];
const topDestinations = [
    { country: "bangladesh", name: "Cox's Bazar", location: "City", image: "/assets/images/2023-12-05XWhOjUfPHK.jpg", hot: true },
    { country: "bangladesh", name: "Sylhet", location: "City", image: "/assets/images/2023-12-05XWhOjUfPHK.jpg", hot: true },
    { country: "bangladesh", name: "Sreemangal", location: "City", image: "/assets/images/2023-12-05XWhOjUfPHK.jpg", hot: false },
    { country: "bangladesh", name: "Gazipur", location: "City", image: "/assets/images/2023-12-05XWhOjUfPHK.jpg", hot: true },
    { country: "bangladesh", name: "Dhaka", location: "City", image: "/assets/images/2023-12-05XWhOjUfPHK.jpg", hot: false },
];

const topProperties = [
    { country: "bangladesh", name: "Sea Pearl Beach Resort cdc ffc ec c", location: "Cox's Bazar", image: "/assets/images/2023-12-05XWhOjUfPHK.jpg", hot: true },
    { country: "bangladesh", name: "Sayeman Beach Resort", location: "Cox's Bazar", image: "/assets/images/2023-12-05XWhOjUfPHK.jpg", hot: false },
    { country: "bangladesh", name: "Sayeman Heritage", location: "Cox's Bazar", image: "/assets/images/2023-12-05XWhOjUfPHK.jpg", hot: true },
    { country: "bangladesh", name: "Paragon Hotel & Resort", location: "Sreemangal", image: "/assets/images/2023-12-05XWhOjUfPHK.jpg", hot: true },
    { country: "bangladesh", name: "Paragon Hotel & Resort", location: "Sreemangal", image: "/assets/images/2023-12-05XWhOjUfPHK.jpg", hot: true },
];
