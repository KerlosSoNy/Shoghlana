"use client";
import Logo from "@/components/logo/logo";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import ProfileButton from "./profileButton/profileButton";
import { usePathname } from "next/navigation";

export default function NavbarTwo() {
    // const [menuOpen, setMenuOpen] = useState(false);
    const location = usePathname();
    return (
        <nav className="bg-white shadow-md w-full px-6 py-3 flex items-center justify-between">
            {/* Left Section (Logo) */}
            <div className="flex flex-row items-center gap-8 text-[15px] font-[600] text-text">
                <Logo />
            </div>

            {/* Center Section (Navigation Links) */}
            <div className="hidden items-center md:flex space-x-8">
                <Link href="/explore" className={`${location === "/explore" || location.includes("/job/") ? "text-[#0055D9] text-[24px] font-bold" : "text-[#4D6182]  text-[20px] font-semibold"}  relative`}>
                    {location === "/explore" || location.includes("/job/") && (
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
            <div className="relative flex-grow max-w-md mx-6 hidden md:block">
                <input
                    type="text"
                    placeholder="Search for job, companies..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <FaSearch className="absolute top-3 right-3 text-gray-500" />
            </div>

            {/* Right Section (Profile) */}
            <ProfileButton />
        </nav>
    );
};
