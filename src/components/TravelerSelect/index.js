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
const ChildAgeSelector = ({ control, count, setValue }) => {
    useEffect(() => {
        setValue(
            "childAges",
            Array.from({ length: count }, (_, index) => "2") // Set all child ages to 2
        );
    }, [count, setValue]); // Runs when count changes
    return (
        <div className="mt-2">
            <div className="grid grid-cols-4 gap-1.5">
                {Array.from({ length: count }).map((_, index) => (
                    <div key={index}>
                        <span className="text-body2 text-info_main mb-1">Child {index + 1} Age</span>
                        <Controller
                            key={index}
                            name={`childAges[${index}]`}
                            control={control}
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
                    </div>
                ))}
            </div>
        </div>
    );
};

// Main TravelerSelect Component
const TravelerSelect = ({ label, onSelect = () => {}, service = "", menuClassName, maxAdult = 0, maxChildren = 0 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [rooms, setRooms] = useState([{ id: 1, adults: 2, children: 3 }]);
    const { control, handleSubmit, watch, setValue, register } = useForm({
        defaultValues: {
            adults: 1,
            children: 0,
            infants: 0,
            class: "Economy",
            childAges: [],
            rooms: [],
        },
    });

    const adults = watch("adults");
    const children = watch("children");
    const infants = watch("infants");

    const onSubmit = (data) => {
        onSelect(data);
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

    const handleAddRoom = () => {
        const newRoom = {
            id: rooms.length + 1,
            adults: 1,
            children: 0,
        };
        setRooms([...rooms, newRoom]);
    };

    const handleRemoveRoom = (id) => {
        setRooms(rooms.filter((room) => room.id !== id));
    };

    return (
        <div className="relative w-full md:w-auto">
            <div onClick={() => setIsOpen(!isOpen)} className={`border md:px-4 px-3 py-2 border-divider_2 rounded-[10px] cursor-pointer ${isOpen ? "bg-info_deep_light" : "bg-transparent"}`}>
                <p className="text-body2 mb-1 text-info_main uppercase lg:w-[168px] whitespace-nowrap">{label}</p>
                {service == "flight" && (
                    <>
                        <p className="text-subtitle1 font-bold text-info_main capitalize line-clamp-1">{`${adults + children + infants} Traveler${adults + children > 1 ? "s" : ""}`}</p>
                        <p className="text-body2 line-clamp-1">{watch("class")}</p>
                    </>
                )}
                {service == "hotel" && (
                    <>
                        <p className="text-subtitle1 font-bold text-info_main capitalize line-clamp-1">
                            {`${adults + children}`} <span className=" font-normal text-body1">{`Guest${adults + children > 1 ? "s" : ""}`}</span>
                            {" ,"} {`${rooms.length}`} <span className=" font-normal text-body1">{`Room${rooms.length > 1 ? "s" : ""}`}</span>
                        </p>
                        <p className="text-body2 line-clamp-1">{`${adults} Adult${adults > 1 ? "s" : ""}, ${children > 0 ? children : ""} ${children > 1 ? "children" : children == 0 ? "" : "Child"}`}</p>
                    </>
                )}
            </div>

            {isOpen && (
                <div ref={dropdownRef} className={`${menuClassName} md:absolute md:w-[330px] lg:right-0 fixed inset-0 md:inset-auto md:mt-1 bg-white border rounded-md shadow-lg z-20`}>
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className="md:max-h-screen overflow-y-auto">
                            <h4 className=" text-H4 text-success_light capitalize p-[10px] md:hidden font-light !pb-0 text-center">{service == "hotel" ? "guest & rooms" : " edit traveler"}</h4>
                            {service == "hotel" && (
                                <div>
                                    {rooms.map((room, index) => (
                                        <div key={room.id} className="px-4 py-[10px] border-b border-divider_2">
                                            <div className="flex justify-between items-start">
                                                <h3 className=" text-subtitle1 font-semibold text-info_main">Room {index + 1}</h3>
                                                <button className={`text-body2 text-info_main ${index === 0 ? "hidden" : "inline-block"}`} onClick={() => handleRemoveRoom(room.id)}>
                                                    Remove
                                                </button>
                                            </div>
                                            <p className={`${index === rooms.length - 1 ? "hidden" : "inline-block"} text-body2 text-info_light`}>
                                                {room.adults} Adults {room.children > 0 && `, ${room.children} Children`}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
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
                                        disabled={adults >= maxAdult}
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
                                            disabled={children >= maxChildren}
                                        />
                                    </div>
                                </div>
                                {/* Child Age Selector */}
                                {children > 0 && <ChildAgeSelector control={control} count={children} setValue={setValue} />}
                            </div>
                            {service == "flight" && (
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
                            )}

                            <div className="p-4">
                                {/* Class Selector */}
                                {service == "flight" && (
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
                                )}
                                {service == "hotel" && adults > 3 && rooms.length < 2 && (
                                    <p className=" text-red-600 text-body2 mb-4 text-center md:text-start">
                                        More than 3 guests ? <br /> Add another room to get more options .
                                    </p>
                                )}

                                <div className={`  flex items-center ${service == "hotel" ? "md:justify-between justify-center" : "justify-end"}`}>
                                    {service == "hotel" && (
                                        <button type="button" disabled={rooms.length > 4} className="text-body1 py-2 px-5 rounded border border-info_main text-info_main" onClick={handleAddRoom}>
                                            Add Another Room
                                        </button>
                                    )}
                                    <button type="submit" className="hidden md:inline bg-warning_main text-info_main font-semibold text-body1 py-2 px-5 rounded">
                                        Done
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className=" bg-warning_main text-info_main font-semibold text-body1 py-2 px-5 rounded absolute top-[80%] left-1/2 -translate-x-1/2 md:hidden cursor-pointer">
                            Done
                        </button>
                        {/* <span onClick={() => setIsOpen(false)} className="absolute top-[90%] left-1/2 -translate-x-1/2 md:hidden rounded-full bg-black/20 p-2 cursor-pointer">
                            <IoClose size={18} />
                        </span> */}
                    </form>
                </div>
            )}
        </div>
    );
};

export default TravelerSelect;
