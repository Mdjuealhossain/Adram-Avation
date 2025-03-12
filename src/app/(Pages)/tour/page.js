"use client";
import { useState } from "react";

import AllTourFeature from "@/widget/AllTourFeature";
import SelectWithSearch from "@/components/Select";
import Container from "@/components/Container";
import Button from "@/components/Button";

const Tour = () => {
    const [selected, setSelected] = useState(tourLocations[0]);

    return (
        <div>
            <section className=" bg-white pt-20 md:pt-24 mb-4 pb-4">
                <Container>
                    <div className=" flex flex-col lg:flex-row items-center gap-4">
                        <SelectWithSearch options={tourLocations} location={true} label={"Location/ Tour"} menuClassName={" w-full"} selectedItem={selected} onSelect={setSelected} />
                        <Button size="large" className={"bg-warning_main w-full lg:w-auto font-semibold text-info_main text-H4"}>
                            Modify
                            <br className=" hidden lg:inline" />
                            Search
                        </Button>
                    </div>
                </Container>
            </section>
            <section>
                <Container>
                    <AllTourFeature />
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
