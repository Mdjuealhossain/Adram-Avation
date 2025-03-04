"use client";
import Container from "@/components/Container";
import { Tab, Tabs } from "@/components/Tabs";
import React, { useState } from "react";
import { FaHotel, FaPlane } from "react-icons/fa";
import { MdTour } from "react-icons/md";
import { FaCcVisa } from "react-icons/fa6";
import Flight from "../Flight";

const HerroBanner = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(1);

    const tabs = [
        {
            id: "1",
            label: "Flight",
            icon: <FaPlane />,
        },
        {
            id: "2",
            label: "Hotel",
            icon: <FaHotel />,
        },
        {
            id: "3",
            label: "Tour",
            icon: <MdTour />,
        },
        {
            id: "4",
            label: "Visa",
            icon: <FaCcVisa />,
        },
    ];

    return (
        <div style={{ backgroundImage: "url('/assets/images/banner.jpg')" }} className="bg-cover bg-center h-[650px] flex items-center justify-center">
            <Container className={" relative"}>
                <div className="bg-white shadow-tabs md:px-[60px] px-10 rounded-lg z-10 absolute left-1/2 -translate-x-1/2 -top-12 flex items-center">
                    {tabs.map((tab) => (
                        <Tab key={tab.id} isActive={activeTabIndex == tab.id} onClick={() => setActiveTabIndex(tab.id)} label={tab.label} icon={tab.icon} />
                    ))}
                </div>
                <div className=" md:px-[30px] md:pt-[50px] md:pb-10 pt-10 px-4 pb-6 bg-white relative shadow-service rounded-[20px]">{activeTabIndex == "1" && <Flight />}</div>
            </Container>
        </div>
    );
};

export default HerroBanner;
