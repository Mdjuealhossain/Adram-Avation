"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const Drawer = dynamic(() => import("react-modern-drawer"), { ssr: false });
import { IoPersonCircle } from "react-icons/io5";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import { GiCard10Clubs } from "react-icons/gi";
import { RiShieldFlashFill } from "react-icons/ri";
import { FaTags } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

import Container from "@/components/Container";
import useModal from "@/hooks/useModal";
import MobileDrawer from "../MobileDrawer";
import "react-modern-drawer/dist/index.css";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const { isOpen: isDrawer, openModal: openDrawer, closeModal: closeDrawer } = useModal();
    return (
        <>
            <div className="  fixed left-0 top-0 right-0">
                <Container>
                    <nav className=" flex items-center justify-between md:h-20 h-16">
                        <Link href={"/"}>
                            logo
                            {/* <Image src={"/"} alt="logo" height={40} width={130} className=" h-auto w-auto max-h-full max-w-full" /> */}
                        </Link>
                        <div className=" items-center gap-8 relative  flex">
                            {/* <Button className="bg-warning_main text-info_main">sign in</Button> */}

                            {/* Dropdown Trigger */}
                            <div className="flex items-center gap-1 cursor-pointer" onClick={() => setIsOpen(true)}>
                                <span>
                                    <IoPersonCircle className="text-info_main h-8 w-8 md:h-10 md:w-10" />
                                </span>
                                {isOpen ? <IoIosArrowUp size={14} /> : <IoIosArrowDown size={14} />}
                            </div>

                            {/* Overlay (closes the menu when clicked) */}
                            {isOpen && <div className="fixed inset-0 bg-transparent z-10" onClick={() => setIsOpen(false)}></div>}

                            {/* Dropdown Menu */}
                            {isOpen && (
                                <div className="absolute top-full md:left-1/2 left-0 -translate-x-1/2 w-[147px] bg-white mt-2 shadow-menu rounded-md border z-20">
                                    <ul>
                                        <li>
                                            <Link href="#" onClick={() => setIsOpen(false)} className="flex items-center gap-2 py-[7px] px-[14px] text-primary text-body1 whitespace-nowrap capitalize hover:bg-info_extra_light hover:text-info_main">
                                                <MdPerson size={18} />
                                                profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" onClick={() => setIsOpen(false)} className="flex items-center gap-2 py-[7px] px-[14px] text-primary text-body1 whitespace-nowrap capitalize hover:bg-info_extra_light hover:text-info_main">
                                                <RiShieldFlashFill size={16} />
                                                club limites
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" onClick={() => setIsOpen(false)} className="flex items-center gap-2 py-[7px] px-[14px] text-primary text-body1 whitespace-nowrap capitalize hover:bg-info_extra_light hover:text-info_main">
                                                <FaTags size={16} />
                                                my booking
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" onClick={() => setIsOpen(false)} className="flex items-center gap-2 py-[7px] px-[14px] text-primary text-body1 whitespace-nowrap capitalize hover:bg-info_extra_light hover:text-info_main">
                                                <FaHeart size={16} />
                                                saved
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" onClick={() => setIsOpen(false)} className="flex items-center gap-2 py-[7px] px-[14px] text-primary text-body1 whitespace-nowrap capitalize hover:bg-info_extra_light hover:text-info_main">
                                                <FaSignOutAlt size={16} />
                                                sign out
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        {/* <IoMdMenu size={28} onClick={openDrawer} className=" md:hidden" /> */}
                    </nav>
                </Container>
            </div>
            {/* <MobileDrawer isDrawer={isDrawer} closeDrawer={closeDrawer} />{" "} */}
        </>
    );
};

export default Nav;
