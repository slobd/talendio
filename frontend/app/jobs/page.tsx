"use client"

import { useRouter } from 'next/navigation';
import { useState } from "react";
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

import SearchPanel from "@/components/searchPanel";
import { jobs } from "@/lib/mocks";

const Jobs = () => {
    const router = useRouter();
    const [searchKey, setSearchKey] = useState("");

    const searchJobs = (_searchKey: string) => {
        setSearchKey(_searchKey);
    };

    return (
        <div className="py-20">
            <SearchPanel onSubmit={searchJobs} />
            <div className="py-5 flex flex-row">
                <div className='filters md:flex flex-col hidden'>

                </div>
                <div>
                    <div className="flex md:flex-row flex-col justify-between items-center pb-3 pt-9">
                        <div>
                            <div className="text-4xl font-bold">Neue Jobs</div>
                            <div className="text-md text-gray-500 py-2 pt-4">Seite 1 von 20</div>
                        </div>
                        <div className="flex gap-3 md:pt-5 pt-2">
                            <Button className="p-2">
                                <TfiMenuAlt className="w-6 h-6" />
                            </Button>
                            <Button variant="outline" className="p-2">
                                <LuArrowLeftRight className="w-6 h-6" />
                            </Button>
                        </div>
                    </div>
                    <div>
                        {jobs?.slice(0, 8)?.map((job, i) =>
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
                                        <CardTitle className="text-md">{job?.title}</CardTitle>
                                        <CardDescription>
                                            {job?.description}
                                        </CardDescription>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;