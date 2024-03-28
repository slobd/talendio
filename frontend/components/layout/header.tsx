"use client"

import { usePathname } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
    {
        id: 1,
        label: "Jobs in Stadtname",
        link: "/jobs",
    },
    {
        id: 2,
        label: "Arbeitgeberliste",
        link: "/employers",
    },
    {
        id: 3,
        label: "Suchprofil",
        link: "/profile",
    },
    {
        id: 4,
        label: "Über Uns",
        link: "/about_us",
    },
    {
        id: 5,
        label: "App downloaden",
        link: "/app_download",
    },
];

const Header = () => {
    const pathname = usePathname();
    const [nav, setNav] = useState(false);
    return (
        <div className="z-50 flex justify-between items-center w-full h-20 px-16 text-black bg-[#E5F0FB] fixed nav">
            <div className="relative !w-[180px] min-w-[150px] !min-h-[30px]">
                <Link href="/">
                    <Image
                        className="w-auto dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src="/logo.svg"
                        alt="Logo"
                        width={180}
                        height={50}
                    />
                </Link>
            </div>

            <ul className="hidden lg:flex">
                {navItems.map(({ id, label, link }) => (
                    <li
                        key={id}
                        className="text-center flex items-center nav-links px-4 cursor-pointer capitalize text-[15px] font-normal text-black hover:text-gray-500 duration-200 link-underline"
                    >
                        <Link
                            className={`link ${pathname === link ? 'font-bold' : ''}`}
                            href={link}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="hidden lg:flex gap-3">
                <Button variant="ghost" className="text-[15px] font-normal bg-white hover:text-gray-500">
                    <Link href="/profile"> Mein Account </Link>
                </Button>
                <Button variant="ghost" className="text-[15px] font-medium bg-yellow-400 hover:bg-yellow-400 hover:text-gray-500">
                    <Link href="/jobs/create"> Jobanzeige schalten </Link>
                </Button>
            </div>


            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-black lg:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <div className="absolute top-20 left-0 w-full h-screen bg-gradient-to-b from-[#E5F0FB] to-gray-500 text-black">
                    <ul className="flex flex-col justify-center items-center ">
                        {navItems.map(({ id, label, link }) => (
                            <li
                                key={id}
                                className="text-center px-4 cursor-pointer capitalize py-6 text-[15px] font-normal hover:text-gray-500"
                            >
                                <Link onClick={() => setNav(!nav)} href={link}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center items-center gap-3">
                        <Button variant="ghost" className="bg-white min-w-[170px] text-[15px] font-normal hover:text-gray-500">
                            <Link href="/profile"> Mein Account </Link>
                        </Button>
                        <Button variant="ghost" className="bg-[#FFDE00] text-[15px] font-medium hover:bg-[#FFDE00] hover:text-gray-500">
                            <Link href="/jobs/create"> Jobanzeige schalten </Link>
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;