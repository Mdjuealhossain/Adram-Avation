"use client";
import React, { useEffect, useState } from "react";
import { FaStopwatch } from "react-icons/fa";

const CountdownTimer = ({ initialTime = 1230 }) => {
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        if (time <= 0) return;

        const timer = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [time]);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <div className=" p-[15px] bg-white mt-40">
            <div className=" rounded bg-info_deep_light px-[10px] py-[5px] flex gap-2 ">
                <FaStopwatch size={20} className=" text-secondary" />
                <div>
                    <div className="text-H2 font-semibold text-info_main">{`${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`}</div>
                    <div className=" flex items-center justify-between">
                        <div className=" text-body1 text-secondary gap-4">Min </div>
                        <div className=" text-body1 text-secondary gap-4"> Sec</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Default export for easy use in other components
export default CountdownTimer;
