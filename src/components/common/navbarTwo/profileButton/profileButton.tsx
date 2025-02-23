import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function ProfileButton() {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <div
                className="flex items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww"
                    alt="Profile"
                    width={40}
                    height={40}
                    className="rounded-full w-[44px] h-[44px] object-cover flex-1 flex-shrink-0"
                />
                <div className="ml-3 flex-1 hidden lg:block">
                    <p className="font-bold">Fathy Tamer</p>
                    <p className="text-sm text-gray-500">Fathytameruix@gmail.com</p>
                </div>
            </div>

            {isOpen && (
                <div className="absolute z-[100] right-[-400%] lg:right-0 mt-2 w-56 bg-white rounded-md shadow-lg">
                    <ul className="py-1">
                        <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <div className="ml-3 flex-1">
                                <p className="font-bold">Fathy Tamer</p>
                                <p className="text-sm text-gray-500">Fathytameruix@gmail.com</p>
                            </div>
                        </li>
                        <li>
                            <Link href="/profile" onClick={() => setIsOpen(false)} className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                View Profile
                            </Link>
                        </li>
                        <li>
                            <Link href="/setting/general-info" onClick={() => setIsOpen(false)} className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                Setting
                            </Link>
                        </li>
                        <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            About Us
                        </li>
                        <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Contact Us
                        </li>
                        <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Logout
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

