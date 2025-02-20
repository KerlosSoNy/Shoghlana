"use client";
import Logo from "@/components/logo/logo";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import ProfileButton from "./profileButton/profileButton";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MenuIcon } from "lucide-react";

export default function NavbarTwo() {
    const location = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // @ts-expect-error: Type mismatch
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        return () => document.body.classList.remove("no-scroll");
    }, [isOpen]);
    return (
        <nav className="bg-white relative max-w-screen px-6 py-3 flex items-center shadow-lg justify-between">
            {/* Left Section (Logo) */}
            <div className="flex-row items-center lg:block hidden gap-8 text-[15px] font-[600] text-text">
                <Logo />
            </div>

            {/* Center Section (Navigation Links) */}
            <div className="hidden items-center lg:flex space-x-8">
                <Link href="/explore" className={`${location === "/explore" || location.includes("/job/") ? "text-[#0055D9] text-[24px] font-bold" : "text-[#4D6182]  text-[20px] font-semibold"}  relative`}>
                    {(location === "/explore" || location.includes("/job/")) && (
                        <div className="w-full absolute -bottom-[30px] rounded-full h-0.5 bg-[#0055D9]" />
                    )}
                    Explore</Link>
                <Link href="/saved" className={`${location === "/saved" ? "text-[#0055D9] text-[24px] font-bold" : "text-[#4D6182]  text-[20px] font-semibold"}  relative`}>
                    {location === "/saved" && (
                        <div className="w-full absolute -bottom-[30px] rounded-full h-0.5 bg-[#0055D9]" />
                    )}
                    (1) Saved</Link>
                <Link href="#" className="text-[#4D6182] font-semibold text-[20px]">Application</Link>
            </div>

            {/* Search Bar */}
            <div className="relative flex-grow max-w-md mx-6 hidden xl:block">
                <input
                    type="text"
                    placeholder="Search for job, companies..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <FaSearch className="absolute top-3 right-3 text-gray-500" />
            </div>

            {/* Right Section (Profile) */}
            <ProfileButton />
            <div className="lg:hidden" ref={menuRef}>
                <div onClick={() => setIsOpen(!isOpen)}>
                    <MenuIcon size={30} />
                </div>
                <div
                    className={`absolute z-[1000] top-0 w-[300px] -end-2 text-start min-w-[129px] p-0 bg-white shadow-xl flex flex-col items-center pt-10 h-screen rounded-[10px] 
                            transition-all duration-300 ease-in-out ${isOpen ? '-translate-x-0' : 'translate-x-[3000px]'
                        }`}
                >
                    <Image width={150} height={150} src={'/assets/logoBlue.png'} alt='background' className='object-cover' />
                    <div className="mt-[30px] border-t-[1px] px-[10px] border-dashed flex flex-col w-full divide-y-[1px] gap-4 text-[20px] font-bold  pt-[30px]">
                        <Link href="/explore" className={`${location === "/explore" || location.includes("/job/") ? "text-[#0055D9] text-[24px] font-bold" : "text-[#4D6182]  text-[20px] font-semibold"}  relative`}>

                            Explore</Link>
                        <Link href="/saved" className={`pt-4 ${location === "/saved" ? "text-[#0055D9] text-[24px] font-bold" : "text-[#4D6182]  text-[20px] font-semibold"}  relative`}>
                            (1) Saved</Link>
                        <Link href="#" className="pt-4 text-[#4D6182] font-semibold text-[20px]">Application</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
