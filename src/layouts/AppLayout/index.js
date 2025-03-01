import React from "react";

const AppLayout = ({ children }) => {
    return (
        <div className=" relative">
            <div>{children}</div>
        </div>
    );
};

export default AppLayout;
