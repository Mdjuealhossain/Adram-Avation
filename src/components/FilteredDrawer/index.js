import React from "react";
const Drawer = dynamic(() => import("react-modern-drawer"), { ssr: false });
import "react-modern-drawer/dist/index.css";
import dynamic from "next/dynamic";
import { IoClose } from "react-icons/io5";
import FilterTourLists from "@/widget/FilterTourLists";

const FilteredDrawer = ({ title, children, isOpen, close }) => {
    return (
        <Drawer open={isOpen} onClose={close} direction={"bottom"} className="!w-full md:!top-20 top-16 !overflow-hidden !bg-white !h-full rounded-t-xl">
            <div className=" bg-white  ">
                <div className=" flex items-center justify-between p-4 border-b border-divider_2">
                    <p className="text-subtitle1 font-semibold text-info_main">{title}</p>

                    <span onClick={close} className=" p-1 rounded-full bg-secondary/50 ">
                        <IoClose className=" text-white" />
                    </span>
                </div>
            </div>
            <div className="overflow-y-auto lg:overflow-hidden h-[calc(100vh-175px)] md:h-[calc(100vh-230px)] lg:h-auto">{children}</div>
        </Drawer>
    );
};

export default FilteredDrawer;
