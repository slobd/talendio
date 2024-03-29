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
    const [isHoveredItem, setIsHoveredItem] = useState(0);

    return (
        <div className="rounded-md md:px-16 px-2 z-50 flex justify-between items-center w-full h-20 text-black bg-[#E5F0FB] fixed nav">
            <div className="relative !w-[180px] min-w-[180px] !min-h-[30px]">
                <Link href="/" className='w-full h-auto'>
                    <Image
                        className="w-auto dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src="/headerlogo.png"
                        alt="Logo"
                        width={180}
                        height={50}
                        priority
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
                            <span
                                className={`${pathname === link ? 'font-bold' : 'font-light'} hover:font-bold text-black bg-bottom bg-no-repeat bg-contain pb-1`}
                                style={{
                                    backgroundImage: pathname === link || isHoveredItem === id
                                        ? "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAvIAAAAZCAYAAABTh8okAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEZ0lEQVR42u3dv3LTQBDH8VvZGZyhyKWEJvcK0NHBm/CGPEI66OAVREWZc5GJZ2xrKUicu9OdLA2J/0jfT+lxZEfyWL9drc5iAAAYKf1l7WplbddzNpuN69xGpa7Pa80qvenzPBG1qpXt/0+oVSN26P8uRq0xxr7CbnUj/bjUL7gtr0b8wOPljfT9G937XreN/C6/mHrZVsXXms/n2e0vFt7LB+/5Zjkdwi4AADx5+OFc37Crs8YazQfMcqgVV86r+YDYI5A6jhxwzIpZvBFtBXw1UueL2bhoEmm8alzEiFZ+o7qMHmvi7UmlflZd+CkXGgR5ADjEeS7TGd42a6tNHIRz3d+5yJVKY+MTX76rm4bhYghWsUbUcmQAjFwY/qMrJe2rIPGVjvCqRlhEhAXEsYsHgjyAyQTntKuchuZcYG51kDNjDmKyoxeOowAA0y0cwisScdHwXDDsioVg3CksFC4/1TVBHsDBpSMaafc5DdHtUYzuAN0Kz3SYAQDTKBJ2VxYI8sDIpZ3psCudzji3O9JxmA7HNlojGwRpAAAOiiAPnFKwDrrUA0O1S17GsacBACDIA4TrPuE6GP3I3GBIsAYAAAR5TDdkh3PW6VhIPGNdDNjB44yCAKP//lDjJbMsXnQilO71w0tL6GXU/d6TZpfqK7+/yldVM3hVjO16tnx72dy95P70y4fl9ZdxLu93d2utvbq8eolt3T9U17OL7aBtNU1lVZte5yQxlevxNNfxobbScf4rLQWrKlbEcN4kyGNMwpsaS51sQjZwNtG37ht2VcUbMX5IqFXTFMPubJb/m32BVD7++c1xA06vCFpt2it6ZQsWFSuSrAamalW6VwhTFWvMc1aYXKGhxhPkJxa0o452j6DdMYft2LPAgO/bbGdYWo/lur+i6jX5xcdSVzcXhhfz9jbH3FkFgFyBkV4pSYuK8EpHWkiEGSgsII5cPNQE+RMO26XRkeiHYEpz2XS0QXBuheS0q5yG5mxgznSQ07CcC8p0iQFggueen+9uckXDdhs2RqPRKPd4stmNO8VXGsQR5F/q4JRmtQd0tgnbmG6QjrvPmc5z3RWg0znhNDzTYQYATKFIeBpZ2q5ny1EG+SGBu6O73a6WgJEF6nTGOe1Ip2E67ESnc8sEaQAADuuoQZ7ADYJ1PO7R1aXuCtVpd5qxDgAACPI7uZVJwhnueH1tcUFocQRunEnEDsJwuWtdCtfh6EfarSZYAwCAVwnyd7fOXrxZf3sM3Mxw47TidaGDTcAGAABTNjfGmMViZRutPrdjvrKH0Cdq18GH5rmTHY+J7A3Z4XgI89YAAAA9gjxGHrOjjnY+aIc3OfYJ2nSyAQAAjms3I3///T3t9xMP26bQ1X666TEcG6GjDQAAMG505IdH7l2Azs1qlzrbhG0AAAC8TpBX8WO5sXVIdzv8mXPGSAAAAHB+Qf5fmD1CkM90uPeMkxC4AQAAQJD/n8DNSAkAAABw3CBfzZuvBG4AAADgPPwFoEVLGoPIAUgAAAAASUVORK5CYII=)"
                                        : ""
                                }}
                                onMouseEnter={() => setIsHoveredItem(id)}
                                onMouseLeave={() => setIsHoveredItem(0)}
                            >
                                {" " + label}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="hidden lg:flex gap-3">
                <Button variant="ghost" className="text-[15px] font-light bg-white hover:text-gray-500">
                    <Link href="/profile"> Mein Account </Link>
                </Button>
                <Button variant="ghost" className="text-[15px] font-medium bg-yellow-500 hover:bg-yellow-600 hover:text-white">
                    <Link href="/jobs/create"> Jobanzeige schalten </Link>
                </Button>
            </div>
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-0 z-10 text-black lg:hidden"
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
                                    <span
                                        className={`${pathname === link ? 'font-bold' : 'font-light'} hover:font-bold text-black bg-bottom bg-no-repeat bg-contain pb-1`}
                                        style={{
                                            backgroundImage: pathname === link || isHoveredItem === id
                                                ? "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAvIAAAAZCAYAAABTh8okAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEZ0lEQVR42u3dv3LTQBDH8VvZGZyhyKWEJvcK0NHBm/CGPEI66OAVREWZc5GJZ2xrKUicu9OdLA2J/0jfT+lxZEfyWL9drc5iAAAYKf1l7WplbddzNpuN69xGpa7Pa80qvenzPBG1qpXt/0+oVSN26P8uRq0xxr7CbnUj/bjUL7gtr0b8wOPljfT9G937XreN/C6/mHrZVsXXms/n2e0vFt7LB+/5Zjkdwi4AADx5+OFc37Crs8YazQfMcqgVV86r+YDYI5A6jhxwzIpZvBFtBXw1UueL2bhoEmm8alzEiFZ+o7qMHmvi7UmlflZd+CkXGgR5ADjEeS7TGd42a6tNHIRz3d+5yJVKY+MTX76rm4bhYghWsUbUcmQAjFwY/qMrJe2rIPGVjvCqRlhEhAXEsYsHgjyAyQTntKuchuZcYG51kDNjDmKyoxeOowAA0y0cwisScdHwXDDsioVg3CksFC4/1TVBHsDBpSMaafc5DdHtUYzuAN0Kz3SYAQDTKBJ2VxYI8sDIpZ3psCudzji3O9JxmA7HNlojGwRpAAAOiiAPnFKwDrrUA0O1S17GsacBACDIA4TrPuE6GP3I3GBIsAYAAAR5TDdkh3PW6VhIPGNdDNjB44yCAKP//lDjJbMsXnQilO71w0tL6GXU/d6TZpfqK7+/yldVM3hVjO16tnx72dy95P70y4fl9ZdxLu93d2utvbq8eolt3T9U17OL7aBtNU1lVZte5yQxlevxNNfxobbScf4rLQWrKlbEcN4kyGNMwpsaS51sQjZwNtG37ht2VcUbMX5IqFXTFMPubJb/m32BVD7++c1xA06vCFpt2it6ZQsWFSuSrAamalW6VwhTFWvMc1aYXKGhxhPkJxa0o452j6DdMYft2LPAgO/bbGdYWo/lur+i6jX5xcdSVzcXhhfz9jbH3FkFgFyBkV4pSYuK8EpHWkiEGSgsII5cPNQE+RMO26XRkeiHYEpz2XS0QXBuheS0q5yG5mxgznSQ07CcC8p0iQFggueen+9uckXDdhs2RqPRKPd4stmNO8VXGsQR5F/q4JRmtQd0tgnbmG6QjrvPmc5z3RWg0znhNDzTYQYATKFIeBpZ2q5ny1EG+SGBu6O73a6WgJEF6nTGOe1Ip2E67ESnc8sEaQAADuuoQZ7ADYJ1PO7R1aXuCtVpd5qxDgAACPI7uZVJwhnueH1tcUFocQRunEnEDsJwuWtdCtfh6EfarSZYAwCAVwnyd7fOXrxZf3sM3Mxw47TidaGDTcAGAABTNjfGmMViZRutPrdjvrKH0Cdq18GH5rmTHY+J7A3Z4XgI89YAAAA9gjxGHrOjjnY+aIc3OfYJ2nSyAQAAjms3I3///T3t9xMP26bQ1X666TEcG6GjDQAAMG505IdH7l2Azs1qlzrbhG0AAAC8TpBX8WO5sXVIdzv8mXPGSAAAAHB+Qf5fmD1CkM90uPeMkxC4AQAAQJD/n8DNSAkAAABw3CBfzZuvBG4AAADgPPwFoEVLGoPIAUgAAAAASUVORK5CYII=)"
                                                : ""
                                        }}
                                        onMouseEnter={() => setIsHoveredItem(id)}
                                        onMouseLeave={() => setIsHoveredItem(0)}
                                    >
                                        {" " + label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center items-center gap-3">
                        <Button variant="ghost" className="bg-white min-w-[170px] text-[15px] font-light hover:text-gray-500">
                            <Link href="/profile"> Mein Account </Link>
                        </Button>
                        <Button variant="ghost" className="text-[15px] font-medium bg-yellow-500 hover:bg-yellow-600 hover:text-white">
                            <Link href="/jobs/create"> Jobanzeige schalten </Link>
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;