import React from 'react'
import { TestimonialsCorouse } from '../testimonialsCarousel/testimonialsCarouse'

export default function SectionFour() {
    return (
        <div className='pt-[48px] px-[48px] flex flex-col mb-[110px]'>
            <span className='text-[#737373] font-medium text-[13px] mb-3'>TESTIMONIALS</span>
            <span className='font-medium text-[#010101] text-[31px] max-w-[50%]'>The more experience you gain, the more excitement you feel about our job fair website!</span>
            <TestimonialsCorouse />
        </div>
    )
}
