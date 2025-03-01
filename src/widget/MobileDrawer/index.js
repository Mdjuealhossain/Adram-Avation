import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
const Drawer = dynamic(() => import("react-modern-drawer"), { ssr: false });
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

import Button from "@/components/Button";
import "react-modern-drawer/dist/index.css";
import { useParams } from "next/navigation";

const MobileDrawer = ({ isDrawer, closeDrawer }) => {
    const params = useParams();
    const paramsId = params.id;

    return (
        <Drawer open={isDrawer} onClose={closeDrawer} direction="left" className="md:!w-[450px] !w-full">
            <div className="px-4 py-8 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                    <Link href={"/"} className="h-8">
                        <Image src="/assets/images/logo.png" width={127} height={50} alt="logo" className="max-h-full max-w-full h-full w-auto" />
                    </Link>
                    <IoIosClose size={32} onClick={closeDrawer} />
                </div>
                <ul className="flex flex-col gap-2 mb-4">
                    <li>
                        <Link href={"/"} onClick={closeDrawer} className={`flex items-center justify-between gap-1 cursor-pointer `}>
                            <p className="font-helvetica">Home</p>
                            <MdOutlineArrowRightAlt size={18} />
                        </Link>
                    </li>

                    <li>
                        <Link href={"#"} onClick={closeDrawer} className="flex items-center justify-between gap-1 cursor-pointer ">
                            <p className="font-helvetica">Pricing</p>
                            <MdOutlineArrowRightAlt size={18} />
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"} onClick={closeDrawer} className="flex items-center justify-between gap-1 cursor-pointer ">
                            <p className="font-helvetica">Blog</p>
                            <MdOutlineArrowRightAlt size={18} />
                        </Link>
                    </li>
                </ul>
                <div className="flex-1" /> {/* Added this line to push the button down */}
                <div className=" flex flex-col gap-2">
                    <Link href="#" onClick={closeDrawer}>
                        <Button size="small" className={"bg-btn text-white w-full rounded-xl border-warning_main"}>
                            Log In
                        </Button>
                    </Link>
                    <Link href="#" onClick={closeDrawer}>
                        <Button size="small" className={" text-warning_main w-full rounded-xl border-warning_main"}>
                            Sign In
                        </Button>
                    </Link>
                </div>
            </div>
        </Drawer>
    );
};

export default MobileDrawer;
