"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Using usePathname from Next.js
import { FaTags, FaHeart, FaSignOutAlt, FaPlane, FaHotel } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaCcVisa } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
import { MdPerson, MdTour } from "react-icons/md";
import { RiShieldFlashFill } from "react-icons/ri";

import Container from "@/components/Container";
import { Tab } from "@/components/Tabs";

const Nav = () => {
    const [showContent, setShowContent] = useState(false);
    const [activeTabIndex, setActiveTabIndex] = useState("flight");
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    useEffect(() => {
        const searchParam = searchParams.get("search") || "flight";
        setActiveTabIndex(searchParam);
    }, [searchParams]);
    const [isHomePage, setIsHomePage] = useState(false);

    useEffect(() => {
        // Check if pathname is "/"
        const isHome = pathname === "/";
        setIsHomePage(isHome);
    }, [pathname]);

    const tabs = [
        { id: "flight", label: "Flight", icon: <FaPlane /> },
        { id: "hotel", label: "Hotel", icon: <FaHotel /> },
        { id: "tour", label: "Tour", icon: <MdTour /> },
        { id: "visa", label: "Visa", icon: <FaCcVisa /> },
    ];

    const handleTab = useCallback(
        (tab) => {
            // Update the URL with the selected tab
            router.push(`/?search=${tab.id}`, { shallow: true });
        },
        [router]
    );

    const icon = isOpen ? <IoIosArrowUp size={14} /> : <IoIosArrowDown size={14} />;

    const handleScroll = () => {
        const scrollPosition = window.scrollY; // Scroll position in pixels
        if (scrollPosition > 50) {
            setShowContent(true); // Show content if scroll is greater than 100px
        } else {
            setShowContent(false); // Hide content if scroll is less than 100px
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`fixed left-0 top-0 right-0 z-20 ${isHomePage && showContent ? " bg-white shadow-nav" : !isHomePage ? " bg-white shadow-nav" : " bg-transparent"}`}>
                <Container>
                    <nav className="flex items-center justify-between md:h-20 h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center justify-center overflow-hidden h-10">
                            <Image src="/assets/logo.jpg" alt="logo" height={40} width={130} className="h-auto w-auto max-h-full max-w-full" />
                        </Link>

                        <div className={` md:px-[60px] px-10 rounded-lg z-10 hidden md:flex items-center transition-opacity duration-300 ${showContent && isHomePage ? "opacity-100" : !isHomePage ? "opacity-100" : "opacity-0"}`}>
                            {tabs.map((tab) => (
                                <Tab className={`!py-7 ${!isHomePage && " !border-transparent !text-secondary"}`} key={tab.id} isActive={activeTabIndex === tab.id} onClick={() => handleTab(tab)} label={tab.label} icon={tab.icon} />
                            ))}
                        </div>

                        {/* Right Section */}
                        <div className="relative flex items-center gap-8 lg:w-[107.09px]">
                            {/* Profile Dropdown Trigger */}
                            <div className="flex items-center gap-1 cursor-pointer" onClick={() => setIsOpen(true)}>
                                <IoPersonCircle className="text-info_main h-8 w-8 md:h-10 md:w-10" />
                                {icon}
                            </div>

                            {/* Overlay (closes menu when clicked outside) */}
                            {isOpen && <div className="fixed inset-0 bg-transparent z-[998]" onClick={() => setIsOpen(false)}></div>}

                            {/* Dropdown Menu */}
                            {isOpen && (
                                <div className="absolute top-full left-0 md:left-1/2 -translate-x-1/2 w-[147px] bg-white mt-2 shadow-lg rounded-md border">
                                    <ul className="text-primary text-body1">
                                        <li>
                                            <Link href="#" onClick={() => setIsOpen(false)} className="flex items-center gap-2 py-2 px-4 hover:bg-info_extra_light hover:text-info_main">
                                                <MdPerson size={18} />
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" onClick={() => setIsOpen(false)} className="flex items-center gap-2 py-2 px-4 hover:bg-info_extra_light hover:text-info_main">
                                                <RiShieldFlashFill size={16} />
                                                Club Limits
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" onClick={() => setIsOpen(false)} className="flex items-center gap-2 py-2 px-4 hover:bg-info_extra_light hover:text-info_main">
                                                <FaTags size={16} />
                                                My Booking
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" onClick={() => setIsOpen(false)} className="flex items-center gap-2 py-2 px-4 hover:bg-info_extra_light hover:text-info_main">
                                                <FaHeart size={16} />
                                                Saved
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" onClick={() => setIsOpen(false)} className="flex items-center gap-2 py-2 px-4 hover:bg-info_extra_light hover:text-info_main">
                                                <FaSignOutAlt size={16} />
                                                Sign Out
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </nav>
                </Container>
            </div>
        </>
    );
};

export default Nav;
