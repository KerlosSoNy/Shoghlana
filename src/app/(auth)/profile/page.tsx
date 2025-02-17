import NavbarTwo from '@/components/common/navbarTwo/navbarTwo'
import ProfileHeroSection from '@/components/profile/heroSection/profileHeroSection'
import React from 'react'

export default function Page() {
    return (
        <div className='flex flex-col'>
            <NavbarTwo />
            <ProfileHeroSection />
        </div>
    )
}
