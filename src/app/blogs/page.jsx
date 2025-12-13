import AnnouncementBar from '@/components/AnnouncementBar'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import BlogsPage from './components/Blogs'

const page = () => {
    return (
        <>
        <AnnouncementBar />
            <Navbar />
            <BlogsPage/>
            <Footer />
        </>
    )
}

export default page