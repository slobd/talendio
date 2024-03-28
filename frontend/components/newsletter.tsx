import { NextPage } from "next";
import { Button } from "./ui/button";


const NewsletterPanel: NextPage = () => {

    return (
        <div className="md:px-16 px-4 pb-8 pt-12 md:pb-12">
            <div className="relative w-full bg-[#3B289E] rounded-sm px-10 py-8 overflow-hidden">
                <div className="relative z-10 flex md:flex-row flex-col gap-3 justify-between items-center">
                    <div className="md:w-3/5 sm:w-4/5 w-full">
                        <h2 className="text-xl text-white font-bold">Du möchtest über Online-Marketing Themen top informiert sein und die aktuellsten News erhalten? Dann abonniere jetzt unsere Newsletter!</h2>
                    </div>
                    <Button variant="ghost" className="bg-yellow-500 hover:bg-yellow-600 hover:text-white">
                        JETZT EINTRAGEN
                    </Button>
                </div>
                <div style={{ background: 'black', borderRadius: '50%', border: '10px solid black', width: '70px', height: '70px', opacity: 0.2 }} className="absolute bottom-[-30px] left-[-15px]"></div>
                <div style={{ background: 'none', borderRadius: '50%', border: '10px solid black', width: '120px', height: '120px', opacity: 0.2 }} className="absolute top-[-90px] left-[10%]"></div>
                <div style={{ background: 'none', borderRadius: '50%', border: '10px solid black', width: '150px', height: '150px', opacity: 0.2 }} className="absolute bottom-[-70px] left-[26%]"></div>
                <div style={{ background: 'black', borderRadius: '50%', border: '10px solid black', width: '100px', height: '100px', opacity: 0.2 }} className="absolute top-[-20px] left-[68%]"></div>
                <div style={{ background: 'none', borderRadius: '50%', border: '10px solid black', width: '150px', height: '150px', opacity: 0.2 }} className="absolute bottom-[-40px] right-[-20px]"></div>
            </div>
        </div>
    );
};

export default NewsletterPanel;