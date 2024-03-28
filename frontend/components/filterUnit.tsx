import { NextPage } from "next";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

export type FilterUnitProps = {
    wrapperClassName?: string;
    title?: string;
    items: string[];
    onChange?: (searchKey: string) => void;
};

const FilterUnit: NextPage<FilterUnitProps> = ({ wrapperClassName, title, items, onChange }) => {

    return (
        <div className={`bg-white rounded-sm px-5 mx-1 py-3 ${wrapperClassName}`}>
            <div className="flex flex-row justify-between items-center">
                <div className="text-base font-bold">{title ?? "Kategorien"}</div>
                <div className="text-[10px] text-[#00ADAD] hover:text-[#008A8A] cursor-pointer">ZURÜCKSETZEN</div>
            </div>
            <div className="py-2">
                {items?.slice(0, 5).map((item, index) =>
                    <div key={index} className="flex flex-row justify-between items-start m-1">
                        <div className="flex flex-row justify-start items-center gap-3">
                            <Checkbox id={`id-${item}`} />
                            <label
                                htmlFor={`id-${item}`}
                                className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {item}
                            </label>
                        </div>
                        <div className="text-sm text-gray-600">
                            {(Math.random() * 100).toFixed(0)}
                        </div>
                    </div>
                )}
                {items.length > 5 &&
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1" className="border-none">
                            <AccordionContent className="pb-0">
                                <Separator className="mb-2" />
                                {items?.slice(5).map((item, index) =>
                                    <div key={index} className="flex flex-row justify-between items-start m-1">
                                        <div className="flex flex-row justify-start items-center gap-3">
                                            <Checkbox id={`id-${index}`} />
                                            <label
                                                htmlFor="terms"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                {item}
                                            </label>
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {(Math.random() * 100).toFixed(0)}
                                        </div>
                                    </div>
                                )}
                            </AccordionContent>
                            <AccordionTrigger className="py-0 text-[10px] !no-underline hover:opacity-70 cursor-pointer">
                                MEHR ANZEIGEN
                            </AccordionTrigger>
                        </AccordionItem>
                    </Accordion>
                }
            </div>
        </div>
    );
};

export default FilterUnit;