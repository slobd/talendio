import { NextPage } from "next";
import { Button } from "./ui/button";

const QuickJobAdPanel: NextPage = () => {

    return (
        <div className="bg-[#ADA6FC] p-10 my-10 rounded-sm">
            <div className="md:text-4xl text-3xl font-bold">
                Die neuesten Jobs per E-Mail
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

export default QuickJobAdPanel;