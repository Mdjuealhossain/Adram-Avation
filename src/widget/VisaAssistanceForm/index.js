"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "@/components/InputField";
import useModal from "@/hooks/useModal";
import Button from "@/components/Button";
import Modal from "@/components/Modal";

const VisaAssistanceForm = () => {
    const [phone, setPhone] = useState("");

    const { isOpen: isSuccess, openModal: openSuccess, closeModal: closeSuccess } = useModal();
    const { isOpen, openModal, closeModal } = useModal();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm();

    // Form Submit Handler
    const onSubmit = (data) => {
        const final_data = {
            ...data,
        };
        console.log(final_data);
        openModal();
        setTimeout(() => {
            openSuccess();
        }, 200);
        reset();
        setPhone(""); // Clear phone input after submission
    };

    // Close Modal
    const handleClose = () => {
        closeModal();
        closeSuccess();
    };

    return (
        <div className="p-4 bg-white shadow-visa_form">
            <h3 className="text-H3 font-semibold text-info_main mb-1.5">Request Visa Assistance</h3>
            <p className="text-body1 text-secondary font-light mb-1">Please share your contact information. Our team will get in touch with you shortly.</p>

            {/* FORM */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <InputField
                    label="Name*"
                    name="name"
                    type="text"
                    register={register}
                    placeholder="Enter your name"
                    validation={{
                        required: "The field is required.",
                        minLength: { value: 4, message: "Must be 4 characters or more" },
                    }}
                    errors={errors}
                />

                <InputField
                    label="Email Address*"
                    name="email"
                    type="email"
                    register={register}
                    placeholder="some@gmail.com"
                    validation={{
                        required: "The field is required.",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email address",
                        },
                    }}
                    errors={errors}
                />

                <InputField
                    label="Phone Number*"
                    name="phone"
                    type="phone"
                    value={phone}
                    errors={errors}
                    control={control}
                    validation={{
                        required: "Phone number is required.",
                        pattern: {
                            value: /^[0-9]{10,15}$/,
                            message: "Enter a valid phone number (10-15 digits).",
                        },
                    }}
                />

                <Button type="submit" className={"bg-warning_main font-semibold text-info_main !text-body2 w-full"}>
                    Send
                </Button>
            </form>

            {/* SUCCESS MODAL */}
            <Modal width={500} isOpen={isOpen} onClose={handleClose}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50" className="mx-auto">
                        <circle cx="50" cy="50" r="45" className={`circle ${isSuccess ? "filled" : ""}`} stroke={isSuccess ? "#8BC43F" : "transparent"}></circle>
                        <path d="M 30 50 L 45 65 L 70 35" className={`checkmark ${isSuccess ? "show" : ""}`} stroke={isSuccess ? "#8BC43F" : "transparent"} fill="none" strokeWidth="5" strokeLinecap="round"></path>
                    </svg>
                    <div className="my-4 space-y-4">
                        <h5 className="text-H5 font-semibold text-center">Successfully Submitted</h5>
                        <p className="text-center text-subtitle2">Your requirement has been submitted successfully. Thank you for considering WiztecBD with service.</p>
                        <p className="text-center text-subtitle2 font-semibold">We will email you a quotation.</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <Button size="small" onClick={handleClose} className={" bg-warning_main font-semibold !text-body2 w-full"}>
                            Ok !
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default VisaAssistanceForm;
