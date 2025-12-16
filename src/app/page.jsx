
import AnnouncementBar from "@/components/AnnouncementBar";
import ContactSection from "@/components/ContactUsSection";
import CouponMarquee from "@/components/CoupunMarquee";
import EnquirySection from "@/components/Enquiry";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import HowItWorks from "@/components/HowItWork";
import HowToOrder from "@/components/HowToOrder";
import LiveOrdersCarousel from "@/components/LiveOrdersCarousel";
import BestSellerMeals from "@/components/MealsSection";
import Navbar from "@/components/Navbar";
import OfferToast from "@/components/OfferToast";
import ReviewCarousel from "@/components/ReviewCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
    <AnnouncementBar />
    <Navbar />
    <Hero />
    {/* <OfferToast/> */}
    <CouponMarquee/>
    <BestSellerMeals/>
    <HomeAbout />
    <HowItWorks />
    <EnquirySection />
    <WhyChooseUs />
    <ReviewCarousel />
    <ContactSection/>
    <LiveOrdersCarousel/>
    <Footer />
    </>
  );
}
