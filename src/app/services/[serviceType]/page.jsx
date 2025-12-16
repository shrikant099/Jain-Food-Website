import AnnouncementBar from '@/components/AnnouncementBar'
import Footer from '@/components/Footer'
import HowItWorks from '@/components/HowItWork';
import LiveOrdersCarousel from '@/components/LiveOrdersCarousel';
import MenuFAQ from '@/components/Menu';
import Navbar from '@/components/Navbar'
import OrderByCall from '@/components/OrderByCall';

import WhyChooseUs from '@/components/WhyChooseUs';
import React from 'react'

const Page = async ({ params }) => {
  const { serviceType } = await params;

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <div className="pt-36 px-6">
        {serviceType === "train-delivery" && (
          <MenuFAQ />
        )}
        {serviceType === "Bulk-order-in-train" && (
          <MenuFAQ />
        )}
      </div>
      <HowItWorks />
      <WhyChooseUs />
      <OrderByCall />
      <LiveOrdersCarousel />
      
      <Footer />
    </>
  );
};

export default Page;
