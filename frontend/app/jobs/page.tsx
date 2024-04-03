"use client"
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from "react";
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
import { FaArrowRightLong } from "react-icons/fa6";
import { LuArrowLeftRight } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import SearchPanel from "@/components/searchPanel";
import { jobs } from "@/lib/mocks";
import FilterUnit from '@/components/filterUnit';
import QuickRegister from '@/components/quickRegister';
import { jobCategories, locations, experiences, remotes } from '@/lib/mocks';
import QuickJobAdPanel from '@/components/quickJobAdPanel';
import { useClientMediaQuery } from '@/components/hooks/useClientMediaQuery';

const Jobs = () => {
    const router = useRouter();
    const cardContainerRef = useRef<HTMLDivElement>(null);
    const isMobile = useClientMediaQuery('(max-width: 768px)');
    const [cardView, setCardView] = useState(false);
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

    useEffect(() => {
        if (!isMobile) {
          const cards = cardContainerRef.current?.querySelectorAll('.job-card');
          if (cards) {
            let maxHeight = 0;
    
            cards.forEach((card: any) => {
              maxHeight = Math.max(maxHeight, card.clientHeight);
            });
    
            cards.forEach((card: any) => {
              card.setAttribute('style', `height: ${maxHeight}px`);
            });
          }
        }
    
      }, [cardView, isMobile]);

    return (
        <div className="flex min-h-screen flex-col items-center py-20">
            <SearchPanel onSubmit={searchJobs} />
            <div className="py-8 flex flex-row gap-10">
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
                            <div className="md:text-4xl text-3xl font-bold whitespace-nowrap text-nowrap">Neue Jobs</div>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                            <div className="text-md text-gray-500 py-2 whitespace-nowrap text-nowrap">Seite 1 von 20</div>
                            <div className="w-full flex justify-end gap-3 md:pt-5 pt-2">
                                <Button
                                    variant="outline"
                                    className={`p-2 ${!cardView ? "!text-white !bg-primary" : "text-black bg-white"}`}
                                    onClick={() => setCardView(false)}
                                >
                                    <TfiMenuAlt className="w-6 h-6" />
                                </Button>
                                <Button
                                    variant="outline"
                                    className={`p-2 ${cardView ? "!text-white !bg-primary" : "text-black bg-white"}`}
                                    onClick={() => setCardView(true)}
                                >
                                    <LuArrowLeftRight className={`w-6 h-6`} />
                                </Button>
                            </div>
                        </div>

                    </div>
                    <div ref={cardContainerRef} className='flex flex-wrap justify-start items-start w-full'>
                        {!cardView && jobs?.slice(0, 8)?.map((job, i) =>
                            < Card
                                key={i}
                                className="group w-full flex justify-between items-center md:px-5 px-1 py-0 my-2 cursor-pointer transition duration-300 hover:border hover:border-blue-300"
                                onClick={() => router.push("/jobs/detail")}
                            >
                                <div className="flex flex-row items-center md:gap-5 gap-2">
                                    <span className="w-auto min-w-[50px]">
                                        <Image
                                            className="w-auto"
                                            src={job?.logo}
                                            alt="Logo"
                                            width={50}
                                            height={50}
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
                                        className="bg-white !border-none"
                                        onClick={() => { router.push("/jobdetail") }}
                                    >
                                        <FaArrowRightLong className="h-5 w-5 bg-white transition duration-300 group-hover:scale-x-140 group-hover:text-blue-500 group-hover:translate-x-2" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        )}
                        {cardView && jobs?.slice(0, 12)?.map((job, index) =>
                            <div key={index} className="job-card xl:w-1/3 lg:w-1/2 w-full p-2 py-0 my-2">
                                < Card
                                    className="group h-full flex flex-col justify-between items-center md:px-5 px-3 py-1 my-2 cursor-pointer shadow-sm transition duration-300 hover:border hover:border-blue-300"
                                    onClick={() => router.push("/jobs/detail")}
                                >
                                    <div className="mt-3 w-full h-full flex flex-row justify-between items-center md:gap-5 gap-2">
                                        <div className="relative w-auto min-w-[50px]">
                                            <Image
                                                className="w-auto h-full"
                                                src={job?.logo}
                                                alt="Logo"
                                                width={50}
                                                height={50}
                                                priority
                                            />
                                        </div>
                                        <div className="bg-[#E9E19D] px-4 py-1 text-xs rounded-md">
                                            {job?.remote}
                                        </div>
                                    </div>
                                    <div className="p-0 py-6">
                                        <CardDescription className="text-sm font-normal text-[#215085]">{job?.company}</CardDescription>
                                        <CardTitle className="text-lg font-medium">
                                            {job?.title}
                                        </CardTitle>
                                    </div>
                                    <div className="w-full flex items-center py-4 px-0 border-t">
                                        <div className="w-full flex flex-row justify-between items-center">
                                            <div className="flex flex-col justify-start items-start text-sm">
                                                <div className="font-bold flex flex-row justify-start items-center">
                                                    <IoLocationSharp className="w-5 h-5" />
                                                    <div>{job?.location}</div>
                                                </div>
                                                <div className="my-1 pl-1 font-medium text-gray-500">Vor zwei Tagen veroffentlicht</div>
                                            </div>
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                className="!bg-white !border-none"
                                                onClick={() => { router.push("/jobdetail") }}
                                            >
                                                <FaArrowRightLong className="h-5 w-5 bg-white transition duration-300 group-hover:scale-x-140 group-hover:text-blue-500 group-hover:translate-x-2" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        )}
                        <QuickRegister />
                        {!cardView && jobs?.slice(9, 20)?.map((job, i) =>
                            < Card
                                key={i}
                                className="group w-full flex justify-between items-center md:px-5 px-1 py-0 my-2 cursor-pointer transition duration-300 hover:border hover:border-blue-300"
                                onClick={() => router.push("/jobs/detail")}
                            >
                                <div className="flex flex-row items-center gap-5">
                                    <span className="w-auto min-w-[50px]">
                                        <Image
                                            className="w-auto"
                                            src={job?.logo}
                                            alt="Logo"
                                            width={50}
                                            height={50}
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
                                        className="bg-white !border-none"
                                        onClick={() => { router.push("/jobdetail") }}
                                    >
                                        <FaArrowRightLong className="h-5 w-5 bg-white transition duration-300 group-hover:scale-x-140 group-hover:text-blue-500 group-hover:translate-x-2" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        )}
                        {cardView && jobs?.slice(13, 25)?.map((job, index) =>
                            <div key={index} className="job-card xl:w-1/3 lg:w-1/2 w-full p-2 py-0 my-2">
                                < Card
                                    className="group h-full flex flex-col justify-between items-center md:px-5 px-3 py-1 my-2 cursor-pointer shadow-sm transition duration-300 hover:border hover:border-blue-300"
                                    onClick={() => router.push("/jobs/detail")}
                                >
                                    <div className="mt-3 w-full flex flex-row justify-between items-center md:gap-5 gap-2">
                                        <div className="relative w-auto min-w-[50px]">
                                            <Image
                                                className="w-auto h-full"
                                                src={job?.logo}
                                                alt="Logo"
                                                width={50}
                                                height={50}
                                                priority
                                            />
                                        </div>
                                        <div className="bg-[#E9E19D] px-4 py-1 text-xs rounded-md">
                                            {job?.remote}
                                        </div>
                                    </div>
                                    <div className="p-0 py-6">
                                        <CardDescription className="text-sm font-normal text-[#215085]">{job?.company}</CardDescription>
                                        <CardTitle className="text-lg font-medium">
                                            {job?.title}
                                        </CardTitle>
                                    </div>
                                    <div className="w-full flex items-center py-4 px-0 border-t">
                                        <div className="w-full flex flex-row justify-between items-center">
                                            <div className="flex flex-col justify-start items-start text-sm">
                                                <div className="font-bold flex flex-row justify-start items-center">
                                                    <IoLocationSharp className="w-5 h-5" />
                                                    <div>{job?.location}</div>
                                                </div>
                                                <div className="my-1 pl-1 font-medium text-gray-500">Vor zwei Tagen veroffentlicht</div>
                                            </div>
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                className="!bg-white !border-none"
                                                onClick={() => { router.push("/jobdetail") }}
                                            >
                                                <FaArrowRightLong className="h-5 w-5 bg-white transition duration-300 group-hover:scale-x-140 group-hover:text-blue-500 group-hover:translate-x-2" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </div>
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