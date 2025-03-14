"use client";
import React from "react";

import Button from "@/components/Button";
import Container from "@/components/Container";
import AllHotelFeature from "@/widget/AllHotelFeature";
import HotelSerice from "@/widget/Hotel";

const Hotel = () => {
    return (
        <div>
            <section className=" bg-white pt-20 md:pt-24 mb-4 pb-4">
                <Container>
                    <div className=" flex flex-col lg:flex-row items-center gap-4">
                        <HotelSerice isSearchFor={false} />
                        <Button size="large" className={"bg-warning_main w-full lg:w-auto font-semibold text-info_main text-H4"}>
                            <span className=" hidden lg:inline">
                                Modify <br /> Search
                            </span>
                            <span className="  lg:hidden">Modify Search</span>
                        </Button>
                    </div>
                </Container>
            </section>
            <section>
                <Container>
                    <AllHotelFeature />
                </Container>
            </section>
        </div>
    );
};

export default Hotel;
const tourLocations = [
    { id: 1, name: "Resorts of Sundarbans" },
    { id: 2, name: "Cox's Bazar" },
    { id: 3, name: "Sundarbans" },
    { id: 4, name: "Bangkok 2 Nights and Pattaya 2 Nights (Tour Package Including Flight Tickets)" },
    { id: 5, name: "Sajek" },
    { id: 6, name: "Maldives" },
    { id: 7, name: "Rangamati" },
];
