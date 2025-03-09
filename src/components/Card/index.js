import Image from "next/image";
import React from "react";
import ImageURL from "../ImageUrl";
import { IoLocation } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";

const Card = ({ image, title, location, duration, groupSize, description, price, discount }) => {
    return (
        <div className="p-4 rounded bg-white flex items-start justify-between gap-4">
            <div className="flex gap-3">
                <div className="h-[180px] flex items-center justify-center overflow-hidden">
                    <Image height={180} width={224} alt="tour" src={image} className="max-w-full max-h-full h-auto w-auto" />
                </div>
                <div className="flex flex-col justify-between max-w-[400px]">
                    <div className="mb-[10px]">
                        <h4 className="text-H3 font-semibold text-info_main mb-1">{title}</h4>
                        <div className="flex items-center gap-2">
                            <MdLocationPin size={14} />
                            <p className="text-body2 font-light text-info_main">{location}</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex gap-x-3">
                            <div className="flex items-center gap-2">
                                <MdLocationPin size={14} />
                                <p className="text-body2 font-light text-info_main">{duration}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdLocationPin size={14} />
                                <p className="text-body2 font-light text-info_main">{groupSize}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdLocationPin size={14} className="!h-5 !w-5" />
                            <p className="text-body2 font-light text-info_main">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-px">
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
