"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Container from "@/components/Container";
import { Tab } from "@/components/Tabs";
import Button from "@/components/Button";
import { FaHotel, FaPlane } from "react-icons/fa";
import { MdTour } from "react-icons/md";
import { FaCcVisa } from "react-icons/fa6";
import FlightService from "../Flight";
import HotelService from "../Hotel";
import TourService from "../Tour";
import VisaService from "../Visa";

const HeroBanner = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [activeTabIndex, setActiveTabIndex] = useState("flight");

    useEffect(() => {
        const searchParam = searchParams.get("search") || "flight";
        setActiveTabIndex(searchParam);
    }, [searchParams]);
    // const activeTabIndex = searchParams.get("search") || "flight"; // Default to "flight"

    const tabs = [
        { id: "flight", label: "Flight", icon: <FaPlane /> },
        { id: "hotel", label: "Hotel", icon: <FaHotel /> },
        { id: "tour", label: "Tour", icon: <MdTour /> },
        { id: "visa", label: "Visa", icon: <FaCcVisa /> },
    ];

    const handleTab = useCallback(
        (tab) => {
            router.push(`/?search=${tab.id}`, { shallow: true });
        },
        [router]
    );

    const onSubmit = useCallback(() => {
        router.push(`/${activeTabIndex}`);
    }, [activeTabIndex, router]);

    return (
        <div style={{ backgroundImage: "url('/assets/images/banner.jpg')" }} className="bg-cover bg-center h-[650px] flex items-center justify-center">
            <Container className="relative">
                {/* Tabs */}
                <div className="bg-white shadow-tabs md:px-[60px] px-10 rounded-lg z-10 absolute left-1/2 -translate-x-1/2 -top-12 flex items-center">
                    {tabs.map((tab) => (
                        <Tab key={tab.id} isActive={activeTabIndex === tab.id} onClick={() => handleTab(tab)} label={tab.label} icon={tab.icon} />
                    ))}
                </div>

                {/* Content */}
                <div className="md:px-[30px] md:pt-[50px] md:pb-10 pt-10 px-4 pb-6 bg-white relative shadow-service rounded-[20px]">
                    {activeTabIndex === "flight" && <FlightService />}
                    {activeTabIndex === "hotel" && <HotelService isSearchFor />}
                    {activeTabIndex === "tour" && <TourService />}
                    {activeTabIndex === "visa" && <VisaService />}

                    {/* Search Button */}
                    <form className="relative">
                        <Button onClick={onSubmit} size="large" className="bg-warning_main text-info_main !text-H4 font-semibold absolute top-3 left-1/2 -translate-x-1/2">
                            Search
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default HeroBanner;
