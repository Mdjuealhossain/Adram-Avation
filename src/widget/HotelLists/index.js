"use client";
import Card from "@/components/Card";
import Offer from "@/components/Offer";
import SearchSelect from "@/components/SearchSelect";
import React, { useState } from "react";

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
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

export default HotelLists;

const cardsData = [
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Honeymoon at Cox's Baza  the beginning of the experience/tour beginning of the experience/tour",
        location: "Cox's Bazar",
        duration: "3 day's",
        groupSize: "From 2 to 6 people",
        description: "80% of the fees will be days before the beginning of the experience/tour. beginning of the experience/tour",
        price: "23000",
        discount: "6%",
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
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Amazing Tour to the Mountains",
        location: "Mountains",
        duration: "5 days",
        groupSize: "From 3 to 7 people",
        description: "Experience the thrill of the mountains.",
        price: "27000",
        discount: "10%",
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Beach Vacation in Bali",
        location: "Bali",
        duration: "7 days",
        groupSize: "From 2 to 4 people",
        description: "Relax on the beautiful beaches of Bali with all-inclusive packages.",
        price: "15000",
        discount: "15%",
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Adventure Tour in the Amazon",
        location: "Amazon Rainforest",
        duration: "6 days",
        groupSize: "From 4 to 10 people",
        description: "Explore the exotic Amazon Rainforest with guided tours.",
        price: "35000",
        discount: "5%",
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Safari Adventure in Kenya",
        location: "Kenya",
        duration: "5 days",
        groupSize: "From 3 to 8 people",
        description: "Experience the wild with a safari tour in Kenya's national parks.",
        price: "42000",
        discount: null,
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Romantic Getaway to Paris",
        location: "Paris",
        duration: "4 days",
        groupSize: "Couples Only",
        description: "Fall in love all over again with a romantic getaway in Paris.",
        price: "30000",
        discount: "8%",
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Cultural Tour in India",
        location: "India",
        duration: "10 days",
        groupSize: "From 2 to 6 people",
        description: "Discover India's rich culture with this 10-day guided tour.",
        price: "25000",
        discount: null,
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Skiing Adventure in Switzerland",
        location: "Switzerland",
        duration: "7 days",
        groupSize: "From 2 to 5 people",
        description: "Ski in the Swiss Alps with this all-inclusive package.",
        price: "55000",
        discount: "12%",
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Scenic Road Trip in New Zealand",
        location: "New Zealand",
        duration: "8 days",
        groupSize: "From 3 to 7 people",
        description: "Enjoy a road trip through New Zealand’s breathtaking scenery.",
        price: "35000",
        discount: null,
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Explore the Wonders of Egypt",
        location: "Egypt",
        duration: "9 days",
        groupSize: "From 1 to 8 people",
        description: "See the ancient wonders of Egypt, from pyramids to temples.",
        price: "40000",
        discount: "20%",
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Luxury Tour of Italy",
        location: "Italy",
        duration: "6 days",
        groupSize: "From 2 to 4 people",
        description: "Experience Italy in style with luxury tours of Rome, Venice, and more.",
        price: "60000",
        discount: "10%",
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Trekking in the Himalayas",
        location: "Nepal",
        duration: "14 days",
        groupSize: "From 4 to 12 people",
        description: "Challenge yourself with a trek through the Himalayan mountains.",
        price: "50000",
        discount: "5%",
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Island Hopping in Greece",
        location: "Greece",
        duration: "7 days",
        groupSize: "From 2 to 6 people",
        description: "Explore the beautiful Greek islands with island-hopping tours.",
        price: "33000",
        discount: null,
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Northern Lights Tour in Iceland",
        location: "Iceland",
        duration: "5 days",
        groupSize: "From 2 to 5 people",
        description: "Witness the spectacular Northern Lights in Iceland.",
        price: "45000",
        discount: "18%",
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Ancient Ruins of Mexico",
        location: "Mexico",
        duration: "6 days",
        groupSize: "From 3 to 7 people",
        description: "Explore ancient ruins and beaches in Mexico.",
        price: "28000",
        discount: "7%",
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Luxury Cruise in the Caribbean",
        location: "Caribbean",
        duration: "10 days",
        groupSize: "From 2 to 8 people",
        description: "Set sail on a luxury cruise across the beautiful Caribbean islands.",
        price: "75000",
        discount: "3%",
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Cultural Tour in Japan",
        location: "Japan",
        duration: "8 days",
        groupSize: "From 2 to 6 people",
        description: "Discover Japan's culture, from traditional temples to modern cities.",
        price: "35000",
        discount: "5%",
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "City Tour in Dubai",
        location: "Dubai",
        duration: "4 days",
        groupSize: "From 1 to 5 people",
        description: "Tour the most iconi dmarks in Dubai.",
        price: "20000",
        discount: null,
    },
    {
        image: "/assets/images/tour/tour.jpg",
        title: "Backpacking in Southeast Asia",
        location: "Southeast Asia",
        duration: "20 days",
        groupSize: "From 1 to 8 people",
        description: "Experience the best of Southeast Asia with a 20-day backpacking adventure.",
        price: "40000",
        discount: "10%",
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
    },
];
