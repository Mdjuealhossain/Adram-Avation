"use client";
import SelectWithSearch from "@/components/Select";
import React, { useState } from "react";
import DatePicker from "../DatePicker";
import TravelerSelect from "@/components/TravelerSelect";

const Hotel = () => {
    const [selected, setSelected] = useState(topDestinations[0]); // Default selection for "From"
    const handlePassenger = (data) => {
        console.log("data");
    };

    return (
        <div className=" grid grid-cols-5 gap-[10px]">
            <div className=" col-span-2">
                <SelectWithSearch options={topDestinations} options2={topProperties} isDouble label={"City/Hotel/Resort/Area"} selectedItem={selected} onSelect={setSelected} />
            </div>
            <div className=" col-span-2">
                <DatePicker oneWay={false} roundWay={true} service="hotel" />
            </div>
            <TravelerSelect onSelect={handlePassenger} label={"Traveler, Class"} />
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
