"use client";
import { useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const ImageURL = ({ image, className, height, width, alt }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        delay: 300,
        threshold: 0.5,
    });

    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div ref={ref} className="flex justify-center items-center overflow-hidden h-full w-full">
            {isLoading && (
                <div className="${className} max-h-full h-auto max-w-full w-auto">
                    <Image
                        className={` md:h-12 md:w-12 h-8 w-8`}
                        src="/assets/icons/loading_img.svg" // Path to your loading image
                        alt="Loading"
                        height={24}
                        width={24}
                    />
                </div>
            )}
            {image && inView && (
                <Image
                    className={`${className} max-h-full h-auto max-w-full w-auto`}
                    height={height}
                    width={width}
                    src={`${image}`}
                    alt={alt}
                    onLoad={handleImageLoad}
                    style={{
                        opacity: isLoading ? 0 : 1,
                        transition: "opacity 0.3s ease",
                    }}
                />
            )}
        </div>
    );
};

export default ImageURL;
