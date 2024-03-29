"use client"
import Image from "next/image";
import { NextPage } from "next";
import { Button } from "./ui/button";
import { Separator } from "@radix-ui/react-separator";
import { CiBookmark } from "react-icons/ci";

const RecruitingTeamCard: NextPage = () => {

    return (
        <div className="bg-white p-4 mt-10 rounded-sm text-white rounded-md border border-gray-400">
            <div className="flex flex-row lg:justify-start justify-center items-center pt-2 pb-5 gap-3">
                <div className="relative w-auto lg:min-w-[50px] min-w-[25px] p-3 border border-gray-400 rounded-md">
                    <Image
                        className="w-auto h-full"
                        src={"/images/jobs/job_logo_4.png"}
                        alt="Logo"
                        width={25}
                        height={25}
                        priority
                    />
                </div>
                <div className="flex flex-col text-black">
                    <div className="text-xs font-semibold text-gray-600">Anspretchpartner</div>
                    <div className="text-lg font-bold my-1">Recruiting Team</div>
                </div>
            </div>
            <div className="flex lg:justify-start justify-center ">
                <Button className="w-full max-w-[300px] rounded-sm font-bold bg-[#3C69BE] text-sm text-white">
                    Jetzt bewerben
                </Button>
            </div>
            <div className="relative my-6" >
                <div className="h-[1px] bg-gray-300"></div>
                <div className="absolute -top-3 lg:left-[41%] sm:left-[45%] left-[40%] text-black font-semibold bg-white px-2">Oder</div>
            </div>
            <div className="flex lg:justify-start justify-center ">
                <div className="mb-6 text-xs font-semibold text-gray-600">
                    Gerade keine Zeit? Dann bewirb Dich später und lass Dir diesen Job per E-Mail zusenden
                </div>
            </div>
            <div className="flex lg:justify-start justify-center ">
                <Button className="w-full max-w-[300px] rounded-sm font-bold bg-white text-sm text-[#3C69BE] border border-[#3C69BE]">
                    <CiBookmark className="w-7 h-7 pr-1" />
                    Später bewerben
                </Button>
            </div>
        </div>
    );
};

export default RecruitingTeamCard;