"use client";
import React, { useState } from "react";

export const Tabs = ({ children }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const tabs = React.Children.map(children, (child, index) => {
        // Check if the child is a Tab component
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                isActive: activeTabIndex === index,
                onClick: () => setActiveTabIndex(index),
            });
        }
        return null;
    });

    // Get the content of the active tab
    const activeContent = React.Children.toArray(children)[activeTabIndex].props.children;

    return (
        <div>
            <div className="flex justify-center">{tabs}</div>
            <div className="p-4">{activeContent}</div>
        </div>
    );
};

export const Tab = ({ label, isActive, onClick, icon }) => (
    <button className={`flex flex-col md:flex-row justify-center md:justify-start items-center gap-1 md:gap-3 md:p-5 p-3 font-semibold focus:outline-none border-b-2 ${isActive ? " border-warning_main text-info_main" : "text-secondary border-transparent"}`} onClick={onClick}>
        <span>{icon}</span>
        <span>{label}</span>
    </button>
);
