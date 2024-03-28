import { NextPage } from "next";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { UserType } from "@/lib/types";
import { BsShieldFillExclamation, BsShieldFillCheck } from "react-icons/bs";
import { TbArrowsUp } from "react-icons/tb";
const QuickRegisterPanel: NextPage = () => {
    const [data, setData] = useState<UserType>();

    const handleInput = (e: any) => {
        console.log("e.target.value", e.target.value);
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="bg-[#ADA6FC] p-10 my-10 rounded-sm">
            <div className="md:text-4xl text-2xl font-bold">
                Die neuesten Jobs per E-Mail
            </div>
            <div className="flex flex-wrap justify-center items-start mt-7 mb-3">
                <div className="lg:w-1/2 w-full p-1">
                    <Input
                        type="input"
                        name="firstName"
                        className="px-3 py-7 !ring-0 !ring-offset-0"
                        placeholder="Vorname"
                        value={data?.firstName ?? ""}
                        onChange={handleInput}
                    />
                </div>
                <div className="lg:w-1/2 w-full p-1">
                    <Input
                        type="input"
                        name="lastName"
                        className="px-3 py-7 !ring-0 !ring-offset-0"
                        placeholder="Nachname"
                        value={data?.lastName ?? ""}
                        onChange={handleInput}
                    />
                </div>
                <div className="lg:w-1/2 w-full p-1">
                    <Input
                        type="input"
                        name="email"
                        className="px-3 py-7 !ring-0 !ring-offset-0"
                        placeholder="E-Mail"
                        value={data?.email ?? ""}
                        onChange={handleInput}
                    />
                </div>
                <div className="lg:w-1/2 w-full p-1">
                    <div className="flex flex-row justify-between items-center h-10 w-full px-3 py-7 bg-white text-black rounded-md border">
                        <div className="flex flex-row justify-start items-center">
                            <BsShieldFillExclamation className="w-7 h-7" />
                            {/* <BsShieldFillCheck className="w-7 h-7"/> */}
                            <div className="flex flex-col justify-start px-3 py-2">
                                <div className="text-sm text-nowrap">Anti-Roboter-Verifizierung</div>
                                <div className="font-bold cursor-pointer">Hier klicken</div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start h-10 absolute right-[114px]">
                            <div className="flex flex-row justify-end items-center text-[8px] cursor-pointer">
                                <div>FriendlyCaptcha</div>
                                <TbArrowsUp className="rotate-45 ml-0.5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <Button
                    className="text-black font-bold p-7 bg-yellow-500 hover:bg-yellow-600 hover:text-white"
                    onClick={() => { }}
                >
                    ABONNIEREN
                </Button>
            </div>
            <div className="mt-4 text-[10px] text-black font-medium">
                Informationen bezüglich der Verarbeitung deiner personenbezogener Daten findest du in unserer Datenschutzerklärung: https://omr.com/de/datenschutz/. Deine E-Mail-Adresse wird nicht an Dritte weitergegeben und zu keinem anderen Zweck verwendet. Du kannst dich jederzeit von unserem Newsletter abmelden und somit deine Einwilligung für den Erhalt des Newsletters für die Zukunft widerrufen.
            </div>
        </div>
    );
};

export default QuickRegisterPanel;