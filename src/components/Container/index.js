import React from "react";

const Container = ({ className, children }) => {
    return <div className={`w-full max-w-2xl mx-auto px-4 ${className}`}>{children}</div>;
};

export default Container;
