import React from 'react'
import Background from '../background/background'
import HomePageSearch from '../homePageSearch/homePageSearch'

export default function HeroSection() {
    return (
        <div className='mx-[8px] w-[calc(100%-16px)] rounded-[25px] relative h-[130vh] !bg-black/15 my-[10px] overflow-hidden'>
            <Background />
            <div className='flex flex-col items-center justify-center text-white h-screen'>
                <div className='flex flex-col text-center'>
                    <span className='text-[76px] font-[600]'>
                        Find the Best Jobs in Egypt
                    </span>
                    <span className='text-[76px] -mt-6 font-[600]'>
                        and the MENA Region
                    </span>
                </div>
                <span className='w-[50%] text-[25px] text-center'>
                    Searching for vacancies & career opportunities? Shocholy helps you in your job search in Egypt
                </span>
            </div>
            <HomePageSearch />
        </div>
    )
}
