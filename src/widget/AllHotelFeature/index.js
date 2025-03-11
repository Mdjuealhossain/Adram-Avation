import React from "react";

import "react-modern-drawer/dist/index.css";
import useModal from "@/hooks/useModal";
import Button from "@/components/Button";
import FilteredDrawer from "@/components/FilteredDrawer";
import FilterHotelLists from "../FilterHotelLists";
import HotelLists from "../HotelLists";

const AllHotelFeature = () => {
    const { isOpen, openModal, closeModal } = useModal();

    return (
        <>
            <div className=" lg:hidden left-1/2 -translate-x-1/2 flex items-end justify-center  fixed bottom-[10%]">
                <Button onClick={openModal} className={"bg-warning_main text-info_main font-semibold  shadow-lg "}>
                    fiter
                </Button>
            </div>
            <div className=" lg:grid lg:grid-cols-4 gap-6">
                <div className=" hidden lg:block">
                    <div className=" px-4 flex items-center justify-center mb-4 py-8 bg-primary_light/60 rounded-md">
                        <Button className={" bg-info_main text-white"}>View Hotels in Map</Button>
                    </div>
                    <FilterHotelLists />
                </div>
                <div className=" md:col-span-3">
                    <HotelLists />
                </div>
            </div>
            <FilteredDrawer isOpen={isOpen} close={closeModal} title="Destination: 1 place found">
                <FilterHotelLists />
            </FilteredDrawer>
        </>
    );
};

export default AllHotelFeature;
