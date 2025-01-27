import Image from "next/image";
import Logo from "../logo/logo";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="absolute top-[10px] w-[calc(100%-64px)] mx-[32px] rounded-[20px] bg-white border-[1px] border-gray-200 h-[86.41px] z-[1000] flex items-center ">
            <div className="w-[calc(100%-64px)] mx-auto flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-8 text-[15px] font-[600] text-text">
                    <Logo />
                </div>
                <div className="text-[15px] font-[600] text-text flex flex-row">
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
            </div>
        </div>
    )
}
