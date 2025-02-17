import NavbarTwo from '@/components/common/navbarTwo/navbarTwo'
import JobsCard from '@/components/savedJobs/jobsCard/jobsCard'
import React from 'react'

export default function Page() {
    return (
        <div className='flex flex-col'>
            <NavbarTwo />
            <div className='w-[80%] mx-auto mt-[54px]'>
                <span className='font-[700] text-[28px] '>(1) Active Saved Job</span>
                <div className='mt-[35px]'>
                    <JobsCard />
                </div>
            </div>
        </div>
    )
}
