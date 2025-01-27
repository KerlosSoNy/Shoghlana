import React from 'react'
import TabsSearchHomePage from '../tabsSearchHomePage/tabsSearchHomePage'
import Image from 'next/image'

export default function HomePageSearch() {
    return (
        <div className='absolute w-[calc(100%-56px)] flex flex-col items-start justify-start p-4 bg-white 
        h-[250px] rounded-[20px] text-text bottom-5 end-[28px]'>
            <span className='text-[31px] font-[500]'>Discover. Explore your Job Offer</span>
            <TabsSearchHomePage />
            <button
                className='bg-main text-white flex flex-row items-center gap-2 text-[15px] font-[500] py-[9px] px-[18px] rounded-[5px] w-full  justify-center mt-4'>Discover Now <Image width={15} height={15} src={'/assets/arrow-right.svg'} alt='arrow' /> </button>
        </div>
    )
}
