

import { MenuIcon, SidebarCloseIcon, X } from "lucide-react";
import { useState } from "react";

export default function FooterComponent({}) {
   
    return (
        <div className=" p-8 bg-slate-300 flex  overflow-hidden w-full items-center sm:max-h-[80px] flex-col" >
            <div className="container flex sm:flex-row  gap-x-4 justify-center w-full items-center">
                <div className=" text-white  mr-auto font-bold text-xl" >Solomon</div>

                <ul className=" text-white hidden sm:flex  flex-row gap-y-4 sm:gap-x-4 sm:bg-inherit" >
                <li>Home</li>
                    <li>Project</li>
                    <li>About</li>
                    <li className=" hover:scale-90 transition  ease-lineart">Contact</li>
                   
                </ul>
               
            </div>
            <div>
            </div>
        </div>
    )
}


