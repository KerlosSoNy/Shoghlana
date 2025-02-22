'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './style.css';
import { links } from './content';

export default function SideMenu() {
    const pathname = usePathname();

    return (
        <div
            className="sticky top-24 shadow-lg hidden lg:flex flex-col gap-[30px] 
            rounded-[20px] bg-white h-fit px-[30px] py-[20px] 
            sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[240px] minxl:w-[265px] 2xl:w-[287px] 3xl:w-[337px]"
        >
            <span className='text-center text-[22px] mb-1 font-medium'>Settings</span>
            {links.map((link) => {
                const isActive = pathname.includes(link.link);

                return (
                    <Link
                        href={link.link}
                        className={`flex flex-row items-center text-center justify-center gap-[9px] hover:cursor-pointer rounded-[5px] h-[41px] ${isActive ? 'text-[white] bg-main' : 'text-[#000000]'
                            }`}
                        key={link.id}
                    >
                        <p className={`text-[16px] font-[400]`}>
                            {link.name}
                        </p>
                    </Link>
                );
            })}
        </div>
    );
}
