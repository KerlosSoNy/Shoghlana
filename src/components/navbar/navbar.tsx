'use client'
import Image from "next/image";
import Logo from "../logo/logo";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef: any = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);
    return (
        <div className="absolute overflow-hidden top-[0px] md:top-[10px] w-[calc(100%-16px)] md:w-[calc(100%-64px)] mx-[8px] md:mx-[32px] rounded-[20px] bg-white border-[1px] border-gray-200 h-[86.41px] z-[1000] flex items-center ">
            <div className="w-[calc(100%-64px)] mx-auto flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-8 text-[15px] font-[600] text-text">
                    <Logo />
                </div>
                <div className="text-[15px]  font-[600] text-text hidden md:flex flex-row">
                    <Link href='/company' className="flex flex-row items-center me-[28px] hover:scale-105 duration-300">
                        <Image width={17} height={15} src="/bag.svg" alt="bag" className="me-2" />
                        <span>Post Job</span>
                    </Link>
                    <div className="h-[50px] w-[2px] bg-gray-200 me-[35px]" />
                    <Link href='/login' className="flex flex-row items-center me-[28.23px] gap-2 py-[9px] px-[18px] border-main border-[2px] rounded-[5px] ">
                        Log in
                    </Link>
                    <Link href='/login' className="flex flex-row items-center gap-2 py-[9px] px-[18px] border-main border-[2px] bg-main text-white rounded-[5px] ">
                        Get Started
                    </Link>
                </div>
                <div className="md:hidden" ref={menuRef}>
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 18V16H16V18H3ZM3 13V11H16V13H3ZM3 8V6H16V8H3Z" fill="#888888" />
                        </svg>
                    </div>
                    <div
                        className={`absolute z-[1000] top-0 w-[300px] end-0 text-start min-w-[129px] p-0 bg-white shadow-xl rounded-[10px] 
                            transition-all duration-300 ease-in-out ${isOpen ? '-translate-x-0' : 'translate-x-[3000px]'
                            }`}
                    >
                        <span>
                            kerlos
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
