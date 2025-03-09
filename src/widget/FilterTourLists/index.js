"use client";
import Button from "@/components/Button";
import React, { useEffect } from "react";
import { BsCheckSquareFill } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { Range } from "react-range";
import { useForm, Controller } from "react-hook-form";
import FilterCheckboxGroup from "@/components/FilterCheckboxGroup";

const FilterTourLists = () => {
    const { control, watch, reset, setValue } = useForm({
        defaultValues: {
            priceRange: [1],
            isTime: [], // Changed from string to array for multi-select
            tags: {}, // Changed to object for toggling tags individually
            filters: {
                business: false,
                couples: false,
                families: false,
                friends: false,
                solo: false,
            },
        },
    });

    const filters = watch("filters");
    const tags = watch("tags");
    const priceRange = watch("priceRange");
    const isTime = watch("isTime");

    useEffect(() => {
        console.log("Filters:", filters);
        console.log("Tags:", tags);
        console.log("Price Range:", priceRange);
        console.log("Selected Times:", isTime);
    }, [filters, priceRange, isTime, tags]);

    // Handle Tags Change
    const handleTagsChange = (id) => {
        const currentTags = watch("tags");
        setValue("tags", {
            ...currentTags,
            [id]: !currentTags[id], // Toggle the tag
        });
    };

    // Handle Filter Change
    const handleFilterChange = (id) => {
        const currentFilters = watch("filters");
        setValue("filters", {
            ...currentFilters,
            [id]: !currentFilters[id], // Toggle the filter
        });
    };

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
            filters: {
                business: false,
                couples: false,
                families: false,
                friends: false,
                solo: false,
            },
            tags: {},
        });
    };

    const times = [
        { id: "1", time: "00-06" },
        { id: "2", time: "06-12" },
        { id: "3", time: "12-18" },
        { id: "4", time: "18-24" },
    ];

    return (
        <>
            <div className=" bg-white hidden md:block ">
                <div className="border-b border-divider_2">
                    <p className="text-subtitle1 font-semibold text-info_main px-4 pt-4">Destination: 1 place found</p>
                    <p className="text-subtitle1 font-semibold text-info_main p-4">Filter By</p>
                </div>
                <form className="p-4">
                    {/* Price Range Filter */}
                    <div className="border-b border-divider_2 pb-4">
                        <p className="text-subtitle1 font-semibold text-info_main mb-1 pb-1">Price Range</p>
                        <Controller
                            name="priceRange"
                            control={control}
                            render={({ field }) => (
                                <Range
                                    {...field}
                                    step={1.1}
                                    key={field.name}
                                    min={1}
                                    max={12}
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
                            <p className="font-poppins">{`BDT ${priceRange[0] * 1000}`}</p>
                            <p className="font-poppins">{`BDT ${priceRange[1] * 1000}`}</p>
                        </div>
                    </div>

                    {/* Duration Filter */}
                    <div className="mb-4">
                        <FilterCheckboxGroup
                            title="Duration"
                            options={filterOptions}
                            selectedFilters={filters}
                            onChange={(id) => handleFilterChange(id)} // Use handleFilterChange for filters
                        />
                    </div>

                    {/* Time Selection */}
                    <div className="pb-4 border-b border-divider_2">
                        <p className="text-subtitle1 font-semibold text-info_main pb-1">Time</p>
                        <div className="flex items-center justify-center border rounded">
                            {times.map((time) => (
                                <div key={time.id} onClick={() => handleTimeSelect(time.id)} className={`${isTime.includes(time.id) ? "bg-info_main text-white" : ""} py-1 px-[14px] cursor-pointer whitespace-nowrap border-r gap-1 border-divider_2 flex flex-col items-center justify-center`}>
                                    <MdOutlineLightMode className={`${isTime.includes(time.id) ? "text-white" : "text-info_light"}`} />
                                    <p className="text-[10px] font-light">{time.time}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tag Filter */}
                    <div className="mb-4">
                        <FilterCheckboxGroup
                            title="Tags"
                            options={filterTags}
                            selectedFilters={tags}
                            onChange={(id) => handleTagsChange(id)} // Use handleTagsChange for tags
                        />
                    </div>

                    {/* Reset Button */}
                    <div className="py-4 mt-4">
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
    { id: "1", label: "Less than 6 hours" },
    { id: "2", label: "6 - 12 hours" },
    { id: "3", label: "12 - 24 hours" },
    { id: "4", label: "24+ hours" },
];

// Filter tags for the tags
const filterTags = [
    { name: "1", label: "Family friendly" },
    { name: "2", label: "Beach Activity" },
    { name: "3", label: "Adventure" },
    { name: "4", label: "Private Tour" },
    { name: "5", label: "Family Packages" },
    { name: "6", label: "Long Drive" },
    { name: "7", label: "Nature" },
];
