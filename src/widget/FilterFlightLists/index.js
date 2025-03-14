"use client";
import { useEffect, useState } from "react";
import { MdOutlineBrightness7, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { BsCheckSquareFill } from "react-icons/bs";
import { useForm } from "react-hook-form";

import PriceRangeFilter from "@/components/PrizeRange";
import TimeFilter from "@/components/TimeFilter";
import StarRating from "@/components/StarRatimg";
import FilterCheckboxGroup from "@/components/FilterCheckboxGroup";
import Button from "@/components/Button";
import useModal from "@/hooks/useModal";

const FilterFlightLists = ({ isMobile = false }) => {
    const [selectedStars, setSelectedStars] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [selectedTagsIds, setSelectTagsIds] = useState([]);
    const [collaps, setCollaps] = useState("more");
    const { isOpen, openModal, closeModal } = useModal();

    // Function to handle checkbox state change
    const handleFilterChange = () => {
        setIsChecked(!isChecked); // Toggle the checkbox state
    };
    const { control, reset, watch, setValue } = useForm({
        defaultValues: {
            priceRange: [1],
            isTime: [],
            layover: [],
        },
    });

    const isTime = watch("isTime");
    const layover = watch("layover");

    console.log("layover", layover);

    // Handle Time Select
    const handleTimeSelect = (timeId) => {
        const currentTimes = watch("isTime");
        const updatedTimes = currentTimes.includes(timeId)
            ? currentTimes.filter((id) => id !== timeId) // Remove if already selected
            : [...currentTimes, timeId]; // Add if not selected

        setValue("isTime", updatedTimes);
    };
    // Handle Time Select
    const handleLayoverSelect = (timeId) => {
        const currentTimes = watch("layover");
        const updatedTimes = currentTimes.includes(timeId)
            ? currentTimes.filter((id) => id !== timeId) // Remove if already selected
            : [...currentTimes, timeId]; // Add if not selected

        setValue("layover", updatedTimes);
    };

    const prize_range = {
        min: 27000,
        max: 38000,
    };

    const handleReset = () => {
        reset({
            priceRange: [1],
            isTime: [],
            layover: [],
        });
        setSelectTagsIds([]);
        setSelectedStars([]);
        setIsChecked(false);
    };
    const priceRange = watch("priceRange");
    useEffect(() => {
        console.log("Price Range Changed:", priceRange);
    }, [priceRange]);

    return (
        <div className=" bg-white  lg:shadow-flight_p">
            <div className={`px-6 py-3 ${isMobile ? " hidden" : " block"}`}>
                <div className={`${isOpen ? "hidden" : "flex"} items-center gap-8`}>
                    <div className=" flex items-center gap-2 text-info_main">
                        <FaFilter />
                        <p className=" font-semibold ">Filters</p>
                    </div>
                    <StarRating service="flight" label={"stops"} selected={selectedStars} onSelect={setSelectedStars} options={starRatings} />
                    <div className=" flex items-center gap-6">
                        <label className={`text-body1 cursor-pointer font-light  text-secondary gap-1 flex items-center`}>
                            <input
                                type="checkbox"
                                className={`form-checkbox hidden h-5 w-5 rounded border-gray-300 focus:ring-blue-500`}
                                checked={isChecked}
                                onChange={handleFilterChange} // Update state on checkbox toggle
                            />
                            <div className=" h-5 w-5 ">{isChecked ? <BsCheckSquareFill size={18} className="shadow-md text-info_main" /> : <div className=" h-[18px] w-[18px] border border-black/50 rounded-[3px] shadow-md"></div>}</div>
                            <span className=" capitalize">{"partially refoundable"}</span>
                        </label>
                        <div
                            onClick={() => {
                                openModal();
                                setCollaps("layover");
                            }}
                            className=" text-body1 cursor-pointer font-light text-secondary gap-1 flex items-center"
                        >
                            Layover Time <IoIosArrowDown />
                        </div>
                        <div
                            onClick={() => {
                                openModal();
                                setCollaps("depart");
                            }}
                            className=" text-body1 cursor-pointer font-light text-secondary gap-1 flex items-center"
                        >
                            Depart Time <IoIosArrowDown />
                        </div>
                        <div
                            onClick={() => {
                                openModal();
                                setCollaps("airlines");
                            }}
                            className=" text-body1 cursor-pointer font-light text-secondary gap-1 flex items-center"
                        >
                            Airlines <IoIosArrowDown />
                        </div>
                        <div
                            onClick={() => {
                                openModal();
                                setCollaps("more");
                            }}
                            className=" text-body1 cursor-pointer font-light text-success_light gap-1 flex items-center"
                        >
                            More Filters <IoIosArrowDown />
                        </div>
                    </div>
                </div>
                <div className={`flex items-center gap-8 justify-between ${!isOpen ? "hidden" : "flex"}`}>
                    <p className=" font-semibold text-info_main ">Showing 6 Flight Results</p>
                    <div className=" flex items-center">
                        <Button onClick={closeModal} size="small" className={" !border-info_main text-info_main !text-body2"}>
                            close
                        </Button>
                        <Button size="small" type="button" className={"  text-info_main !text-body2"} onClick={handleReset}>
                            reset all filters
                        </Button>
                    </div>
                </div>
            </div>

            <div
                className={`
        transition-[max-height] duration-300 ease-in-out overflow-hidden 
        ${isOpen || isMobile ? "max-h-screen" : "max-h-0"}`}
            >
                <div className={`px-6 pb-5 pt-10 border-t-2 border-divider_2 grid lg:gap-12 gap-6 sm:grid-cols-3  lg:grid-cols-4`}>
                    <div className=" flex flex-col gap-4">
                        <StarRating service="flight" label={"stops"} selected={selectedStars} onSelect={setSelectedStars} options={starRatings} />
                        <div>
                            <p className=" font-semibold text-info_main mb-2">Fare Type:</p>

                            <label className={`text-body1 cursor-pointer font-light  text-secondary gap-1 flex items-center`}>
                                <input
                                    type="checkbox"
                                    className={`form-checkbox hidden h-5 w-5 rounded border-gray-300 focus:ring-blue-500`}
                                    checked={isChecked}
                                    onChange={handleFilterChange} // Update state on checkbox toggle
                                />
                                <div className=" h-5 w-5 ">{isChecked ? <BsCheckSquareFill size={18} className="shadow-md text-info_main" /> : <div className=" h-[18px] w-[18px] border border-black/50 rounded-[3px] shadow-md"></div>}</div>
                                <span className=" capitalize">{"partially refoundable"}</span>
                            </label>
                        </div>
                        {/* Reusable Price Range Filter */}
                        <PriceRangeFilter control={control} prize_range={prize_range} />
                    </div>
                    <div className=" col-span-2 flex flex-col sm:items-center lg:justify-center gap-6">
                        <div className="flex flex-col gap-6">
                            <p className=" font-semibold text-info_main">Schedule</p>
                            <div>
                                <TimeFilter times={times} isTime={isTime} handleTimeSelect={handleTimeSelect} label={"Onward Depart Time"} labelClassName={`${collaps == "depart" ? "bg-info_deep_light" : " bg-transparent text-secondary !font-light"}  !text-body1  !p-0.5 rounded `} itemClassName={" !py-2 !text-body2"} />
                            </div>
                            <div>
                                <TimeFilter times={layoverTime} isTime={layover} handleTimeSelect={handleLayoverSelect} label={"Layover Time"} labelClassName={`${collaps == "layover" ? "bg-info_deep_light" : " bg-transparent text-secondary !font-light"}  !text-body1  !p-0.5 rounded `} itemClassName={" !py-2 !text-body2"} />
                            </div>
                        </div>
                    </div>
                    <FilterCheckboxGroup options={filterTags} selectedFilters={selectedTagsIds} onSelect={setSelectTagsIds} title="Airlines" labelClass={`${collaps == "airlines" ? "bg-info_deep_light" : "bg-transparent"} !p-0.5 !mb-4`} itemClass={""} />
                </div>
                <div className="py-4 fixed lg:relative top-[85%] md:top-[80%] mx-6 lg:hidden  w-full flex items-center justify-center ">
                    <Button type="button" className="bg-warning_main text-info_main font-semibold w-full" onClick={handleReset}>
                        Reset Filter
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FilterFlightLists;

const starRatings = [
    { id: "1", label: "0" },
    { id: "2", label: "1" },
    { id: "3", label: "2" },
];
const times = [
    { id: "1", time: "00-06", icon: MdOutlineLightMode },
    { id: "2", time: "06-12", icon: MdOutlineLightMode },
    { id: "3", time: "12-18", icon: MdOutlineBrightness7 },
    { id: "4", time: "18-24", icon: MdOutlineDarkMode },
];
const layoverTime = [
    { id: "1", time: "0h-6h" },
    { id: "2", time: "6h-12h" },
    { id: "3", time: "12h-18h" },
    { id: "4", time: "18h-24h" },
];
const filterTags = [
    { id: "1", isChecked: false, label: "Air Astra" },
    { id: "2", isChecked: false, label: "Biman Bangladesh Airlines" },
    { id: "3", isChecked: false, label: "US Bangla" },
    { id: "4", isChecked: false, label: "NOVOAIR" },
];
