import NavbarTwo from '@/components/common/navbarTwo/navbarTwo'
import Footer from '@/components/footer/footer'
import ProfileHeroSection from '@/components/profile/heroSection/profileHeroSection'
import React from 'react'

export default function Page() {
    return (
        <div className='flex flex-col max-w-screen overflow-hidden'>
            <NavbarTwo />
            <ProfileHeroSection />
            <Footer />
        </div>
    )
}
