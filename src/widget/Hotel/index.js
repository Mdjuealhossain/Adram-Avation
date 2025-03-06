"use client";
import SelectWithSearch from "@/components/Select";
import React, { useState } from "react";
import DatePicker from "../DatePicker";
import TravelerSelect from "@/components/TravelerSelect";

const Hotel = () => {
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

    return (
        <div className=" grid md:grid-cols-5 grid-cols-1 gap-[10px]">
            <div className=" md:col-span-2">
                <SelectWithSearch options={topDestinations} menuClassName={"md:w-[500px]"} options2={topProperties} isDouble label={"City/Hotel/Resort/Area"} selectedItem={selected} onSelect={setSelected} />
            </div>
            <div className=" md:col-span-2">
                <DatePicker date={date} onSelect={setDate} oneWay={false} getNextDay={getNextDay} roundWay={true} service="hotel" startLabel="Check In" endLabel="Check out" />
            </div>
            <TravelerSelect onSelect={handlePassenger} label={"Rooms & Guests"} service="hotel" menuClassName="md:!w-[400px] !right-0" maxAdult={100} maxChildren={4} />
        </div>
    );
};

export default Hotel;
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
