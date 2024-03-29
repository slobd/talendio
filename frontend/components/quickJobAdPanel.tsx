import Image from "next/image";
import { NextPage } from "next";
import { Button } from "./ui/button";

const QuickJobAdPanel: NextPage = () => {

    return (
        <div className="md:block hidden bg-black p-10 my-10 rounded-sm text-white rounded-md">
            <div className="md:text-4xl text-3xl font-bold ">
                Anzeige erstellen
            </div>
            <div className="text-md font-medium py-8">
                Schalte jetzt Deine Anzeige über OMR Jobs.
            </div>
            <div className="w-auto min-w-[100px] px-0 py-2">
                <Image
                    className="w-auto"
                    src={"/clicks.png"}
                    alt="Logo"
                    width={150}
                    height={70}
                    priority
                />
            </div>
            <div className="flex justify-center">
                <Button
                    className="text-black font-bold p-7 bg-yellow-500 hover:bg-yellow-600 hover:text-white"
                    onClick={() => { }}
                >
                    ABONNIEREN
                </Button>
            </div>
        </div>
    );
};

export default QuickJobAdPanel;