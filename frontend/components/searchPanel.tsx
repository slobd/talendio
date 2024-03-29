import { NextPage } from "next";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { BiSearchAlt2 } from "react-icons/bi";

export type SearchPanelProps = {
    onSubmit: (searchKey: string) => void;
};

const SearchPanel: NextPage<SearchPanelProps> = ({ onSubmit }) => {
    const [input, setInput] = useState("");

    return (
        <div className="w-full px-1">
            <div className={`rounded-md flex md:flex-row flex-col md:justify-between justify-center items-center min-h-[180px] md:px-16 px-4 bg-[#3B289E]`}>
                <div className="md:text-4xl text-3xl md:w-2/5 w-full text-white pt-2 pb-3 px-0 font-light">
                    <div className=""> Finde die besten Jobs </div>
                    <div className="">
                        in
                        <span className="bg-bottom bg-no-repeat bg-contain pb-1 font-medium" style={{
                            backgroundImage:
                                "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAvIAAAAZCAYAAABTh8okAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEZ0lEQVR42u3dv3LTQBDH8VvZGZyhyKWEJvcK0NHBm/CGPEI66OAVREWZc5GJZ2xrKUicu9OdLA2J/0jfT+lxZEfyWL9drc5iAAAYKf1l7WplbddzNpuN69xGpa7Pa80qvenzPBG1qpXt/0+oVSN26P8uRq0xxr7CbnUj/bjUL7gtr0b8wOPljfT9G937XreN/C6/mHrZVsXXms/n2e0vFt7LB+/5Zjkdwi4AADx5+OFc37Crs8YazQfMcqgVV86r+YDYI5A6jhxwzIpZvBFtBXw1UueL2bhoEmm8alzEiFZ+o7qMHmvi7UmlflZd+CkXGgR5ADjEeS7TGd42a6tNHIRz3d+5yJVKY+MTX76rm4bhYghWsUbUcmQAjFwY/qMrJe2rIPGVjvCqRlhEhAXEsYsHgjyAyQTntKuchuZcYG51kDNjDmKyoxeOowAA0y0cwisScdHwXDDsioVg3CksFC4/1TVBHsDBpSMaafc5DdHtUYzuAN0Kz3SYAQDTKBJ2VxYI8sDIpZ3psCudzji3O9JxmA7HNlojGwRpAAAOiiAPnFKwDrrUA0O1S17GsacBACDIA4TrPuE6GP3I3GBIsAYAAAR5TDdkh3PW6VhIPGNdDNjB44yCAKP//lDjJbMsXnQilO71w0tL6GXU/d6TZpfqK7+/yldVM3hVjO16tnx72dy95P70y4fl9ZdxLu93d2utvbq8eolt3T9U17OL7aBtNU1lVZte5yQxlevxNNfxobbScf4rLQWrKlbEcN4kyGNMwpsaS51sQjZwNtG37ht2VcUbMX5IqFXTFMPubJb/m32BVD7++c1xA06vCFpt2it6ZQsWFSuSrAamalW6VwhTFWvMc1aYXKGhxhPkJxa0o452j6DdMYft2LPAgO/bbGdYWo/lur+i6jX5xcdSVzcXhhfz9jbH3FkFgFyBkV4pSYuK8EpHWkiEGSgsII5cPNQE+RMO26XRkeiHYEpz2XS0QXBuheS0q5yG5mxgznSQ07CcC8p0iQFggueen+9uckXDdhs2RqPRKPd4stmNO8VXGsQR5F/q4JRmtQd0tgnbmG6QjrvPmc5z3RWg0znhNDzTYQYATKFIeBpZ2q5ny1EG+SGBu6O73a6WgJEF6nTGOe1Ip2E67ESnc8sEaQAADuuoQZ7ADYJ1PO7R1aXuCtVpd5qxDgAACPI7uZVJwhnueH1tcUFocQRunEnEDsJwuWtdCtfh6EfarSZYAwCAVwnyd7fOXrxZf3sM3Mxw47TidaGDTcAGAABTNjfGmMViZRutPrdjvrKH0Cdq18GH5rmTHY+J7A3Z4XgI89YAAAA9gjxGHrOjjnY+aIc3OfYJ2nSyAQAAjms3I3///T3t9xMP26bQ1X666TEcG6GjDQAAMG505IdH7l2Azs1qlzrbhG0AAAC8TpBX8WO5sXVIdzv8mXPGSAAAAHB+Qf5fmD1CkM90uPeMkxC4AQAAQJD/n8DNSAkAAABw3CBfzZuvBG4AAADgPPwFoEVLGoPIAUgAAAAASUVORK5CYII=)"
                        }}
                        >
                            {" "}Stadtname
                        </span>
                    </div>
                </div>

                <div className="flex md:w-1/2 w-full items-center space-x-2">
                    <div className="relative w-full">
                        <Input
                            type="search"
                            className="pl-9 !ring-0 !ring-offset-0 h-[50px] text-[1.175rem] font-light"
                            placeholder="Job oder Arbeitgeber suchen ..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <BiSearchAlt2 className="w-6 h-6 absolute left-2 top-3 text-gray-500" />
                    </div>
                    {/* <Button
                    variant="ghost"
                    className="bg-white text-black hover:text-gray-500"
                    onClick={() => onSubmit(input)}
                >
                    Suchen
                </Button> */}
                </div>
            </div>
        </div>

    );
};

export default SearchPanel;