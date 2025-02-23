'use client'

import NavbarTwo from '@/components/common/navbarTwo/navbarTwo'
import Footer from '@/components/footer/footer'
import SideMenu from '@/components/setting/sideMenu/sideMenu';
import { NavigationTabs } from '@/components/setting/tabs/tabs';

export default function Layout({ children }: { children: React.ReactNode }) {
    const tabs = [
        { id: 1, name: 'General Info', link: '/setting/general-info' },
        { id: 2, name: 'Career Interests', link: '/setting/career-interests' },
        { id: 3, name: 'Education / CV', link: '/setting/education-cv' },
        { id: 4, name: 'Experience', link: '/setting/experience' },
        { id: 5, name: 'Online Presence', link: '/setting/online-presence' },
        { id: 6, name: 'Public Profile', link: '/setting/public-profile' },
    ];
    return (
        <div className="flex flex-col font-inter overflow-hidden max-w-screen min-h-screen bg-[#f5f5f5]">
            <NavbarTwo />
            <div className="flex flex-col lg:flex-row w-[95%] xl:w-[80%] mx-auto justify-center xl:justify-between gap-[5px] main-body min-w-screen pb-[27px] pt-[10px] xl:pt-[calc(64px+32px)]">
                <div className="hidden me-3 !w-[clamp(300px,337px,369px)] lg:flex flex-row justify-center relative">
                    <SideMenu />
                </div>
                <div className="w-[100%] scrollbar-hide rounded-[30px] block lg:hidden bg-white">
                    <NavigationTabs
                        tabs={tabs}
                    />
                </div>
                {children}
            </div>
            <Footer />
        </div>
    )
}
