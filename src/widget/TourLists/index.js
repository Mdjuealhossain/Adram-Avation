"use client";
import Button from "@/components/Button";
import React, { useState, useEffect } from "react";
import { BsCheckSquareFill } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { Range } from "react-range";
import { useForm, Controller } from "react-hook-form";

const TourLists = () => {
    const { control, watch, reset, setValue } = useForm({
        defaultValues: {
            priceRange: [1],
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
    const priceRange = watch("priceRange");

    useEffect(() => {
        console.log("Filters:", filters);
        console.log("Price Range:", priceRange);
    }, [filters, priceRange]);

    const handleFilterChange = (filterName) => {
        const currentFilters = watch("filters");
        setValue("filters", {
            ...currentFilters,
            [filterName]: !currentFilters[filterName],
        });
    };

    const handleReset = () => {
        reset({
            priceRange: [1],
            filters: {
                business: false,
                couples: false,
                families: false,
                friends: false,
                solo: false,
            },
        });
    };

    return (
        <div className=" grid grid-cols-4 gap-8 ">
            <div className=" col-span-1 bg-white">
                <div className=" border-b border-divider_2">
                    <p className=" text-subtitle1 font-semibold text-info_main px-4 pt-4">Destination: 1 place found</p>
                    <p className=" text-subtitle1 font-semibold text-info_main p-4">Filter By</p>
                </div>
                <form className=" p-4">
                    <div className=" border-b border-divider_2 pb-4">
                        <p className=" text-subtitle1 font-semibold text-info_main mb-1 pb-1 ">Price Range</p>
                        <div>
                            <Controller
                                name="priceRange"
                                control={control}
                                render={({ field }) => (
                                    <Range
                                        {...field}
                                        step={1.1}
                                        min={0}
                                        max={100}
                                        values={field.value}
                                        onChange={(values) => field.onChange(values)}
                                        renderTrack={({ props, children }) => (
                                            <div
                                                {...props}
                                                style={{
                                                    ...props.style,
                                                    height: "5px",
                                                    width: "100%",
                                                    backgroundColor: "#00026e",
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
                        </div>
                        <div className=" flex items-center justify-between text-info_main  font-serif uppercase pt-4 t">
                            <p>bdt 73000</p>
                            <p>BDT 73,000</p>
                        </div>
                    </div>
                    <div className=" my-4 pb-4 border-b border-divider_2">
                        <p className=" text-subtitle1 font-semibold text-info_main pb-1">Duration</p>
                        <div className=" flex flex-col gap-[10px] py-[10px]">
                            {filterOptions.map(({ name, label }) => (
                                <label key={name} className={`inline-flex items-center cursor-pointer`}>
                                    <input type="checkbox" className={`form-checkbox hidden h-5 w-5  rounded border-gray-300 focus:ring-blue-500`} checked={filters[name]} onChange={() => handleFilterChange(name)} />
                                    <div className=" h-5 w-5 ">{filters[name] ? <BsCheckSquareFill size={18} className="shadow-md text-info_main" /> : <div className=" h-[18px] w-[18px] border border-black/50 rounded-[3px] shadow-md"></div>}</div>
                                    <span className="ml-1 text-body1 text-gray_400">{label}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className=" text-subtitle1 font-semibold text-info_main pb-1">Time</p>
                        <div className=" flex items-center justify-center border rounded">
                            <div className=" py-1 px-[10px] whitespace-nowrap border-r gap-1 border-divider_2 flex flex-col items-center justify-center">
                                <MdOutlineLightMode className=" text-info_light" />
                                <p className=" text-[10px] font-light">00 - 06</p>
                            </div>
                            <div className="  py-1 px-[10px] whitespace-nowrap border-r gap-1 bg-info_main text-white border-divider_2 flex flex-col items-center justify-center">
                                <MdOutlineLightMode className=" text-white " />
                                <p className=" text-[10px] font-light">00 - 06</p>
                            </div>
                            <div className=" py-1 px-[10px] whitespace-nowrap border-r gap-1 border-divider_2 flex flex-col items-center justify-center">
                                <MdOutlineLightMode className=" text-info_light" />
                                <p className=" text-[10px] font-light">00 - 06</p>
                            </div>
                            <div className=" py-1 px-[10px] whitespace-nowrap gap-1 border-divider_2 flex flex-col items-center justify-center">
                                <MdOutlineLightMode className=" text-info_light" />
                                <p className=" text-[10px] font-light">00 - 06</p>
                            </div>
                        </div>
                    </div>
                    <div className=" py-4 mt-4">
                        <Button type="button" className=" bg-warning_main text-info_main font-semibold w-full" onClick={handleReset}>
                            reset filter
                        </Button>
                    </div>
                </form>
            </div>
            <div className=" col-span-3">list</div>
        </div>
    );
};

export default TourLists;

const filterOptions = [
    { name: "business", label: "Business" },
    { name: "couples", label: "Couples" },
    { name: "families", label: "Families" },
    { name: "friends", label: "Friends" },
    { name: "solo", label: "Solo" },
];
