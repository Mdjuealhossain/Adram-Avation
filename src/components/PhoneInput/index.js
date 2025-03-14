"use client";
import React from "react";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/style.css"; // Import the default styles

const PhoneNumberInput = ({ label, value, name, disabled, inputClass, onChange }) => {
    return (
        <>
            {label && (
                <label htmlFor={name} className="font-semibold mb-2">
                    {label}
                </label>
            )}
            <div className=" relative">
                <PhoneInput
                    type="number"
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    country={"bd"}
                    containerClass={`${inputClass} w-full pl-4`}
                    inputStyle={{
                        width: "100%",
                        backgroundColor: "transparent",
                        border: "none",
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                        height: "1.875rem",
                    }}
                    buttonStyle={{
                        position: "absolute",
                        top: "50%",
                        left: "0.5rem",
                        transform: "translateY(-50%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        border: "none",
                        background: "transparent",
                    }}
                    dropdownStyle={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        width: 250,
                        top: 12,
                        zIndex: -999,
                        borderRadius: "0.5rem",
                        border: "1px solid #d1d5db",
                        backgroundColor: "#ffffff",
                        padding: "1rem",
                        opacity: "100% ",
                    }}
                />
            </div>
        </>
    );
};

export default PhoneNumberInput;
