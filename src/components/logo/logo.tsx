import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
    return (
        <Link href={'/'} className='relative w-[70px] flex flex-col justify-center items-center z-[-10] h-[70px] rounded-full bg-[#0055d9]'>
            <Image layout='fill' src={'/assets/lines.png'} alt='background' />
            <Image width={60} height={45} className='object-scale-down' src={'/assets/logoWhite.png'} alt='background' />
        </Link>
    )
}