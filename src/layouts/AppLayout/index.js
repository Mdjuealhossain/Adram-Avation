import React, { Suspense } from "react";

import Nav from "@/widget/Nav";

const AppLayout = ({ children }) => {
    return (
        <div className=" relative">
            <Suspense fallback={<div>Loading...</div>}>
                <Nav />
            </Suspense>
            <div>{children}</div>
        </div>
    );
};

export default AppLayout;
