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
import { MdOutlineCalendarMonth } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";
import { MdApartment } from "react-icons/md";
import RecruitingTeamCard from "@/components/recruitingTeamCard";

const Jobs = () => {

    return (
        <div className="pt-20 pb-10">
            <div className="md:px-16 px-2 pt-8 pb-2 flex flex-row justify-between items-center gap-10">
                <div className="flex md:flex-row flex-col gap-6 justify-between items-center pb-10 border-b">
                    <div className="relative w-auto min-w-[100px] p-5 border border-gray-400 rounded-md">
                        <Image
                            className="w-auto h-full"
                            src={"/images/jobs/job_logo_4.png"}
                            alt="Logo"
                            width={50}
                            height={50}
                            priority
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="font-semibold text-xs text-gray-600">EPPLE GmbH</div>
                        <div className="text-[28px] font-bold mt-1 mb-3">Content Marketing Manager (m/w/d) Schwerpunkt Social Media</div>
                        <div className="flex flex-wrap justify-start items-center gap-x-3 gap-y-1 text-xs">
                            <div className="flex flex-row justify-start items-center gap-1 px-2 py-0 border border-gray-400 rounded-full">
                                <MdApartment className="w-6 h-6" />
                                SVT PRODUCTS GMBH
                            </div>
                            {Array.from({ length: 1 }).map((item, index) =>
                                <div
                                    key={index}
                                    className="flex flex-row justify-start items-center gap-1 px-2 py-0 border border-gray-400 rounded-full"
                                >
                                    <LuGraduationCap className="w-6 h-6" />
                                    PROFESSIONAL (2 - 5)
                                </div>
                            )}
                            <div className="flex flex-row justify-start items-center gap-1 px-2 py-0 border border-gray-400 rounded-full">
                                <IoLocationOutline className="w-6 h-6" />
                                HAMBURG (HYBRID)
                            </div>
                            <div className="flex flex-row justify-start items-center gap-1 px-2 py-0 border border-gray-400 rounded-full">
                                <MdOutlineCalendarMonth className="w-6 h-6" />
                                FULL TIME
                            </div>
                            <div className="flex flex-row justify-start items-center gap-1 px-2 py-0 border border-gray-400 rounded-full">
                                <LuAlarmClock className="w-6 h-6" />
                                AS SOON AS POSSIBLE
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:block hidden w-[300px] min-w-[300px]">
                    <div className='w-full flex justify-center items-center py-5'>
                        <Button className="w-full rounded-sm font-bold bg-[#399F5E] text-sm text-white">
                            Jetzt bewerben
                            <MdKeyboardArrowRight className="w-7 h-7 pl-1" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="md:px-16 px-2 pt-8 pb-2 flex lg:flex-row flex-col justify-between gap-10">
                <div className="flex flex-col gap-6 justify-between items-center">
                    {/* demo html */}
                    <div className="text-common-styles richtext">
                        <div>
                            <p>Seit 1969 gehören wir, die svt Unternehmensgruppe, zu den führenden Anbietern im passiven Brandschutz und der
                                Schadensanierung. Bundesweit sind wir an mehr als 60 Standorten vertreten und operieren mit eigenen
                                Gesellschaften und Partnerfirmen international in vielen Ländern. Unsere Mitarbeitenden sind Expert*innen in
                                den verschiedensten Bereichen: Ob passiver Brandschutz oder Schadensanierung – uns verbindet die
                                Leidenschaft für das, was wir tun.
                            </p>
                            <br />
                            <p>Du hast Spaß am Recherchieren, Texten und Redigieren und kennst dich in der Social Media Welt bestens aus?
                                Dann komm ins #TeamLebenSchuetzen und unterstütze das Produktmarketing als Content Marketing Manager mit
                                Schwerpunkt Social Media.
                            </p>
                            <br />
                            <ul>
                                <li><strong>- Das Team:</strong> Unser Produktmarketing-Team besteht aus einer Abteilungsleitung und
                                    fünf Fachspezialist*innen. Wir suchen dich, um weiterwachsen zu können</li>
                                <li><strong>- Die Arbeitsumgebung:</strong> Du erreichst unser Büro in Hamburg-Harburg innerhalb von 20
                                    Minuten vom Hauptbahnhof</li>
                                <li><strong>- Deine Flexibilität:</strong> Wir bieten die Möglichkeit, an bis zu 2 Tagen/Woche
                                    mobil zu arbeiten</li>
                                <li><strong>- Dein Einstieg:</strong> In Vollzeit kannst du bei uns durchstarten. Wir unterstützen
                                    dich bei deinem Einstieg mit einem strukturierten Onboarding</li>
                            </ul>
                            <br />
                            <br />
                            <p><strong>Das erwartet dich</strong></p>
                            <ul>
                                <li><strong>- Deine Expertise:</strong> Als Spezialist*in übernimmst du eigenständig die Planung und Umsetzung
                                    von Content für unsere produktbezogene Marketingkommunikation</li>
                                <li><strong>- Deine Ideen: </strong>Deine kreative Art setzt du gezielt zur Erstellung von multimedialen
                                    Inhalten (Text, Grafik, Video) und zur Pflege der Redaktionspläne ein</li>
                                <li><strong>- Deine Steuerung: </strong>Der Content über unsere digitalen Kanäle (Social Media, Website,
                                    Newsletter) wird von dir eigenverantwortlich gesteuert, inkl. der Anpassung unserer Website-Inhalte</li>
                                <li><strong>- Deine Content-Strategie:</strong> Mit deiner Fachkenntnis entwickelst du unsere
                                    Content-Strategie weiter und realisierst den Ausbau unserer Social-Media-Präsenz</li>
                                <li><strong>- Deine Zusammenarbeit:</strong> Du bist Teil des Produktmarketing-Teams und arbeitest eng mit
                                    Vertrieb, Produktmanagement, Forschung &amp; Entwicklung sowie mit externen Agenturen zusammen</li>
                            </ul>
                            <br />
                            <br />
                            <p><strong>Das bringst du mit</strong></p>
                            <ul>
                                <li><strong>- Deine Ausbildung:</strong> Du verfügst über ein abgeschlossenes Studium im Bereich
                                    Marketing oder bringst eine vergleichbare kaufmännische Ausbildung mit</li>
                                <li><strong>- Deine Expertise:</strong> Deine umfassenden Kenntnisse mit redaktionellen Tätigkeiten, digitale
                                    Trends und SEO-Know-how zeichnen dich aus</li>
                                <li><strong>- Deine Erfahrung:</strong> Du bringst mindestens 2 Jahre Erfahrung im Bereich Content-Marketing,
                                    Schwerpunkt Social-Media mit</li>
                                <li><strong>- Deine Kommunikation: </strong>Du verfügst du über verhandlungssichere Deutsch-
                                    und gute Englischkenntnisse</li>
                                <li><strong>- Deine Offenheit: </strong>Auch wenn der vorbeugende Brandschutz dir fremd ist, bist du
                                    offen, mehr über unsere technischen Produkte und unser #TeamLebenSchuetzen zu erfahren</li>
                                <li><strong>- Deine Persönlichkeit:</strong> Lass uns dich persönlich kennenlernen und gemeinsam über deinen
                                    möglichen Einstieg sprechen</li>
                            </ul>
                            <br />
                            <br />
                            <p><strong> Deine Benefits </strong></p>
                            <ul>
                                <li><strong>- Job mit Relevanz</strong>: Gib deiner Arbeit mehr Bedeutung und mach die Welt mit uns gemeinsam
                                    sicherer.</li>
                                <li><strong>- Intensive Einarbeitung</strong>: Für deinen perfekten Start in den Job bekommst du eine
                                    persönliche Einarbeitung, regelmäßige Feedbackgespräche und nimmst an unserem unternehmensweiten
                                    Onboarding-Event teil.</li>
                                <li><strong>- Gympass</strong>: Mit Gympass haben alle Mitarbeitenden die Möglichkeit die Angebote eines der
                                    größten Anbieter für Sport-, Freizeit- &amp; Wellnessangebote in Deutschland zu nutzen.</li>
                                <li><strong>- Mobile Ausstattung</strong>: Mit uns bist du flexibel unterwegs, dafür wirst du optimal
                                    ausgestattet.</li>
                                <li><strong>- Mitarbeitendenangebote</strong>: Entdecke attraktive Angebote auf Produkte und Dienstleistungen
                                    von mehr als 800 namhaften Anbietern und Top-Marken.</li>
                                <li><strong>- Gestaltungsfreiraum</strong>: Treibe mit uns gemeinsam Innovationen voran und bring dich aktiv
                                    in die erfolgreiche Entwicklung des Unternehmens ein.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full flex md:justify-start justify-center items-center py-5'>
                        <Button className="w-full max-w-[300px] rounded-sm font-bold bg-[#399F5E] text-sm text-white">
                            Jetzt bewerben
                            <MdKeyboardArrowRight className="w-7 h-7 pl-1" />
                        </Button>
                    </div>
                </div>
                <div className="lg:w-[300px] w-full md:min-w-[300px]">
                    <RecruitingTeamCard />
                </div>
            </div>
        </div>
    );
};

export default Jobs;