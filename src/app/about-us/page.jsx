import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutUs from "./components/About-us";
import HowToOrder from "@/components/HowToOrder";

/* =========================
   SEO METADATA – ABOUT US
========================= */
export const metadata = {
    title: "About Agarwal Rabdiwala | Train Food Delivery at Abu Road",
    description:
        "Know more about Agarwal Rabdiwala, a trusted IRCTC food partner providing fresh vegetarian & Jain train food delivery at Abu Road Railway Station since 2017.",
    alternates: {
        canonical: "https://www.agarwalrabdiwala.in/about-us",
    },
};

export default function Page() {
    return (
        <>
            <AnnouncementBar />
            <Navbar />
            <main>
                <AboutUs />
                <HowToOrder />
            </main>
            <Footer />
        </>
    );
}
