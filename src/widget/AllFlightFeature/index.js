"use client";
import React from "react";

import FilteredDrawer from "@/components/FilteredDrawer";
import FilterFlightLists from "../FilterFlightLists";
import CountdownTimer from "../CountdownTimer";
import Button from "@/components/Button";
import FlightLists from "../FlightLists";
import useModal from "@/hooks/useModal";

const AllFlightFeature = () => {
    const { isOpen, openModal, closeModal } = useModal();

    return (
        <>
            <div className=" lg:hidden left-1/2 -translate-x-1/2 flex items-end justify-center  fixed bottom-[10%]">
                <Button onClick={openModal} className={"bg-warning_main text-info_main font-semibold  shadow-lg "}>
                    fiter
                </Button>
            </div>
            <div className=" hidden lg:block">
                <FilterFlightLists />
            </div>
            <div className=" grid grid-cols-4 mt-4">
                <div className=" col-span-3">
                    <FlightLists />
                </div>
                <CountdownTimer />
            </div>
            <FilteredDrawer isOpen={isOpen} close={closeModal} title="Showing 12 Flight Results">
                <FilterFlightLists isMobile />
            </FilteredDrawer>
        </>
    );
};

export default AllFlightFeature;
