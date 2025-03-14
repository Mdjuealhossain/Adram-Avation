import React from "react";

import VisaAssistanceForm from "../VisaAssistanceForm";
import VisaSummary from "../VisaSummary";
import VisaService from "../Visa";

const VisaDetails = () => {
    return (
        <div>
            <VisaService />
            <div className=" grid md:grid-cols-3 grid-cols-1 gap-8 md:mt-16 mt-8">
                <div className=" md:col-span-2">
                    <VisaSummary />
                </div>
                <VisaAssistanceForm />
            </div>
        </div>
    );
};

export default VisaDetails;
