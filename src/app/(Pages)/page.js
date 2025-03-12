"use client";
import HerroBanner from "@/widget/HerroBanner";
import { Suspense } from "react";

const Home = () => {
    return (
        <div>
            <section>
                <Suspense fallback={<div>Loading...</div>}>
                    <HerroBanner />
                </Suspense>
            </section>
            <div className=" h-screen"></div>
        </div>
    );
};

export default Home;
