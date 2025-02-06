import Image from 'next/image'
import React from 'react'

export default function Background({ linesOnly, blueOnly }: { blueOnly?: boolean, linesOnly?: boolean }) {
    return (
        <div className={`absolute w-[100%] rounded-[25px] ${linesOnly ? "z-[10]" : "-z-[10]"} h-full  `}>
            {!linesOnly && <Image layout='fill' src={'/assets/home-01.jpg'} alt='background' className='object-cover' />}
            {!blueOnly &&
                <Image layout='fill' src={'/assets/lines.png'} alt='background' className={`${linesOnly && "opacity-40"} object-cover`} />
            }
            {blueOnly &&
                <Image layout='fill' src={'/assets/linesBlue.png'} alt='background' className={`${linesOnly && "opacity-40"} object-cover`} />
            }        </div>
    )
}
