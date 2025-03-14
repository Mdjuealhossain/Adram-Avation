"use client";
import React from "react";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const InputField = ({ label, name, type = "text", register, validation, errors, textAreaClass = "", inputClass = "", placeholder = "", control, disabled }) => {
    return (
        <div className="flex flex-col">
            {label && (
                <label htmlFor={name} className="text-body2 font-light mb-1">
                    {label}
                </label>
            )}

            {type === "textarea" ? (
                <textarea placeholder={placeholder} {...register?.(name, validation)} className={`focus:ring-1 focus:ring-primary/50 hover:ring-primary/50 text-body2 placeholder:text-body2 hover:shadow-input focus:shadow-input px-[14px] py-2 bg-white rounded focus:outline-none ring-1 ring-primary/50 focus:border-transparent ${textAreaClass}`} />
            ) : type === "phone" ? (
                <div className="relative">
                    {/* <PhoneInput
                        name={name}
                        value={value}
                        onChange={onChange} // 🔹 Update phone state
                        disabled={disabled}
                        country={"bd"}
                        containerClass={`${inputClass} w-full`}
                        inputStyle={{
                            width: "100%",
                            backgroundColor: "transparent",
                            border: `1px solid ${errors?.[name] ? "#e3342f" : "#d1d5db"}`, // 🔹 Error border
                            paddingLeft: "2.5rem",
                            paddingRight: "1rem",
                            height: "2.5rem",
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
                    /> */}
                    <Controller
                        control={control}
                        name={name}
                        rules={validation}
                        render={({ field }) => (
                            <PhoneInput
                                {...field}
                                country={"bd"}
                                containerClass="w-full"
                                inputStyle={{
                                    width: "100%",
                                    backgroundColor: "transparent",
                                    border: `1px solid #d1d5db`, // Error border
                                    paddingLeft: "2.5rem",
                                    paddingRight: "1rem",
                                    height: "2.5rem",
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
                            />
                        )}
                    />
                </div>
            ) : (
                <input {...register?.(name, validation)} placeholder={placeholder} type={type} disabled={disabled} className={`focus:ring-1 focus:ring-primary/50 hover:ring-primary/50 text-body2 placeholder:text-body2 hover:shadow-input focus:shadow-input px-[14px] py-2 bg-white rounded focus:outline-none ring-1 ring-primary/50 focus:border-transparent ${inputClass}`} />
            )}

            {/* 🔹 Display Error Messages */}
            {errors?.[name] && <div className="opacity-100 text-body2 mt-1 text-error_main">{errors[name]?.message}</div>}
        </div>
    );
};

export default InputField;
