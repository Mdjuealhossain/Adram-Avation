"use client";
import Container from "@/components/Container";
import { Tab, Tabs } from "@/components/Tabs";
import React, { useState } from "react";
import { FaHotel, FaPlane } from "react-icons/fa";
import { MdTour } from "react-icons/md";
import { FaCcVisa } from "react-icons/fa6";
import FlightService from "../Flight";
import HotelSerice from "../Hotel";
import TourService from "../Tour";
import VisaService from "../Visa";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const HerroBanner = () => {
    const [activeTabIndex, setActiveTabIndex] = useState("1");
    const router = useRouter();

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

    const handleTab = (tab) => {
        setActiveTabIndex(tab.id);
        if (typeof window !== "undefined") {
            router.push(`/?search=${tab.label.toLowerCase()}`, { shallow: true });
        }
    };

    const onSubmite = () => {
        if (activeTabIndex == "1") {
            router.push(`/flight`);
        }
        if (activeTabIndex == "2") {
            router.push(`/hotel`);
        }
        if (activeTabIndex == "3") {
            router.push(`/tour`);
        }
        if (activeTabIndex == "4") {
            router.push(`/visa`);
        }
    };

    return (
        <div style={{ backgroundImage: "url('/assets/images/banner.jpg')" }} className="bg-cover bg-center h-[650px] flex items-center justify-center">
            <Container className={" relative"}>
                <div className="bg-white shadow-tabs md:px-[60px] px-10 rounded-lg z-10 absolute left-1/2 -translate-x-1/2 -top-12 flex items-center">
                    {tabs.map((tab) => (
                        <Tab
                            key={tab.id}
                            isActive={activeTabIndex == tab.id}
                            onClick={() => {
                                setActiveTabIndex(tab.id);
                                router.push(`/?search=${tab.label.toLowerCase()}`, { shallow: true });
                            }}
                            label={tab.label}
                            icon={tab.icon}
                        />
                    ))}
                </div>
                <div className=" md:px-[30px] md:pt-[50px] md:pb-10 pt-10 px-4 pb-6 bg-white relative shadow-service rounded-[20px]">
                    {activeTabIndex == "1" && <FlightService />}
                    {activeTabIndex == "2" && <HotelSerice isSearchFor={true} />}
                    {activeTabIndex == "3" && <TourService />}
                    {activeTabIndex == "4" && <VisaService />}
                    <form className=" relative">
                        <Button onClick={onSubmite} size="large" className={" bg-warning_main text-info_main !text-H4 font-semibold absolute top-3 left-1/2 -translate-x-1/2"}>
                            search
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default HerroBanner;
