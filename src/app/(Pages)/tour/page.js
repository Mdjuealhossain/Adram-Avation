"use client";
import Button from "@/components/Button";
import Container from "@/components/Container";
import SelectWithSearch from "@/components/Select";
import TourLists from "@/widget/TourLists";
import React, { useState } from "react";

const Tour = () => {
    const [selected, setSelected] = useState(tourLocations[0]); // Default selection for "From"

    return (
        <div>
            <section className=" bg-white pt-10 md:pt-20 mb-4 pb-4">
                <Container>
                    <div className=" flex items-center gap-4">
                        <SelectWithSearch options={tourLocations} location={true} label={"Location/ Tour"} menuClassName={" w-full"} selectedItem={selected} onSelect={setSelected} />
                        <Button size="large" className={"bg-warning_main font-semibold text-H4"}>
                            Modify
                            <br />
                            Search
                        </Button>
                    </div>
                </Container>
            </section>
            <section>
                <Container>
                    <TourLists />
                </Container>
            </section>
        </div>
    );
};

export default Tour;
const tourLocations = [
    { id: 1, name: "Resorts of Sundarbans" },
    { id: 2, name: "Cox's Bazar" },
    { id: 3, name: "Sundarbans" },
    { id: 4, name: "Bangkok 2 Nights and Pattaya 2 Nights (Tour Package Including Flight Tickets)" },
    { id: 5, name: "Sajek" },
    { id: 6, name: "Maldives" },
    { id: 7, name: "Rangamati" },
];
