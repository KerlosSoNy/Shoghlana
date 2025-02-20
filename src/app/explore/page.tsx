import NavbarTwo from '@/components/common/navbarTwo/navbarTwo'
import JobsFilter from '@/components/explore/filter'
import TabsForJobs from '@/components/explore/tabsForJobs'
import Footer from '@/components/footer/footer'
import React from 'react'

export default function Page() {
    return (
        <div className='flex flex-col max-w-screen overflow-hidden'>
            <NavbarTwo />
            <div className='w-[98%] xl:w-[80%] flex flex-row gap-4 mx-auto my-[20px] xl:my-[54px]'>
                <div className='pt-[60px] hidden lg:block'><JobsFilter /></div>
                <div className='flex flex-col gap-[22.5px] flex-1 h-fit w-full'>
                    <span className='text-[21px] text-[#1C3042] font-[700] ms-5 lg:ms-0'>Explore New Career Opportunities
                    </span>
                    <TabsForJobs />
                </div>
            </div>
            <Footer />
        </div>
    )
}
