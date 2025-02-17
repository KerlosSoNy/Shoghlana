import NavbarTwo from '@/components/common/navbarTwo/navbarTwo'
import JobsFilter from '@/components/explore/filter'
import TabsForJobs from '@/components/explore/tabsForJobs'
import React from 'react'

export default function Page() {
    return (
        <div className='flex flex-col'>
            <NavbarTwo />
            <div className='w-[98%] xl:w-[80%] flex flex-row gap-4 mx-auto mt-[54px]'>
                <div className='pt-[60px]'><JobsFilter /></div>
                <div className='flex flex-col gap-[22.5px] flex-1 h-fit w-full'>
                    <span className='text-[21px] text-[#1C3042] font-[700]'>Explore New Career Opportunities
                    </span>
                    <TabsForJobs />
                </div>
            </div>
        </div>
    )
}
