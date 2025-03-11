"use client";
import SelectWithSearch from "@/components/Select";
import React, { useState } from "react";

const TourService = () => {
    const [selected, setSelected] = useState(tourLocations[0]); // Default selection for "From"
    return <SelectWithSearch options={tourLocations} location={true} label={"Location/ Tour"} menuClassName={" w-full"} selectedItem={selected} onSelect={setSelected} />;
};

export default TourService;
const tourLocations = [
    { id: 1, name: "Resorts of Sundarbans" },
    { id: 2, name: "Cox's Bazar" },
    { id: 3, name: "Sundarbans" },
    { id: 4, name: "Bangkok 2 Nights and Pattaya 2 Nights (Tour Package Including Flight Tickets)" },
    { id: 5, name: "Sajek" },
    { id: 6, name: "Maldives" },
    { id: 7, name: "Rangamati" },
];
