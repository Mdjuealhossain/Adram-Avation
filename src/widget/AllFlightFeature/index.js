"use client";
import React from "react";

import FilteredDrawer from "@/components/FilteredDrawer";
import FilterFlightLists from "../FilterFlightLists";
import Button from "@/components/Button";
import useModal from "@/hooks/useModal";
import "react-modern-drawer/dist/index.css";

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
            <div className=" md:col-span-3">{/* <TourLists /> */}</div>
            <FilteredDrawer isOpen={isOpen} close={closeModal} title="Showing 12 Flight Results">
                <FilterFlightLists isMobile />
            </FilteredDrawer>
        </>
    );
};

export default AllFlightFeature;
