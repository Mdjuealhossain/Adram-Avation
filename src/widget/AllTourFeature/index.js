import React from "react";
import FilterTourLists from "../FilterTourLists";
import TourLists from "../TourLists";
const Drawer = dynamic(() => import("react-modern-drawer"), { ssr: false });
import "react-modern-drawer/dist/index.css";
import useModal from "@/hooks/useModal";
import dynamic from "next/dynamic";
import Button from "@/components/Button";
import { IoClose } from "react-icons/io5";

const AllTourFeature = () => {
    const { isOpen, openModal, closeModal } = useModal();

    return (
        <>
            <div className=" relative lg:hidden">
                <Button onClick={openModal} className={"bg-warning_main text-info_main font-semibold fixed right-1/2  bottom-[10%] shadow-lg "}>
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
            <Drawer open={isOpen} onClose={closeModal} direction={"bottom"} className="!w-full !top-20 !overflow-hidden !bg-white !h-full rounded-t-xl">
                <div className=" relative">
                    <span onClick={closeModal} className=" p-2 rounded-full bg-secondary/50 absolute right-4 top-4 ">
                        <IoClose className=" text-white" />
                    </span>
                </div>
                <FilterTourLists />
            </Drawer>
        </>
    );
};

export default AllTourFeature;
