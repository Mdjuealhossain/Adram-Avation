import React from "react";

import VisaAssistanceForm from "../VisaAssistanceForm";
import VisaSummary from "../VisaSummary";
import VisaService from "../Visa";

const VisaDetails = () => {
    return (
        <div>
            <VisaService />
            <div className=" grid grid-cols-3 gap-8 mt-16">
                <div className=" col-span-2">
                    <VisaSummary />
                </div>
                <VisaAssistanceForm />
            </div>
        </div>
    );
};

export default VisaDetails;
