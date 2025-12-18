import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "./components/hero";
import Content from "./components/content";
export const metadata = {
  title: "Privacy Policy | Agarwal Rabdiwala Train Food Delivery",
  description:
    "Read how Agarwal Rabdiwala collects, uses and protects your personal data while ordering train food at Abu Road Railway Station.",
  alternates: {
    canonical: "https://www.agarwalrabdiwala.in/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </>
  );
}
