"use client"
import Image from "next/image";
import { useRouter } from 'next/navigation';
import dynamic from "next/dynamic";
import { useState } from "react";
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
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { LuArrowLeftRight } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";
import { jobs, reviews, articles, topics } from "@/lib/mocks";
import NewsletterPanel from "@/components/newsletter";
import { colors } from "@/lib/constants";

const ReactStars = dynamic(() => import("react-stars"), {
  ssr: false,
});

const matchJobTabs: OptionType[] = [
  { label: "TOP JOBS", value: "top" },
  { label: "HAMBRUG", value: "hamburg" },
  { label: "BERLIN", value: "berlin" },
  { label: "MÜNCHEN", value: "munich" },
  { label: "KÖLN", value: "cologne" },
  { label: "BREMEN", value: "bremen" },
];

const OMRReviewTabs: OptionType[] = [
  { label: "TOOLS TO WATCH", value: "tools_to_watch" },
  { label: "COLLABORATION", value: "collaboration" },
  { label: "HR", value: "hr" },
  { label: "PROJEKTMANAGEMENT", value: "project_management" },
  { label: "VIDEO CONFERENCING", value: "video_conferencing" },
  { label: "INSTANT MESSAGING", value: "instant_messaging" },
  { label: "DESIGN", value: "design" },
  { label: "SEO", value: "seo" },
  { label: "CONTENT MARKETING", value: "content_marketing" },
];

const topicTabs: OptionType[] = [
  { label: "DAILY", value: "daily" },
  { label: "REVIEWS", value: "reviews" },
  { label: "PODSTARS", value: "podstarts" },
];

export default function Home() {
  const router = useRouter();
  const [searchKey, setSearchKey] = useState("");
  // const [jobs, setJobs] = useState([]);
  const [matchingJobs, setMatchingJobs] = useState([]);
  const [activeJobTab, setActiveJobTab] = useState("top");
  const [activeReviewTab, setActiveReviewTab] = useState("tools_to_watch");
  const [activeTopicTab, setActiveTopicTab] = useState("daily");


  const searchJobs = (_searchKey: string) => {
    console.log("searchKey", _searchKey);
    setSearchKey(_searchKey);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-20">
      {/* Search Panel */}
      <SearchPanel onSubmit={searchJobs} />
      {/* Matching Jobs */}
      <div className="w-full px-16">
        <div className="flex md:flex-row flex-col justify-between items-center py-3">
          <div className="text-4xl font-bold">520 passende Jobs</div>
          <div className="flex gap-3 md:pt-5 pt-2">
            <Button variant="outline" className="border-2 border-black">
              ALLE JOBS
              <MdKeyboardArrowRight className="w-7 h-7 pl-1" />
            </Button>
            <Button className="p-2">
              <TfiMenuAlt className="w-6 h-6" />
            </Button>
            <Button variant="outline">
              <LuArrowLeftRight className="w-7 h-7 pr-1" />Tinder
            </Button>
          </div>
        </div>
        <Tabs
          value={activeJobTab}
        >
          <TabsList className="flex justify-start flex-wrap h-auto">
            {matchJobTabs?.map((tab: OptionType, index) =>
              <TabsTrigger
                key={index}
                className={`text-sm ${activeJobTab == tab.value ? "border-yellow-400" : "border-[#F1F5F9]"} border-b-4 transition duration-500 hover:border-yellow-400 hover:bg-white`}
                value={tab.value}
                onClick={() => setActiveJobTab(tab.value)}
              >
                {tab.label}
              </TabsTrigger>
            )}
          </TabsList>
          <TabsContent value={activeJobTab}>
            <Carousel
              opts={{ align: "start" }}
              className="w-full"
            >
              <CarouselContent>
                {Array.from({ length: jobs.length / 6 }).map((_, index) => (
                  <CarouselItem key={index} className="md:basis-1/2">
                    {jobs?.slice(index * 6, index * 6 + 5)?.map((job, i) =>
                      < Card key={i} className="job-card flex justify-between items-center px-5 py-1 my-2 gap-3 cursor-pointer shadow-sm transition duration-300 hover:shadow-lg hover:border hover:border-blue-300">
                        <span className="w-auto min-w-[50px]">
                          <Image
                            className="w-auto"
                            src={job?.logo}
                            alt="Logo"
                            width={80}
                            height={60}
                            priority
                          />
                        </span>
                        <CardHeader className="p-0 py-6">
                          <CardTitle className="text-md">{job?.title}</CardTitle>
                          <CardDescription>
                            {job?.description}
                          </CardDescription>
                        </CardHeader>
                        <CardFooter className="flex items-center p-0">
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => { router.push("/jobdetail") }}
                          >
                            <FaArrowRightLong className="h-5 w-5 bg-white transition duration-300 job-card-hover:scale-x-150 job-card-hover:text-blue-500 job-card-hover:translate-x-2" />
                          </Button>
                        </CardFooter>
                      </Card>
                    )}
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-5 w-10 h-10 border border-gray-300" />
              <CarouselNext className="-right-5 w-10 h-10 border border-gray-300" />
            </Carousel>
          </TabsContent>
        </Tabs>
      </div>
      {/* Newsletter  */}
      <NewsletterPanel />
      {/* OMR Reviews */}
      <div className="w-full px-16">
        <div className="flex md:flex-row flex-col justify-between items-center py-3">
          <div className="text-4xl font-bold">OMR Reviews</div>
          <div className="flex gap-3 md:pt-5 pt-2">
            <Button variant="outline" className="border-2 border-black">
              ALLE REVIEWS
              <MdKeyboardArrowRight className="w-7 h-7 pl-1" />
            </Button>
          </div>
        </div>
        <Tabs
          value={activeReviewTab}
        >
          <TabsList className="flex justify-start flex-wrap h-auto">
            {OMRReviewTabs?.map((tab: OptionType, index) =>
              <TabsTrigger
                key={index}
                className={`${activeReviewTab == tab.value ? "border-yellow-400" : "border-[#F1F5F9]"} border-b-4 transition duration-500 hover:border-yellow-400 hover:bg-white`}
                value={tab.value}
                onClick={() => setActiveReviewTab(tab.value)}
              >
                {tab.label}
              </TabsTrigger>
            )}
          </TabsList>
          <TabsContent value={activeReviewTab}>
            <Carousel
              opts={{ align: "start" }}
              className="w-full"
            >
              <CarouselContent>
                {reviews.map((review, index) => (
                  <CarouselItem key={index} className="xl:basis-1/4 lg:basis-1/3 sm:basis-1/2">
                    < div key={index} className="relative flex flex-col justify-between items-center text-center px-5 py-1 my-2 gap-3 cursor-pointer shadow-sm transition duration-300 border rounded-md hover:shadow-lg hover:border hover:border-gray-400">
                      <span className={`absolute top-0 w-full h-20 bg-${colors[index % colors.length]}-300 opacity-50 overflow-hidden `}></span>
                      <span className="z-10 bg-white p-2.5 border border-gray-300 mt-10">
                        <Image
                          className="w-12 h-12"
                          src={review?.logo}
                          alt="logo"
                          width={40}
                          height={40}
                          priority
                        />
                      </span>
                      <div className="px-0">
                        <CardTitle className="text-lg">{review?.name}</CardTitle>
                        <div className="flex flex-col text-black items-center">
                          <ReactStars
                            value={review?.rate}
                            edit={false}
                            count={5}
                            size={24}
                            color2={'#ffd700'}
                          />
                          <span>{review?.count} Reviews</span>
                        </div>
                      </div>
                      <CardFooter className="flex items-center p-1">
                        <Button
                          variant="ghost"
                          className="text-xs font-bold mb-5"
                          onClick={() => { router.push("/detail") }}
                        >
                          REVIEWS ANSEHEN
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
          </TabsContent>
        </Tabs>
      </div>
      {/* OMR Articles */}
      <div className="w-full px-16">
        <div className="flex md:flex-row flex-col justify-between items-center py-3">
          <div className="text-4xl font-bold">OMR Daily</div>
          <div className="flex gap-3 md:pt-5 pt-2">
            <Button variant="outline" className="border-2 border-black">
              ALLE DAILY ARTIKEL
              <MdKeyboardArrowRight className="w-7 h-7 pl-1" />
            </Button>
          </div>
        </div>
        <Tabs
          value={activeReviewTab}
        >
          <TabsContent value={activeReviewTab}>
            <Carousel
              opts={{ align: "start" }}
              className="w-full"
            >
              <CarouselContent>
                {articles?.map((article, index) => (
                  <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/2 flex flex-col">
                    <Card className="border-none min-h-[370px] flex flex-col justify-start items-center my-2 gap-3 cursor-pointer transition duration-300">
                      <span className="overflow-hidden rounded-md">
                        <Image
                          className="w-auto hover:scale-105 transition duration-300"
                          src={article?.image}
                          alt="article"
                          width={600}
                          height={400}
                          priority
                        />
                      </span>
                      <CardHeader className="p-0">
                        <CardDescription className="flex flex-row gap-3 text-black">
                          <span>{article?.name}</span>
                          <span className="cursor-auto">{article?.date}</span>
                        </CardDescription>
                        <CardTitle className="text-lg">{article?.title}</CardTitle>
                      </CardHeader>
                    </Card>
                    <Card className="border-none min-h-[340px] flex flex-col justify-start items-center my-2 gap-3 cursor-pointer transition duration-300">
                      <span className="overflow-hidden rounded-md">
                        <Image
                          className="w-auto hover:scale-105 transition duration-300"
                          src={article?.image}
                          alt="Logo"
                          width={600}
                          height={400}
                          priority
                        />
                      </span>
                      <CardHeader className="p-0">
                        <CardDescription className="flex flex-row gap-3 text-black">
                          <span>{article?.name}</span>
                          <span className="cursor-auto">{article?.date}</span>
                        </CardDescription>
                        <CardTitle className="text-lg">{article?.title}</CardTitle>
                      </CardHeader>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </TabsContent>
        </Tabs>
      </div>
      {/* Hot Topics */}
      <div className="w-full px-16">
        <div className="flex md:flex-row flex-col justify-between items-center py-3">
          <div className="text-4xl font-bold">Heiße Themen</div>
          <div className="flex gap-3 md:pt-5 pt-2">
            <Button variant="outline" className="border-2 border-black">
              ALLE ARTIKEL
              <MdKeyboardArrowRight className="w-7 h-7 pl-1" />
            </Button>
          </div>
        </div>
        <Tabs
          value={activeTopicTab}
        >
          <TabsList className="flex justify-start flex-wrap h-auto">
            {topicTabs?.map((tab: OptionType, index) =>
              <TabsTrigger
                key={index}
                className={`${activeTopicTab == tab.value ? "border-yellow-400" : "border-[#F1F5F9]"} border-b-4 transition duration-500 hover:border-yellow-400 hover:bg-white`}
                value={tab.value}
                onClick={() => setActiveTopicTab(tab.value)}
              >
                {tab.label}
              </TabsTrigger>
            )}
          </TabsList>
          <TabsContent value={activeTopicTab}>
            <div className="flex flex-wrap justify-start items-center">
            {topics?.map((article, index) => (
              <div key={index} className="flex xl:w-1/3 lg:w-1/2">
                <Card className="border-none flex flex-row justify-start items-center my-2 gap-3 cursor-pointer transition duration-300">
                  <span className="w-[100px] h-[55px] min-h-[55px] min-w-[100px] overflow-hidden rounded-md">
                    <Image
                      className="w-[100px] h-[55px] hover:scale-110 transition duration-300"
                      src={article?.image}
                      alt="topic Image"
                      width={100}
                      height={55}
                      priority
                    />
                  </span>
                  <CardHeader className="p-0">
                    <CardTitle className="text-md">{article?.name}: {article?.title}</CardTitle>
                  </CardHeader>
                </Card>
              </div>
            ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* Newsletter  */}
      <NewsletterPanel />
    </main >
  );
}
