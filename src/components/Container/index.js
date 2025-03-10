import React from "react";

const Container = ({ className, children }) => {
    return <div className={`w-full xl:max-w-2xl lg:max-w-xl md:max-w-lg max-w-md mx-auto px-4 ${className}`}>{children}</div>;
};

export default Container;
