
'use client'
import { MenuIcon, SidebarCloseIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NavigationBar({ }) {
    const [openNav, setOpenNav] = useState(false)
    const handleToggle = () => {
        setOpenNav((isOpen) => !isOpen)
    }
    return (
        <div className="p-8 md:px-8 md:py-12  bg-slate-900 flex md:justify-center  overflow-hidden w-full items-center justify-center sm:max-h-[80px] flex-col z-50 fixed  top-0" >
            <div className="md:container flex sm:flex-row  gap-x-4 justify-center w-full items-center">
            <Link href={'/'} className=" text-white  mr-auto font-bold text-xl" >Solomon</Link>

                <ul className=" text-white hidden sm:flex  font-bold font-mono flex-row gap-y-4 sm:gap-x-4 sm:bg-inherit" >
                    <Link className=" hover:scale-90 transition  ease-lineart" href={"/"}>Home</Link>
                    <Link className=" hover:scale-90 transition  ease-lineart" href={"/project"}>Project</Link>
                    <Link className=" hover:scale-90 transition  ease-lineart" href={"/about"}>About</Link>
                    <Link className=" hover:scale-90 transition  ease-lineart" href={"/contact"}>Contact</Link>

                </ul>
                <button className=" text-white sm:hidden " onClick={handleToggle} >{openNav ? <X color="#fff" size={30} /> : <MenuIcon color="#fff" size={30} />}</button>

                <div>
               
            </div>
            </div>
            {openNav && <ul className=" text-white sm:hidden text-lg mt-8 space-y-4 h-screen w-screen justify-strart items-center flex flex-col bg-inherit" >
                    <Link className=" hover:scale-90 transition  ease-lineart" href={"/project"} onClick={()=> setOpenNav(false)}>Project</Link>
                    <Link className=" hover:scale-90 transition  ease-lineart" href={"/about"} onClick={()=> setOpenNav(false)}>About</Link>
                    <Link className=" hover:scale-90 transition  ease-lineart" href={"/contact"} onClick={()=> setOpenNav(false)}>Contact</Link>
                </ul>
                }
        </div>
    )
}