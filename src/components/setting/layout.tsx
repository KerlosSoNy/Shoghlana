'use client'

import React, { useLayoutEffect, useState } from 'react'
import NavbarTwo from '@/components/common/navbarTwo/navbarTwo'
import Footer from '@/components/footer/footer'
import SideMenu from '@/components/setting/sideMenu/sideMenu';
import { NavigationTabs } from '@/components/setting/tabs/tabs';
import { useRouter } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
    const [activeTab, setActiveTab] = useState('Personal Information');
    const route = useRouter();
    const tabs = [
        { name: 'General Info', isActive: activeTab === 'General Info' },
        { name: 'experiences', isActive: activeTab === 'experiences' },
        { name: 'certificates', isActive: activeTab === 'certificates' },
        { name: 'privacy', isActive: activeTab === 'privacy' },
        { name: 'Change password', isActive: activeTab === 'Change password' },
        { name: 'Change email', isActive: activeTab === 'Change email' },
        { name: 'Manage Devices', isActive: activeTab === 'Manage Devices' },
        { name: 'Deactivate Account', isActive: activeTab === 'Deactivate Account' },
    ];
    useLayoutEffect(() => {
        const routesMap: Record<string, string> = {
            'General Info': '/setting/general-info',
            'Change password': '/setting/change-password',
            'Change email': '/setting/change-email',
            'Manage Devices': '/setting/devices',
            'Deactivate Account': '/setting/deactivate',
        };

        const routePath = routesMap[activeTab] || `/settings/${activeTab.toLowerCase().replace(/\s+/g, '-')}`;
        route.push(routePath);
    }, [activeTab, route]);
    return (
        <div className="flex flex-col font-inter max-w-screen min-h-screen bg-[#f5f5f5]">
            <NavbarTwo />
            <div className="flex flex-col md:flex-row w-[80%] mx-auto justify-center xl:justify-between gap-[5px] main-body min-w-screen pb-[27px] pt-[calc(64px+32px)]">
                <div className="hidden me-3 !w-[clamp(300px,337px,369px)] xl:flex flex-row justify-center relative">
                    <SideMenu />
                </div>
                <div className="w-[100%] rounded-lg block md:hidden bg-white">
                    <NavigationTabs
                        tabs={tabs}
                        onTabChange={setActiveTab}
                    />
                </div>
                {children}
            </div>
            <Footer />
        </div>
    )
}
