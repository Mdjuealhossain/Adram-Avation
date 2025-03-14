"use client";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaStopwatch } from "react-icons/fa";

const CountdownTimer = ({ initialTime = 1200 }) => {
    const [time, setTime] = useState(initialTime);
    const [showPopup, setShowPopup] = useState(false); // State for popup visibility
    const router = useRouter();

    useEffect(() => {
        if (time <= 0) {
            setShowPopup(true); // Show popup when time reaches 0
            return;
        }

        const timer = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [time]);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <div className="p-[15px] bg-white">
            <div className="rounded bg-info_deep_light px-[10px] py-[5px] flex gap-2">
                <FaStopwatch size={20} className="text-secondary" />
                <div>
                    <div className="text-H2 font-semibold text-info_main">{`${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`}</div>
                    <div className="flex items-center justify-between">
                        <div className="text-body1 text-secondary gap-4">Min</div>
                        <div className="text-body1 text-secondary gap-4">Sec</div>
                    </div>
                </div>
            </div>
            <Modal isOpen={showPopup} isClose={false} width={400} title={"Session expired"}>
                <div className=" flex flex-col items-center justify-center">
                    <p className=" text-center pb-6 pt-2"> sorry, your session expired</p>
                    <Button className=" text-white bg-info_main" onClick={() => router.push("/")}>
                        search again
                    </Button>
                </div>
            </Modal>
            {/* Popup */}
        </div>
    );
};

export default CountdownTimer;
