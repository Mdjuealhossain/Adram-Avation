import React from "react";
import FilterTourLists from "../FilterTourLists";
import TourLists from "../TourLists";
const Drawer = dynamic(() => import("react-modern-drawer"), { ssr: false });
import "react-modern-drawer/dist/index.css";
import useModal from "@/hooks/useModal";
import dynamic from "next/dynamic";
import Button from "@/components/Button";
import { IoClose } from "react-icons/io5";
import FilteredDrawer from "@/components/FilteredDrawer";

const AllTourFeature = () => {
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
                    <FilterTourLists />
                </div>
                <div className=" md:col-span-3">
                    <TourLists />
                </div>
            </div>
            <FilteredDrawer isOpen={isOpen} close={closeModal} title="Destination: 1 place found">
                <FilterTourLists />
            </FilteredDrawer>
        </>
    );
};

export default AllTourFeature;
