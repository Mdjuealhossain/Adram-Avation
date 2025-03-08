"use client";
import React from "react";

const Button = ({ children, className, size = "medium", onClick = () => {}, type = "button" }) => {
    return (
        <button type={type} onClick={onClick} className={`${className} z-10 whitespace-nowrap border capitalize flex items-center justify-center gap-2 border-transparent cursor-pointer rounded-md ${size == "small" ? " px-4 py-1" : size == "medium" ? " px-6 py-1.5" : size == "large" ? " px-12 py-3 leading-6" : ""}`}>
            {children}
        </button>
    );
};

export default Button;
