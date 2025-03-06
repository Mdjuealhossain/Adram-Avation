"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { IoPersonCircle } from "react-icons/io5";
import { MdPerson } from "react-icons/md";
import { RiShieldFlashFill } from "react-icons/ri";
import { FaTags, FaHeart, FaSignOutAlt } from "react-icons/fa";
import Container from "@/components/Container";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Drawer = dynamic(() => import("react-modern-drawer"), { ssr: false });

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const icon = isOpen ? <IoIosArrowUp size={14} /> : <IoIosArrowDown size={14} />;

    return (
        <>
            <div className="fixed left-0 top-0 right-0 z-20">
                <Container>
                    <nav className="flex items-center justify-between md:h-20 h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center justify-center overflow-hidden h-10">
                            <Image src="/assets/logo.jpg" alt="logo" height={40} width={130} className="h-auto w-auto max-h-full max-w-full" />
                        </Link>

                        {/* Right Section */}
                        <div className="relative flex items-center gap-8">
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
