import Image from "next/image";
import React from "react";
import ImageURL from "../ImageUrl";
import { IoLocation } from "react-icons/io5";
import { MdGroups, MdLocationPin, MdOutlineWatchLater } from "react-icons/md";
import { LuFileChartColumnIncreasing } from "react-icons/lu";

const Card = ({ image, title, location, duration, groupSize, description, price, discount }) => {
    return (
        <div className="p-4 rounded bg-white flex flex-col md:flex-row items-start justify-between gap-4 shadow-tour_list">
            <div className=" flex gap-3 flex-col md:flex-row w-full md:w-auto">
                <div className="h-[180px] md:w-auto md:min-w-[224px] w-full bg-black flex items-center justify-center overflow-hidden">
                    <ImageURL height={180} width={224} alt="tour" image={image} className={"object-cover"} />
                </div>
                <div className="flex flex-col justify-between ">
                    <div className="mb-[10px]">
                        <h4 className="text-H3 font-semibold text-info_main mb-1">{title}</h4>
                        <div className="flex items-center gap-2">
                            <MdLocationPin size={16} className=" text-secondary/50 shrink-0" />
                            <p className="text-body2 font-light text-info_main">{location}</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex gap-x-3 mb-1">
                            <div className="flex  gap-2">
                                <MdOutlineWatchLater size={16} className=" text-secondary/50 shrink-0" />
                                <p className="text-body2 font-light text-info_main">{duration}</p>
                            </div>
                            <div className="flex  gap-2">
                                <MdGroups size={16} className=" text-secondary/50 shrink-0" />
                                <p className="text-body2 font-light text-info_main">{groupSize}</p>
                            </div>
                        </div>
                        <div className="flex  gap-2">
                            <LuFileChartColumnIncreasing size={16} className=" text-secondary/50 shrink-0" />
                            <p className="text-body2 font-light text-info_main lin">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end gap-px md:w-32 w-full">
                <p className="text-body2 font-light text-success_light capitalize">starting from</p>
                <h3 className="text-H3 font-semibold text-info_main">
                    <span className="text-body2 uppercase">bdt</span> {price}
                </h3>
                <p className="text-body2 font-light text-success_light capitalize mb-1">Per Person</p>

                {/* Conditionally render the discount */}
                {discount && <div className="text-body1 font-semibold text-info_main px-2 py-1 bg-info_main/5 rounded">{discount} off</div>}
            </div>
        </div>
    );
};

export default Card;
