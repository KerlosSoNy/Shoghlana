import Image from 'next/image'
import React from 'react'

export default function Background() {
    return (
        <div className='absolute w-[100%] rounded-[25px] -z-[10] h-[130vh]  '>
            <Image layout='fill' src={'/assets/home-01.jpg'} alt='background' className='object-cover' />
            <Image layout='fill' src={'/assets/lines.png'} alt='background' className='object-cover' />
        </div>
    )
}
