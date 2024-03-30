"use client"
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button";
import SearchPanel from "@/components/searchPanel";
import { OptionType } from "@/lib/types";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LuArrowLeftRight } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";
import { GiCheckMark } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { jobs, employers, magazines, topics, tools, partners } from "@/lib/mocks";
import NewsletterPanel from "@/components/newsletter";
import { lightColors } from "@/lib/constants";
import { useClientMediaQuery } from '@/components/hooks/useClientMediaQuery';

const matchJobTabs: OptionType[] = [
  { label: "Alle", value: "alle" },
  { label: "Stadtteil 1", value: "stadtteil_1" },
  { label: "Stadtteil 2", value: "stadtteil_2" },
  { label: "Stadtteil 3", value: "stadtteil_3" },
  { label: "Stadtteil 4", value: "stadtteil_4" },
  { label: "Stadtteil 5", value: "stadtteil_5" },
];

const employerTabs: OptionType[] = [
  { label: "Top Arbeitgeber", value: "top_employer" },
  { label: "Handwerk", value: "handwerk" },
  { label: "Finanzen", value: "finance" },
  { label: "Dienstleistungen", value: "service" },
  { label: "Einzelhandel", value: "retail" },
  { label: "Transport", value: "transport" },
  { label: "Industrie", value: "industry" },
];

const magazineTabs: OptionType[] = [
  { label: "Top Arbeitgeber", value: "top_employer" },
  { label: "Handwerk", value: "handwerk" },
  { label: "Finanzen", value: "finance" },
  { label: "Dienstleistungen", value: "service" },
  { label: "Einzelhandel", value: "retail" },
  { label: "Transport", value: "transport" },
  { label: "Industrie", value: "industry" },
];

const topicTabs: OptionType[] = [
  { label: "Alle", value: "alle" },
  { label: "Karrieretage", value: "karrieretage" },
  { label: "Messen", value: "messen" },
];

export default function Home() {
  const router = useRouter();
  const isMobile = useClientMediaQuery('(max-width: 768px)');
  const [searchKey, setSearchKey] = useState("");
  const [cardView, setCardView] = useState(false);
  const [activeJobTab, setActiveJobTab] = useState("alle");
  const [activeEmployerTab, setActiveEmployerTab] = useState("top_employer");
  const [activeMagazineTab, setActiveMagazineTab] = useState("top_employer");
  const [activeTopicTab, setActiveTopicTab] = useState("alle");

  const cardContainerRef = useRef<HTMLDivElement>(null);

  const searchJobs = (_searchKey: string) => {
    setSearchKey(_searchKey);
  };

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
    <main className="flex min-h-screen flex-col items-center justify-start py-20">
      {/* Search Panel */}
      <SearchPanel onSubmit={searchJobs} />
      {/* Matching Jobs */}
      <div className="w-full md:px-16 px-4">
        <div className="flex md:flex-row flex-col justify-between items-center pb-3 pt-9">
          <div className="w-full">
            <div className="md:text-4xl text-3xl font-bold">Neue Jobangebote</div>
          </div>
          <div className="w-full flex justify-end gap-3 md:pt-5 pt-2">
            <Button variant="outline" className="p-2 bg-white">
              <TfiMenuAlt className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              className={`p-2 ${cardView ? "!text-white !bg-primary" : "text-black bg-white"}`}
              onClick={() => setCardView(prev => !prev)}
            >
              <LuArrowLeftRight className={`w-6 h-6`} />
            </Button>
          </div>
        </div>
        <Tabs
          value={activeJobTab}
        >
          <TabsList className="flex justify-start flex-row overflow-x-auto">
            {matchJobTabs?.map((tab: OptionType, index) =>
              <TabsTrigger
                key={index}
                className={`text-xs ${activeJobTab == tab.value ? "border-yellow-400" : "border-[#F1F5F9]"} border-b-[3px] transition duration-500 hover:border-yellow-400 hover:bg-white`}
                value={tab.value}
                onClick={() => setActiveJobTab(tab.value)}
              >
                {tab.label}
              </TabsTrigger>
            )}
          </TabsList>
          <TabsContent value={activeJobTab}>
            <div ref={cardContainerRef} className="flex flex-wrap justify-start items-start">
              {!cardView && jobs?.slice(0, 8)?.map((job, index) =>
                <div key={index} className="xl:w-1/2 w-full p-0">
                  < Card
                    className="group flex justify-between items-center md:px-5 px-1 py-1 my-2 cursor-pointer transition duration-300 hover:border hover:border-blue-300"
                    onClick={() => router.push("/jobs/detail")}
                  >
                    <div className="flex flex-row items-center md:gap-5 gap-2 w-auto">
                      <div className="flex justify-center items-center w-auto min-w-[50px] h-auto">
                        <Image
                          className="w-auto h-full"
                          src={job?.logo}
                          alt="Logo"
                          width={50}
                          height={50}
                          priority
                        />
                      </div>
                      <CardHeader className="p-0 py-6">
                        <CardDescription className="text-sm font-light">{job?.remote}</CardDescription>
                        <CardTitle className="text-lg font-medium">
                          {job?.title}
                        </CardTitle>
                      </CardHeader>
                    </div>
                    <CardFooter className="flex items-center p-0">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="!bg-white !border-none"
                        onClick={() => { router.push("/jobdetail") }}
                      >
                        <FaArrowRightLong className="h-5 w-5 bg-white transition duration-300 group-hover:scale-x-140 group-hover:text-blue-500 group-hover:translate-x-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              )}
              {cardView && jobs?.slice(0, 8)?.map((job, index) =>
                <div key={index} className="job-card xl:w-1/4 lg:w-1/3 md:w-1/2 w-full p-2 py-0 my-2">
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
            </div>
          </TabsContent>

          <div className="w-full flex justify-end gap-3 md:pt-5 pt-2">
            <Button variant="outline" className="md:w-auto w-full border-2 border-black rounded-sm font-bold">
              Alle Jobs anzeigen
              <MdKeyboardArrowRight className="w-7 h-7 pl-1 md:block hidden" />
            </Button>
          </div>
        </Tabs>
      </div>
      {/* Newsletter  */}
      <NewsletterPanel />
      {/* Empolyers */}
      <div className="w-full md:px-16 px-4">
        <div className="flex md:flex-row flex-col justify-between items-center pb-3 pt-9">
          <div className="w-full">
            <div className="md:text-4xl text-3xl font-bold">Arbeitgeber in Stadtname</div>
            <div className="text-md text-gray-500 py-2 pt-4">Entdecke interessante Unternehmen in Deiner Stadt</div>
          </div>
        </div>
        <Tabs
          value={activeEmployerTab}
          className="p-0 m-0"
        >
          <TabsList className="flex justify-start flex-row overflow-x-auto p-0">
            {employerTabs?.map((tab: OptionType, index) =>
              <TabsTrigger
                key={index}
                className={`text-xs ${activeEmployerTab == tab.value ? "border-yellow-400" : "border-[#F1F5F9]"} border-b-[3px] transition duration-500 hover:border-yellow-400 hover:bg-white`}
                value={tab.value}
                onClick={() => setActiveEmployerTab(tab.value)}
              >
                {tab.label}
              </TabsTrigger>
            )}
          </TabsList>
          <TabsContent value={activeEmployerTab}>
            <Carousel
              opts={{ align: "start" }}
              className="w-full p-0"
            >
              <CarouselContent>
                {employers.map((item, index) => (
                  <CarouselItem key={index} className="xl:basis-1/5 lg:basis-1/4 md:basis-1/3 sm:basis-1/2">
                    < div key={index} className="relative flex flex-col justify-between items-center text-center px-5 py-1 my-2 gap-3 cursor-pointer shadow-sm transition duration-300 border rounded-md hover:border hover:border-gray-400">
                      <div className={`absolute top-0 w-full h-24 opacity-50 overflow-hidden ${lightColors[index % lightColors.length]}`}></div>
                      <div className="z-10 bg-white p-2.5 border rounded-[7px] border-gray-300 mt-10">
                        <Image
                          className="w-20 h-20"
                          src={item?.logo}
                          alt="logo"
                          width={40}
                          height={40}
                          priority
                        />
                      </div>
                      <div className="px-0">
                        <CardTitle className="text-lg text-nowrap whitespace-nowrap">{item?.name}</CardTitle>
                        <div className="flex flex-col text-black items-center text-sm">
                          <span>{item?.count} Offene Stellen</span>
                        </div>
                      </div>
                      <CardFooter className="flex items-center p-1">
                        <Button
                          variant="ghost"
                          className="text-xs font-bold mb-5"
                          onClick={() => { }}
                        >
                          Unternehmen ansehen
                          <MdKeyboardArrowRight className="h-5 w-5 bg-extrabold" />
                        </Button>
                      </CardFooter>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-5 w-10 h-10 border border-gray-300" />
              <CarouselNext className="-right-5 w-10 h-10 border border-gray-300" />
            </Carousel>
            <div className="w-full flex justify-end gap-3 md:pt-5 pt-2">
              <Button variant="outline" className="md:w-auto w-full border-2 border-black rounded-sm font-bold">
                Alle Arbeitgeber
                <MdKeyboardArrowRight className="w-7 h-7 pl-1 md:block hidden" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* Magazine */}
      <div className="w-full md:px-16 px-4">
        <div className="flex md:flex-row flex-col justify-between items-center pb-3 pt-9">
          <div className="w-full">
            <div className="md:text-4xl text-3xl font-bold">Magazin</div>
          </div>
        </div>
        <Tabs
          value={activeMagazineTab}
        >
          <TabsList className="flex justify-start flex-row overflow-x-auto p-0">
            {magazineTabs?.map((tab: OptionType, index) =>
              <TabsTrigger
                key={index}
                className={`text-xs ${activeMagazineTab == tab.value ? "border-yellow-400" : "border-[#F1F5F9]"} border-b-[3px] transition duration-500 hover:border-yellow-400 hover:bg-white`}
                value={tab.value}
                onClick={() => setActiveMagazineTab(tab.value)}
              >
                {tab.label}
              </TabsTrigger>
            )}
          </TabsList>
          <TabsContent value={activeMagazineTab}>
            <div className="flex flex-wrap justify-start items-start">
              {magazines?.map((item, index) => (
                <div key={index} className="flex gap-3 xl:w-1/3 md:w-1/2 p-3 px-0">
                  <Card className="border-none shadow-none w-full flex flex-col justify-start items-start my-2 gap-3 cursor-pointer transition duration-300">
                    <span className="w-full h-full overflow-hidden rounded-md">
                      <Image
                        className="w-full h-full hover:scale-105 transition duration-300"
                        src={item?.image}
                        alt="magazine"
                        width={600}
                        height={400}
                        priority
                      />
                    </span>
                    <CardHeader className="p-0 w-full">
                      <CardDescription className="flex flex-row gap-3 text-gray-400">
                        <span>{item?.name}</span>
                        <span className="cursor-auto">{item?.date}</span>
                      </CardDescription>
                      <CardTitle className="text-lg">{item?.title}</CardTitle>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>
          <div className="w-full flex justify-end gap-3 md:pt-5 pt-2">
            <Button variant="outline" className="md:w-auto w-full border-2 border-black rounded-sm font-bold">
              Alle Artikel ansehen
              <MdKeyboardArrowRight className="w-7 h-7 pl-1 md:block hidden" />
            </Button>
          </div>
        </Tabs>
      </div>
      {/* Hot Topics */}
      <div className="w-full md:px-16 px-4">
        <div className="flex md:flex-row flex-col justify-between items-center pb-3 pt-9">
          <div className="w-full">
            <div className="md:text-4xl text-3xl font-bold">Veranstaltungen</div>
          </div>
        </div>
        <Tabs
          value={activeTopicTab}
        >
          <TabsList className="flex justify-start flex-row overflow-x-auto p-0">
            {topicTabs?.map((tab: OptionType, index) =>
              <TabsTrigger
                key={index}
                className={`text-xs ${activeTopicTab == tab.value ? "border-yellow-400" : "border-[#F1F5F9]"} border-b-[3px] transition duration-500 hover:border-yellow-400 hover:bg-white`}
                value={tab.value}
                onClick={() => setActiveTopicTab(tab.value)}
              >
                {tab.label}
              </TabsTrigger>
            )}
          </TabsList>
          <TabsContent value={activeTopicTab}>
            <div className="flex flex-wrap justify-start items-center">
              {topics?.map((topic, index) => (
                <div key={index} className="flex xl:w-1/3 lg:w-1/2 !border-none !shadow-none">
                  <Card className="!border-none !shadow-none flex flex-row justify-start items-center my-2 gap-3 cursor-pointer transition duration-300">
                    <span className="w-[100px] h-[55px] min-h-[55px] min-w-[100px] overflow-hidden rounded-md">
                      <Image
                        className="w-[100px] h-[55px] hover:scale-110 transition duration-300"
                        src={topic?.image}
                        alt="topic Image"
                        width={100}
                        height={55}
                        priority
                      />
                    </span>
                    <CardHeader className="p-0 !border-none !shadow-none">
                      <CardTitle className="text-md font-medium">{topic?.name}: {topic?.title}</CardTitle>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
            <div className="w-full flex justify-end gap-3 md:pt-5 pt-2">
              <Button variant="outline" className="md:w-auto w-full border-2 border-black rounded-sm font-bold">
                Alle Artikel
                <MdKeyboardArrowRight className="w-7 h-7 pl-1 md:block hidden" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* Newsletter  */}
      <NewsletterPanel />
      {/* Studies & Tools */}
      <div className="w-full md:px-16 px-4">
        <div className="flex md:flex-row flex-col justify-between items-center pb-3 pt-9">
          <div className="w-full">
            <div className="md:text-4xl text-3xl font-bold">Studies & Tools</div>
            <div className="text-md text-gray-500 py-2 pt-4">Die Weiterbildung für Onliner</div>
          </div>
        </div>
        <Tabs
          value={""}
        >
          <TabsContent value={""}>
            <Carousel
              opts={{ align: "start" }}
              className="w-full"
            >
              <CarouselContent>
                {tools?.map((item, index) => (
                  <CarouselItem key={index} className="lg:basis-1/2">
                    <div className="border-none flex sm:flex-row flex-col justify-start sm:items-start items-center my-2 gap-3 cursor-pointer transition duration-300">
                      <span className="w-auto sm:h-auto min-w-[180px] min-h-[250px] overflow-hidden rounded-md">
                        <Image
                          className="h-full min-h-[250px] max-h-[250px] hover:scale-105 transition duration-300"
                          src={item?.image}
                          alt="study and tools"
                          width={180}
                          height={250}
                          priority
                        />
                      </span>
                      <div className="p-0">
                        <div className="text-xl font-bold mb-2 sm:text-start text-center sm:px-0 px-4">{item?.title}</div>
                        <div>
                          {item?.benefits?.map((item, i) =>
                            <div key={i} className="flex flex-row justify-start gap-3 text-sm my-2.5">
                              <GiCheckMark className="w-4 h-4 min-w-4 min-h-4 text-yellow-400" />
                              <span>{item}</span>
                            </div>
                          )}
                        </div>
                        <div className="flex sm:justify-start justify-center">
                          <Button
                            variant="ghost"
                            className="font-bold my-2 rounded-sm bg-yellow-500 hover:bg-yellow-600 hover:text-white"
                            onClick={() => { }}
                          >
                            ZUM REPORT
                          </Button>
                        </div>

                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-5 w-10 h-10 border border-gray-300" />
              <CarouselNext className="-right-5 w-10 h-10 border border-gray-300" />
            </Carousel>
          </TabsContent>
        </Tabs>
      </div>
      {/* Partner */}
      <div className="w-full md:px-16 px-4">
        <div className="flex md:flex-row flex-col justify-between items-center pb-3 pt-9">
          <div className="w-full">
            <div className="md:text-4xl text-3xl font-bold md:text-start text-center">Partner</div>
            <div className="text-md text-gray-500 py-2 pt-4">Die bunte Welt unserer OMR Familie und OMR Partner Cases!</div>
          </div>
        </div>
        <Tabs
          value={""}
        >
          <TabsContent value={""}>
            <Carousel
              opts={{ align: "start" }}
              className="w-full"
            >
              <CarouselContent>
                {partners?.map((partner, index) => (
                  <CarouselItem key={index} className="group xl:basis-1/4 lg:basis-1/3 md:basis-1/2">
                    <div className=" relative rounded-sm border-none flex flex-row justify-start items-start gap-3 cursor-pointer">
                      <span className="w-full overflow-hidden rounded-sm p-0 m-0 border transition duration-300 group-hover:border-black">
                        <Image
                          className="w-full rounded-sm"
                          src={partner?.image}
                          alt="report"
                          width={250}
                          height={250}
                          priority
                        />
                      </span>
                      <div className="absolute w-full top-[25%] text-center text-white text-2xl font-bold my-3">{partner?.title}</div>
                      <div className="absolute w-full bottom-7 flex justify-center items-center">
                        <Button variant="ghost" className="!text-white text-xs px-2 py-1 rounded-sm h-7 tansition duration-300 hover:bg-gray-600 group-hover:bg-gray-600">
                          DETAILS ANSEHEN
                          <MdKeyboardArrowRight className="w-6 h-6 pl-1" />
                        </Button>
                      </div>

                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-5 w-10 h-10 border border-gray-300" />
              <CarouselNext className="-right-5 w-10 h-10 border border-gray-300" />
            </Carousel>
          </TabsContent>
        </Tabs>
      </div>
    </main >
  );
}
