"use client";
import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { Range } from "react-range";
import { useForm, Controller } from "react-hook-form";

import FilterCheckboxGroup from "@/components/FilterCheckboxGroup";
import Button from "@/components/Button";

const FilterTourLists = () => {
    const [selectedIds, setSelectIds] = useState([]);
    const [selectedTagsIds, setSelectTagsIds] = useState([]);

    const { control, watch, reset, setValue } = useForm({
        defaultValues: {
            priceRange: [1],
            isTime: [],
        },
    });
    const prize_range = {
        min: 27000,
        max: 38000,
    };

    const isTime = watch("isTime");
    // Handle Time Select
    const handleTimeSelect = (timeId) => {
        const currentTimes = watch("isTime");
        const updatedTimes = currentTimes.includes(timeId)
            ? currentTimes.filter((id) => id !== timeId) // Remove if already selected
            : [...currentTimes, timeId]; // Add if not selected

        setValue("isTime", updatedTimes);
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
                    <p className="text-subtitle1 font-semibold text-info_main p-4 hidden lg:block">Destination: 1 place found</p>

                    <p className="text-subtitle1 font-semibold text-info_main p-4">Filter By</p>
                </div>
                <form className=" p-4 relative">
                    {/* Price Range Filter */}
                    <div className="border-b border-divider_2 ">
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
                        <div className="flex items-center justify-between text-info_main font-serif uppercase py-4">
                            <p className="font-poppins">{`BDT ${prize_range.min}`}</p>
                            <p className="font-poppins">{`BDT ${prize_range.max ? prize_range.max : prize_range.min}`}</p>
                        </div>
                    </div>

                    {/* Duration Filter */}
                    <div className=" py-4 border-b border-divider_2">
                        <FilterCheckboxGroup title="Duration" options={filterOptions} selectedFilters={selectedIds} onSelect={setSelectIds} />
                    </div>
                    {/* Time Selection */}
                    <div className="py-4 border-b border-divider_2">
                        <p className="text-subtitle1 font-semibold text-info_main pb-1">Time</p>
                        <div className=" grid grid-cols-4 border rounded">
                            {times.map((time) => (
                                <div key={time.id} onClick={() => handleTimeSelect(time.id)} className={`${isTime.includes(time.id) ? "bg-info_main text-white" : ""} py-1 xl:px-[14px]  cursor-pointer whitespace-nowrap border-r gap-1 border-divider_2 flex flex-col items-center justify-center`}>
                                    <MdOutlineLightMode className={`${isTime.includes(time.id) ? "text-white" : "text-info_light"}`} />
                                    <p className="text-[10px] font-light">{time.time}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="py-4">
                        <FilterCheckboxGroup options={filterTags} selectedFilters={selectedTagsIds} onSelect={setSelectTagsIds} title="Tags" />
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

export default FilterTourLists;

// Filter options for the duration
const filterOptions = [
    { id: "1", isChecked: true, label: "Less than 6 hours" },
    { id: "2", isChecked: false, label: "6 - 12 hours" },
    { id: "3", isChecked: false, label: "12 - 24 hours" },
    { id: "4", isChecked: false, label: "24+ hours" },
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
