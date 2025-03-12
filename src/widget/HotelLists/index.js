"use client";
import { useState } from "react";

import HotelCard from "@/components/HotelCard";
import SearchSelect from "@/components/SearchSelect";

const HotelLists = () => {
    const options = ["Popularity", "Price", "Rating", "Newest"];
    const [selectedOption, setSelectedOption] = useState(options[0]); // Default to the first option

    console.log("selectedOption", selectedOption);

    return (
        <div>
            <div className=" mb-4 flex items-center justify-between">
                <p className=" text-subtitle1 font-semibold text-secondary">64 properties found</p>
                <div className=" w-48">
                    <SearchSelect options={options} select={selectedOption} onSelect={setSelectedOption} />
                </div>
            </div>
            <div className=" flex flex-col gap-3">
                {cardsData.map((card, index) => (
                    <HotelCard key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

export default HotelLists;

const cardsData = [
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Honeymoon at Cox's Bazar",
        location: "Cox's Bazar",
        duration: "3 days",
        groupSize: "From 2 to 6 people",
        description: "80% of the fees will be days before the beginning of the experience/tour.",
        price: "23000",
        discount: "6%",
        startText: "Starts from",
        startingPrice: "BDT 7,906",
        roomDetails: "for 1 Night, per room",
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Another Tour Package",
        location: "Location",
        duration: "4 days",
        groupSize: "From 1 to 5 people",
        description: "Description here.",
        price: "20000",
        discount: null,
        startText: "Starts from",
        startingPrice: "BDT 6,000",
        roomDetails: "for 1 Night, per room",
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Jungle Safari in India",
        location: "India",
        duration: "5 days",
        groupSize: "From 3 to 6 people",
        description: "Explore the wildlife of India on a jungle safari.",
        price: "22000",
        discount: null,
        startText: "Starts from",
        startingPrice: "BDT 5,500",
        roomDetails: "for 1 Night, per room",
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Cultural Tour of Japan",
        location: "Japan",
        duration: "7 days",
        groupSize: "From 1 to 10 people",
        description: "Experience the rich culture of Japan, including temples and festivals.",
        price: "30000",
        discount: "10%",
        startText: "Starts from",
        startingPrice: "BDT 27,000",
        roomDetails: "for 1 Night, per room",
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Adventure in the Swiss Alps",
        location: "Switzerland",
        duration: "5 days",
        groupSize: "From 2 to 4 people",
        description: "A thrilling adventure through the breathtaking Swiss Alps.",
        price: "50000",
        discount: "15%",
        startText: "Starts from",
        startingPrice: "BDT 42,500",
        roomDetails: "for 1 Night, per room",
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Beach Vacation in Maldives",
        location: "Maldives",
        duration: "6 days",
        groupSize: "From 2 to 6 people",
        description: "A relaxing beach vacation in the tropical Maldives.",
        price: "75000",
        discount: null,
        startText: "Starts from",
        startingPrice: "BDT 70,000",
        roomDetails: "for 1 Night, per room",
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Safari in Kenya",
        location: "Kenya",
        duration: "8 days",
        groupSize: "From 1 to 8 people",
        description: "Discover the wildlife of Africa on a thrilling safari.",
        price: "65000",
        discount: "5%",
        startText: "Starts from",
        startingPrice: "BDT 62,000",
        roomDetails: "for 1 Night, per room",
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Historical Tour of Egypt",
        location: "Egypt",
        duration: "10 days",
        groupSize: "From 2 to 10 people",
        description: "Explore the ancient wonders of Egypt, including the pyramids.",
        price: "90000",
        discount: null,
        startText: "Starts from",
        startingPrice: "BDT 85,000",
        roomDetails: "for 1 Night, per room",
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Scenic Road Trip through Australia",
        location: "Australia",
        duration: "14 days",
        groupSize: "From 1 to 4 people",
        description: "Experience the beauty of Australia on a scenic road trip.",
        price: "120000",
        discount: "8%",
        startText: "Starts from",
        startingPrice: "BDT 110,000",
        roomDetails: "for 1 Night, per room",
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "European City Tour",
        location: "Europe",
        duration: "12 days",
        groupSize: "From 1 to 10 people",
        description: "Visit famous cities in Europe and experience their culture.",
        price: "150000",
        discount: null,
        startText: "Starts from",
        startingPrice: "BDT 140,000",
        roomDetails: "for 1 Night, per room",
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Mediterranean Cruise",
        location: "Mediterranean Sea",
        duration: "7 days",
        groupSize: "From 2 to 4 people",
        description: "Cruise the beautiful Mediterranean Sea visiting stunning islands.",
        price: "80000",
        discount: "10%",
        startText: "Starts from",
        startingPrice: "BDT 72,000",
        roomDetails: "for 1 Night, per room",
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Safari Adventure in Tanzania",
        location: "Tanzania",
        duration: "6 days",
        groupSize: "From 2 to 6 people",
        description: "Experience the wonders of the Serengeti on a safari.",
        price: "75000",
        discount: null,
        startText: "Starts from",
        startingPrice: "BDT 70,000",
        roomDetails: "for 1 Night, per room",
    },
];
