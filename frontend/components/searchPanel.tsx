import { NextPage } from "next";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export type SearchPanelProps = {
    wrapperClassName?: string;
    onSubmit: (searchKey: string) => void;
};

const SearchPanel: NextPage<SearchPanelProps> = ({ wrapperClassName, onSubmit }) => {
    const [input, setInput] = useState("");

    return (
        <div className={`${wrapperClassName} flex md:flex-row flex-col justify-center items-center w-full min-h-[180px] px-16 bg-black`}>
            <div className="md:text-4xl text-3xl md:w-2/5 w-full text-white py-2">Finde die besten Jobs in Stadtname</div>
            <div className="flex md:w-3/5 w-full items-center space-x-2">
                <Input
                    type="search"
                    className="te"
                    placeholder="Job oder Arbeitger suchen ..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button
                    variant="ghost"
                    className="bg-white text-black hover:scale-105 hover:text-gray-500"
                    onClick={() => onSubmit(input)}
                >
                    Suchen
                </Button>
            </div>
        </div>
    );
};

export default SearchPanel;