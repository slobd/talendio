"use client"
import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LuArrowLeftRight } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import SearchPanel from "@/components/searchPanel";
import { jobs } from "@/lib/mocks";
import FilterUnit from '@/components/filterUnit';
import QuickRegister from '@/components/quickRegister';
import { jobCategories, locations, experiences, remotes } from '@/lib/mocks';
import { useClientMediaQuery } from '@/components/hooks/useClientMediaQuery';
import QuickJobAdPanel from '@/components/quickJobAdPanel';

const Jobs = () => {
    const router = useRouter();
    const isMobile = useClientMediaQuery('(max-width: 768px)');
    const [searchKey, setSearchKey] = useState("");
    const [showFilterPanel, setShowFilterPanel] = useState(true);

    const searchJobs = (_searchKey: string) => {
        setSearchKey(_searchKey);
    };

    const handleFilter = (_data: any) => {

    };

    useEffect(() => {
        isMobile && setShowFilterPanel(false);
    }, [isMobile])

    return (
        <div className="py-20">
            <SearchPanel onSubmit={searchJobs} />
            <div className="md:px-16 px-2 py-8 flex flex-row gap-10">
                <div className={`w-[300px] min-w-[300px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-[300px] bottom-0 left-0 z-10 ${showFilterPanel ? "ml-0" : "ml-[-300px] md:ml-0"}`}>
                    <Button
                        className="border p-0 w-10 h-10 flex md:hidden items-center justify-center bg-white text-black shadow absolute top-0 right-0 translate-x-full rounded-r-lg cursor-pointer"
                        onClick={() => setShowFilterPanel(prev => !prev)}
                    >
                        <MdOutlineKeyboardDoubleArrowRight className={`w-6 h-6 hover:text-white ${!showFilterPanel ? `rotate-0` : `rotate-180`} transition duration-300`} />
                    </Button>
                    <div className='border rounded-md overflow-auto md:h-auto h-full py-4 bg-white'>
                        <FilterUnit title={"Kategorien"} items={jobCategories} onChange={handleFilter} />
                        <FilterUnit title={"Orte"} items={locations} onChange={handleFilter} />
                        <FilterUnit title={"Erfahrung"} items={experiences} onChange={handleFilter} />
                        <FilterUnit title={"Remote"} items={remotes} onChange={handleFilter} />
                    </div>
                    <QuickJobAdPanel />
                </div>
                <div className="w-full">
                    <div className="flex flex-col justify-between items-start py-1 w-full">
                        <div>
                            <div className="md:text-4xl text-3xl font-bold">Neue Jobs</div>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                            <div className="text-md text-gray-500 py-2">Seite 1 von 20</div>
                            <div className="flex gap-3 md:pt-3 pt-0">
                                <Button
                                    className="p-2"
                                >
                                    <TfiMenuAlt className="w-6 h-6" />
                                </Button>
                                <Button variant="outline" className="p-2">
                                    <LuArrowLeftRight className="w-6 h-6" />
                                </Button>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col'>
                        {jobs?.slice(0, 8)?.map((job, i) =>
                            < Card key={i} className="group flex justify-between items-center md:px-5 px-1 py-0 my-2 cursor-pointer shadow-sm transition duration-300 hover:shadow-lg hover:border hover:border-blue-300">
                                <div className="flex flex-row items-center md:gap-5 gap-2">
                                    <span className="w-auto min-w-[50px]">
                                        <Image
                                            className="w-auto"
                                            src={job?.logo}
                                            alt="Logo"
                                            width={50}
                                            height={30}
                                            priority
                                        />
                                    </span>
                                    <CardHeader className="p-0 py-6">
                                        <CardDescription className="text-sm font-light">{job?.remote}</CardDescription>
                                        <CardTitle className="text-lg font-medium">
                                            {job?.title}
                                        </CardTitle>
                                        <CardDescription className="text-sm font-normal text-black">{job?.company}</CardDescription>
                                    </CardHeader>
                                </div>
                                <CardFooter className="flex items-center p-0">
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        onClick={() => { router.push("/jobdetail") }}
                                    >
                                        <MdKeyboardArrowRight className="h-5 w-5 bg-white transition duration-300 group-hover:scale-x-140 group-hover:text-blue-500 group-hover:translate-x-2" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        )}
                        <QuickRegister />
                        {jobs?.slice(9, 20)?.map((job, i) =>
                            < Card key={i} className="group flex justify-between items-center px-5 py-1 my-2 gap-3 cursor-pointer shadow-sm transition duration-300 hover:shadow-lg hover:border hover:border-blue-300">
                                <div className="flex flex-row items-center gap-5">
                                    <span className="w-auto min-w-[50px]">
                                        <Image
                                            className="w-auto"
                                            src={job?.logo}
                                            alt="Logo"
                                            width={50}
                                            height={30}
                                            priority
                                        />
                                    </span>
                                    <CardHeader className="p-0 py-6">
                                        <CardDescription className="text-sm font-light">{job?.remote}</CardDescription>
                                        <CardTitle className="text-lg font-medium">
                                            {job?.title}
                                        </CardTitle>
                                        <CardDescription className="text-sm font-normal text-black">{job?.company}</CardDescription>
                                    </CardHeader>
                                </div>
                                <CardFooter className="flex items-center p-0">
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        onClick={() => { router.push("/jobdetail") }}
                                    >
                                        <MdKeyboardArrowRight className="h-5 w-5 bg-white transition duration-300 group-hover:scale-x-140 group-hover:text-blue-500 group-hover:translate-x-2" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        )}
                        <div className='flex justify-center items-center py-5'>
                            <Button className="rounded-sm font-bold bg-black text-sm">
                                NÄCHSTE SEITE
                                <MdKeyboardArrowRight className="w-7 h-7 pl-1" />
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;