'use client'
import React from 'react'

export default function TabsSearchHomePage() {
    const [tab, setTab] = React.useState(0)
    return (
        <div className='flex flex-row gap-4 mt-3 items-center'>
            <span onClick={() => setTab(0)} className={`text-[15px] px-3 py-1.5 font-[600] cursor-pointer ${tab === 0 ? 'text-white bg-main rounded-md' : 'text-[#818181]'} `}>
                Full Time
            </span>
            <span onClick={() => setTab(1)} className={`text-[15px] px-3 py-1.5 font-[600] cursor-pointer ${tab === 1 ? 'text-white bg-main rounded-md' : 'text-[#818181]'} `}>
                Hybird
            </span>
            <span onClick={() => setTab(2)} className={`text-[15px] font-[600] px-3 py-1.5 cursor-pointer ${tab === 2 ? 'text-white bg-main rounded-md ' : 'text-[#818181]'} `}>
                Remote
            </span>
        </div>
    )
}
