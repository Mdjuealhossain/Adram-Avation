import Image from "next/image";
import React from "react";
import ImageURL from "../ImageUrl";
import { FaStar } from "react-icons/fa";
import { MdLocationPin, MdOutlineBathtub } from "react-icons/md";
import { TbAirConditioning, TbGardenCartFilled } from "react-icons/tb";

const HotelCard = ({ image, title, location, duration, groupSize, description, price, discount, startText, startingPrice, roomDetails }) => {
    return (
        <div className="p-4 rounded bg-white flex flex-col md:flex-row items-start justify-between gap-4 shadow-tour_list">
            <div className="flex gap-3 flex-col md:flex-row w-full md:w-auto">
                <div className="h-[180px] md:w-auto md:min-w-[224px] w-full bg-black flex items-center justify-center overflow-hidden">
                    <ImageURL height={180} width={224} alt="tour" image={image} className={"object-cover"} />
                </div>
                <div className="flex flex-col justify-between gap-4">
                    <div className="mb-[10px]">
                        <h4 className="text-H3 font-semibold text-info_main mb-2 line-clamp-2">{title}</h4>
                        <div className="flex items-center gap-4">
                            <div className="border border-divider_2 text-body2 font-light px-1.5 rounded py-1 flex items-center">
                                <FaStar className="text-warning_main" />5 star
                            </div>
                            <div className="flex items-center gap-2">
                                <MdLocationPin size={16} className="text-secondary/50 shrink-0" />
                                <p className="text-body2 font-light text-info_main">{location}</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex gap-x-3 mb-1">
                            <div className="flex gap-2">
                                <MdOutlineBathtub size={16} className="text-secondary/50 shrink-0" />
                                <p className="text-body2 font-light text-info_main">{duration}</p>
                            </div>
                            <div className="flex gap-2">
                                <TbAirConditioning size={16} className="text-secondary/50 shrink-0" />
                                <p className="text-body2 font-light text-info_main">{groupSize}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <TbGardenCartFilled size={16} className="text-secondary/50 shrink-0" />
                            <p className="text-body2 font-light text-info_main lin">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end gap-1 md:mt-4 md:w-[200px] w-full">
                {discount && (
                    <>
                        <div className="text-body1 font-semibold bg-warning_dark px-2 py-1 text-white rounded-md">{discount} off</div>
                        <p className="text-body2 font-light textsucc text-success_main capitalize text-end leading-4">*Extra 5% discount for bKash payment.</p>
                    </>
                )}
                <p className="text-body2 font-light capitalize mb-1">{startText}</p>

                <div className="relative">
                    <p className="text-subtitle1 font-light text-error_main">{startingPrice}</p>
                    <div className="h-px w-full bg-error_main absolute border-error_main top-1/2 -rotate-6"></div>
                </div>
                <h3 className="text-H3 font-semibold text-info_main">
                    <span className="text-body2 uppercase">bdt</span> {price}
                </h3>

                <p className="text-body2 font-light capitalize mb-1">{roomDetails}</p>
            </div>
        </div>
    );
};

export default HotelCard;
