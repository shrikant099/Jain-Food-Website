import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import AboutUs from './components/About-us'
import HowToOrder from '@/components/HowToOrder'
import AnnouncementBar from '@/components/AnnouncementBar'

const page = () => {
    return (
        <>
            <AnnouncementBar />
            <Navbar />
            <AboutUs />
            <HowToOrder />
            <Footer />
        </>
    )
}

export default page