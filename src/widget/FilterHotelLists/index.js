"use client";
import { useState } from "react";
import { Range } from "react-range";
import { IoClose, IoSearch } from "react-icons/io5";
import { useForm, Controller } from "react-hook-form";

import FilterCheckboxGroup from "@/components/FilterCheckboxGroup";
import StarRating from "@/components/StarRatimg";
import Button from "@/components/Button";
import PriceRangeFilter from "@/components/PrizeRange";

const FilterHotelLists = () => {
    const [selectedIds, setSelectIds] = useState([]);
    const [selectedTagsIds, setSelectTagsIds] = useState([]);
    const [selectedStars, setSelectedStars] = useState([]);

    const [search, setSearch] = useState("");

    const { control, reset, watch } = useForm({
        defaultValues: {
            priceRange: [1],
            isTime: [],
        },
    });
    const prize_range = {
        min: 27000,
        max: 38000,
    };

    const handleReset = () => {
        reset({
            priceRange: [1],
            isTime: [], // Reset time selections
        });
        setSelectIds([]);
        setSelectTagsIds([]);
    };

    const times = [
        { id: "1", time: "00-06" },
        { id: "2", time: "06-12" },
        { id: "3", time: "12-18" },
        { id: "4", time: "18-24" },
    ];

    return (
        <>
            <div className=" bg-white  ">
                <div className="border-b border-divider_2">
                    <p className="text-subtitle1 font-semibold text-info_main p-4">Filters</p>
                </div>
                <form className=" p-4 relative">
                    <FilterCheckboxGroup title="Popular Filters" options={filterOptions} selectedFilters={selectedIds} onSelect={setSelectIds} />
                    <div className="flex flex-col pb-4 border-b border-divider_2">
                        <label className="text-subtitle1 font-semibold text-info_main mb-2  pb-1">Property Name</label>
                        <div className="flex items-center border border-info_main rounded-md  overflow-hidden">
                            <input type="text" placeholder="Property Name" value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 px-3 py-2 w-8 outline-none text-body1 text-secondary  placeholder-gray-400" />

                            <button onClick={() => setSearch("")} type="button" className="p-2">
                                <IoClose className="h-4 w-4 text-gray-400" />
                            </button>

                            <button type="button" className="p-2  border-l">
                                <IoSearch className="h-4 w-4 text-gray-400" />
                            </button>
                        </div>
                    </div>
                    {/* Price Range Filter */}
                    <div className="py-4 border-b border-r-divider_2">
                        <PriceRangeFilter control={control} prize_range={prize_range} />
                    </div>

                    {/* <div className="border-b border-divider_2 py-4">
                        <p className="text-subtitle1 font-semibold text-info_main mb-2  pb-1">Price Range</p>
                        <Controller
                            className={""}
                            name="priceRange"
                            control={control}
                            render={({ field }) => (
                                <Range
                                    {...field}
                                    step={1.2}
                                    key={field.name}
                                    min={1}
                                    max={prize_range.max}
                                    values={field.value}
                                    onChange={(values) => field.onChange(values)}
                                    aria-labelledby="price-range-label"
                                    renderTrack={({ props, children }) => (
                                        <div
                                            {...props}
                                            style={{
                                                ...props.style,
                                                height: "4px",
                                                width: "100%",
                                                backgroundColor: "#dbdde0",
                                            }}
                                        >
                                            {children}
                                        </div>
                                    )}
                                    renderThumb={({ props }) => (
                                        <div
                                            {...props}
                                            key={props.key}
                                            style={{
                                                ...props.style,
                                                height: "14px",
                                                width: "14px",
                                                backgroundColor: "#00026e",
                                                borderRadius: "50%",
                                            }}
                                        />
                                    )}
                                />
                            )}
                        />
                        <div className="flex items-center justify-between text-info_main font-serif uppercase pt-4">
                            <p className="font-poppins">{`BDT ${prize_range.min}`}</p>
                            <p className="font-poppins">{`BDT ${prize_range.max ? prize_range.max : prize_range.min}`}</p>
                        </div>
                    </div> */}

                    {/* Duration Filter */}
                    <div className="py-4 border-b border-r-divider_2">
                        <FilterCheckboxGroup title="user rattings" options={userRatings} selectedFilters={selectedIds} onSelect={setSelectIds} />
                    </div>
                    <div className="py-4 border-b border-r-divider_2">
                        <StarRating selected={selectedStars} label={"Star Rating"} onSelect={setSelectedStars} options={starRatings} />
                    </div>
                    {/* Time Selection */}
                    {/* <div className="py-4 border-b border-divider_2">
                        <p className="text-subtitle1 font-semibold text-info_main pb-1">Time</p>
                        <div className=" grid grid-cols-4 border rounded">
                            {times.map((time) => (
                                <div key={time.id} onClick={() => handleTimeSelect(time.id)} className={`${isTime.includes(time.id) ? "bg-info_main text-white" : ""} py-1 xl:px-[14px]  cursor-pointer whitespace-nowrap border-r gap-1 border-divider_2 flex flex-col items-center justify-center`}>
                                    <MdOutlineLightMode className={`${isTime.includes(time.id) ? "text-white" : "text-info_light"}`} />
                                    <p className="text-[10px] font-light">{time.time}</p>
                                </div>
                            ))}
                        </div>
                    </div> */}

                    <div className="py-4 border-b border-r-divider_2">
                        <FilterCheckboxGroup options={filterTags} selectedFilters={selectedTagsIds} onSelect={setSelectTagsIds} title="Accommodation Type" />
                    </div>
                    <div className="py-4 border-b border-r-divider_2">
                        <FilterCheckboxGroup options={filterTags} selectedFilters={selectedTagsIds} onSelect={setSelectTagsIds} title="Amenities" />
                    </div>
                    <div className="py-4 border-b border-r-divider_2">
                        <FilterCheckboxGroup options={filterTags} selectedFilters={selectedTagsIds} onSelect={setSelectTagsIds} title="Neighbourhood" />
                    </div>
                    {/* Reset Button */}
                    <div className="py-4 fixed lg:relative top-[86%] md:top-[83%]  w-full flex items-center justify-center ">
                        <Button type="button" className="bg-warning_main text-info_main font-semibold w-full" onClick={handleReset}>
                            Reset Filter
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FilterHotelLists;

// Filter options for the duration
const filterOptions = [
    { id: "1", isChecked: true, label: "3 Star" },
    { id: "2", isChecked: false, label: "5 Star" },
    { id: "3", isChecked: false, label: "Hotel" },
    { id: "4", isChecked: false, label: "Breackfast" },
    { id: "5", isChecked: true, label: "2 Star" },
];

// Filter tags for the tags
const filterTags = [
    { id: "1", isChecked: false, label: "Family friendly" },
    { id: "2", isChecked: false, label: "Beach Activity" },
    { id: "3", isChecked: false, label: "Adventure" },
    { id: "4", isChecked: false, label: "Private Tour" },
    { id: "5", isChecked: false, label: "Family Packages" },
    { id: "6", isChecked: false, label: "Long Drive" },
    { id: "7", isChecked: false, label: "Nature" },
];

const userRatings = [
    { id: "1", isChecked: false, label: "1  Terrible" },
    { id: "2", isChecked: false, label: "1.5  Poor" },
    { id: "3", isChecked: false, label: "2  Poor" },
    { id: "4", isChecked: false, label: "2.5  Okay" },
    { id: "5", isChecked: false, label: "3  Okay" },
    { id: "6", isChecked: false, label: "3.5  Good" },
    { id: "7", isChecked: false, label: "4  Good" },
    { id: "8", isChecked: false, label: "4.5  Excellent" },
];
const starRatings = [
    { id: "1", label: "1" },
    { id: "2", label: "2" },
    { id: "3", label: "3" },
    { id: "4", label: "4" },
    { id: "5", label: "5" },
];
