import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";


/* =========================
   SEO METADATA – CONTACT PAGE
========================= */
export const metadata = {
  title: "Contact Agarwal Rabdiwala | Train Food Delivery at Abu Road",
  description:
    "Contact Agarwal Rabdiwala for train food delivery, bulk food orders and enquiries at Abu Road Railway Station. Call now for hygienic vegetarian meals.",
  alternates: {
    canonical: "https://www.agarwalrabdiwala.in/contact",
  },
};

export default function ContactPage() {
  return (
    <>



      <AnnouncementBar />
      <Navbar />
      {/* =========================
          CONTACT PAGE CONTENT
      ========================= */}
      <main className="bg-gray-50">

        {/* HERO / PAGE INTRO */}
        <section className="max-w-7xl mx-auto px-4 pt-16 pb-12 text-center">
          {/* SINGLE H1 */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Contact <span className="text-orange-600">Agarwal Rabdiwala</span>
          </h1>

          <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Get in touch with <strong>Agarwal Rabdiwala</strong> for{" "}
            <strong>train food delivery at Abu Road Railway Station</strong>,
            bulk food orders for trains, group travel or general enquiries.
            We are a trusted IRCTC food partner serving fresh vegetarian & Jain meals.
          </p>
        </section>

        {/* CONTACT GRID */}
        <section className="max-w-7xl mx-auto px-4 pb-20 grid md:grid-cols-2 gap-10">

          {/* LEFT – MAP */}
          <div className="rounded-2xl overflow-hidden shadow-lg border">
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d367.9871527307733!2d72.78441783511123!3d24.480993220499993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395d28bcc46cca67%3A0x9ee4112bc43376e4!2sAgarwal%20Rabdiwala%20%E2%80%93%20IRCTC%20Food%20Delivery%20Abu%20Road!5e1!3m2!1sen!2sin!4v1768028099542!5m2!1sen!2sin" 
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[350px] md:h-full border-0"
              title="Agarwal Rabdiwala Abu Road Railway Station Location"
            />
          </div>

          {/* RIGHT – CONTACT DETAILS */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 flex flex-col justify-center">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Train Food Delivery at Abu Road
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Agarwal Rabdiwala provides hygienic, fresh and pure vegetarian
              Jain meals delivered directly to your train seat at{" "}
              <strong>Abu Road Railway Station</strong>. We also specialize in{" "}
              <Link href="/bulk-order" className="text-orange-600 font-semibold underline">
                bulk food orders for trains
              </Link>{" "}
              and group travel.
            </p>

            {/* NAP DETAILS */}
            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                📍 <strong>Address:</strong> Railway Parking Area, Abu Road Railway Station,
                Rajasthan, India
              </p>

              <p>
                📞 <strong>Phone:</strong>{" "}
                <a href="tel:+918107139044" className="text-orange-600 font-semibold">
                  +91 81071 39044
                </a>
                ,{" "}
                <a href="tel:+918290951295" className="text-orange-600 font-semibold">
                  +91 82909 51295
                </a>
              </p>

              <p>
                ✉️ <strong>Email:</strong>{" "}
                <a
                  href="mailto:agarwalrabdiwala@gmail.com"
                  className="text-orange-600 font-semibold"
                >
                  agarwalrabdiwala@gmail.com
                </a>
              </p>
            </div>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+918290951295"
                className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-md transition"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/918107139044"
                target="_blank"
                className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md transition"
              >
                💬 WhatsApp
              </a>

              <a
                href="https://share.google/fDBGHZ6ybghAmcNKf"
                target="_blank"
                className="px-6 py-3 rounded-xl bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold shadow-md transition"
              >
                📍 View on Google Maps
              </a>
              <a
                href="https://www.google.com/search?kgmid=/g/11gg654w9j"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white border border-gray-300 hover:bg-gray-100 
             text-gray-800 font-semibold shadow-md transition"
              >
                ⭐ View on Google Business Profile
              </a>

            </div>
          </div>
        </section>

        {/* SEO TEXT BLOCK */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why Contact Agarwal Rabdiwala?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Agarwal Rabdiwala is a well-known name for{" "}
            <strong>train food delivery at Abu Road</strong>.
            As an IRCTC food partner, we focus on hygiene, taste and timely delivery.
            Whether you are a solo passenger, family, or a large group,
            our team ensures a smooth and reliable food ordering experience on trains.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
