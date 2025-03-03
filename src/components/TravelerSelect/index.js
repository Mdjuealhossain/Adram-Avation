"use client";
import React, { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { IoClose } from "react-icons/io5";

// Button Component
const CounterButton = ({ value, onClick, disabled }) => (
    <button className={` border rounded-full h-[22px] w-[22px] flex items-center justify-center text-info_main border-info_main ${disabled ? "opacity-50 cursor-not-allowed" : " opacity-100"}`} onClick={onClick} disabled={disabled}>
        {value}
    </button>
);

// Child Age Selector Component
const ChildAgeSelector = ({ control, count }) => (
    <div className="mt-2">
        <span className="text-body2 text-info_main mb-1">Child Age</span>
        <div className="grid grid-cols-4 gap-1.5">
            {Array.from({ length: count }).map((_, index) => (
                <Controller
                    key={index}
                    name={`childAges[${index}]`}
                    control={control}
                    defaultValue="" // Set initial value to empty string
                    render={({ field }) => (
                        <select {...field} className="block px-2 py-1 text-body2 w-full border rounded">
                            {/* Placeholder option */}
                            {[2, 3, 4, 5, 6, 7, 8, 9].map((age) => (
                                <option key={age} value={age}>
                                    {age}
                                </option>
                            ))}
                        </select>
                    )}
                />
            ))}
        </div>
    </div>
);

// Main TravelerSelect Component
const TravelerSelect = ({ label, onSelect = () => {} }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { control, handleSubmit, watch, setValue, register } = useForm({
        defaultValues: {
            adults: 1,
            children: 0,
            infants: 0,
            class: "Economy",
            childAges: [],
        },
    });

    const adults = watch("adults");
    const children = watch("children");
    const infants = watch("infants");

    const onSubmit = (data) => {
        onSelect(data);
        console.log(data);
        setIsOpen(false);
    };

    const dropdownRef = useRef(null);

    const handleOverlayClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    // Attach event listener to document for managing overlay clicks
    useEffect(() => {
        document.addEventListener("mousedown", handleOverlayClick);
        return () => {
            document.removeEventListener("mousedown", handleOverlayClick);
        };
    }, []);

    return (
        <div className="relative">
            <div onClick={() => setIsOpen(!isOpen)} className={`border md:px-4 px-3 py-2 border-divider_2 rounded-[10px] cursor-pointer ${isOpen ? "bg-info_deep_light" : "bg-transparent"}`}>
                <p className="text-body2 mb-1 text-info_main uppercase lg:w-[168px] whitespace-nowrap">{label}</p>
                <p className="text-subtitle1 font-bold text-info_main capitalize line-clamp-1">{`${adults + children + infants} Traveler${adults + children > 1 ? "s" : ""}`}</p>
                <p className="text-body2 line-clamp-1">{watch("class")}</p>
            </div>

            {isOpen && (
                <div ref={dropdownRef} className="md:absolute md:w-[310px] fixed inset-0 md:inset-auto md:mt-1 bg-white border rounded-md shadow-lg z-20">
                    <div className="md:max-h-screen overflow-y-auto">
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <div className=" border-b border-divider_2 px-4 pt-5 pb-[10px] flex justify-between items-center">
                                <div className=" text-body2 text-info_main">
                                    <p>Adults</p>
                                    <p className=" text-info_light">12 years and above</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <CounterButton
                                        value="-"
                                        onClick={(e) => {
                                            e.preventDefault(); // Prevent default behavior
                                            e.stopPropagation(); // Prevent event from bubbling up
                                            setValue("adults", Math.max(adults - 1, 1));
                                        }}
                                        disabled={adults <= 1}
                                    />
                                    <span className=" w-6 flex items-center justify-center">{adults}</span>
                                    <CounterButton
                                        value="+"
                                        onClick={(e) => {
                                            e.preventDefault(); // Prevent default behavior
                                            e.stopPropagation(); // Prevent event from bubbling up
                                            setValue("adults", adults + 1);
                                        }}
                                        disabled={adults >= 5}
                                    />
                                </div>
                            </div>
                            <div className="border-b border-divider_2 px-4 py-[10px]">
                                <div className=" flex justify-between items-center">
                                    <div className=" text-body2 text-info_main">
                                        <p>Children</p>
                                        <p className=" text-info_light">2-11 years</p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <CounterButton
                                            value="-"
                                            onClick={(e) => {
                                                e.preventDefault(); // Prevent default behavior
                                                e.stopPropagation(); // Prevent event from bubbling up
                                                setValue("children", Math.max(children - 1, 0));
                                            }}
                                            disabled={children <= 0}
                                        />
                                        <span className=" w-6 flex items-center justify-center">{children}</span>
                                        <CounterButton
                                            value="+"
                                            onClick={(e) => {
                                                e.preventDefault(); // Prevent default behavior
                                                e.stopPropagation(); // Prevent event from bubbling up
                                                setValue("children", children + 1);
                                            }}
                                            disabled={children >= 4}
                                        />
                                    </div>
                                </div>
                                {/* Child Age Selector */}
                                {children > 0 && <ChildAgeSelector control={control} count={children} />}
                            </div>

                            <div className=" px-4 py-[10px] border-b border-divider_2 flex justify-between items-center">
                                <div className=" text-body2 text-info_main">
                                    <p>Infant</p>
                                    <p className=" text-info_light">Below 2 years</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CounterButton
                                        value="-"
                                        onClick={(e) => {
                                            e.preventDefault(); // Prevent default behavior
                                            e.stopPropagation(); // Prevent event from bubbling up
                                            setValue("infants", Math.max(watch("infants") - 1, 0));
                                        }}
                                        disabled={watch("infants") <= 0}
                                    />
                                    <span className=" w-6 flex items-center justify-center">{watch("infants")}</span>
                                    <CounterButton
                                        value="+"
                                        onClick={(e) => {
                                            e.preventDefault(); // Prevent default behavior
                                            e.stopPropagation(); // Prevent event from bubbling up
                                            setValue("infants", watch("infants") + 1);
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="p-4">
                                {/* Class Selector */}
                                <div className="mb-4">
                                    <span className="text-body2 text-info_main">Class</span>
                                    <div className="flex items-center gap-4">
                                        {["Economy", "Business"].map((type) => (
                                            <label className="flex items-center cursor-pointer" key={type}>
                                                <input type="radio" name="class" value={type} {...register("class")} className="mr-2 h-4 w-4" />
                                                <span className="text-body2 font-semibold">{type}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className=" flex items-center justify-end">
                                    <button type="submit" className=" bg-warning_main text-info_main font-semibold text-body1 py-2 px-5 rounded">
                                        Done
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <span onClick={() => setIsOpen(false)} className="absolute top-[90%] left-1/2 -translate-x-1/2 md:hidden rounded-full bg-black/20 p-2 cursor-pointer">
                        <IoClose size={18} />
                    </span>
                </div>
            )}
        </div>
    );
};

export default TravelerSelect;
