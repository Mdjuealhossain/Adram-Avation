import React from "react";

import AllFlightFeature from "@/widget/AllFlightFeature";
import Container from "@/components/Container";
import FlightService from "@/widget/Flight";
import Button from "@/components/Button";

const Flight = () => {
    return (
        <div>
            <section className=" bg-white pt-20 md:pt-24 mb-4 pb-4">
                <Container>
                    <div className=" flex flex-col lg:flex-row items-end gap-4">
                        <FlightService />
                        <Button size="large" className={"bg-warning_main !py-[14px] mb-1 w-full lg:w-auto font-semibold text-info_main text-H4"}>
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
                    <AllFlightFeature />
                </Container>
            </section>
        </div>
    );
};

export default Flight;
