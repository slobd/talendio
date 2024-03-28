import { NextPage } from "next";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export type FilterUnitProps = {
    wrapperClassName?: string;
    onChange: (searchKey: string) => void;
};

const FilterUnit: NextPage<FilterUnitProps> = ({ wrapperClassName, onChange }) => {

    return (
        <div className={`${wrapperClassName}`}>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default FilterUnit;