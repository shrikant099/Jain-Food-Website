import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/Enquiry";
import Link from "next/link";

/* =========================
   SEO METADATA – BULK ORDER
========================= */
export const metadata = {
    title: "Bulk Train Food Order at Abu Road | Agarwal Rabdiwala",
    description:
        "Place bulk train food orders at Abu Road Railway Station with Agarwal Rabdiwala. Hygienic vegetarian & Jain meals for groups, events and train passengers.",
    alternates: {
        canonical: "https://www.agarwalrabdiwala.in/bulk-order",
    },
};

export default function BulkOrderPage() {
    return (
        <>
            <AnnouncementBar />
            <Navbar />

            <main className="bg-gray-50">

                {/* =========================
            PAGE HERO / INTRO
        ========================= */}
                <section className="max-w-7xl mx-auto px-4 pt-16 pb-12 text-center">
                    {/* SINGLE H1 */}
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
                        Bulk Train Food Orders at{" "}
                        <span className="text-orange-600">Abu Road</span>
                    </h1>

                    <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
                        Looking to place a <strong>bulk food order for trains</strong> at{" "}
                        <strong>Abu Road Railway Station</strong>? Agarwal Rabdiwala is a
                        trusted IRCTC food partner offering fresh, hygienic vegetarian &
                        Jain meals for group travel, tour operators and events.
                    </p>
                </section>

                {/* =========================
            INFO SECTION
        ========================= */}
                <section className="max-w-6xl mx-auto px-4 pb-16 grid md:grid-cols-2 gap-10">

                    {/* LEFT – CONTENT */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Why Choose Agarwal Rabdiwala for Bulk Orders?
                        </h2>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Agarwal Rabdiwala specializes in preparing and delivering{" "}
                            <strong>bulk train food orders</strong> at Abu Road with a strong
                            focus on hygiene, taste and on-time delivery. Our meals are
                            freshly cooked and packed to ensure quality for every passenger.
                        </p>

                        <ul className="mt-6 space-y-3 text-gray-700">
                            <li>✔ Bulk food orders for train passengers</li>
                            <li>✔ Pure vegetarian & Jain meal options</li>
                            <li>✔ Ideal for groups, tours & events</li>
                            <li>✔ Reliable delivery at Abu Road Railway Station</li>
                        </ul>

                        {/* CTA BUTTONS */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="tel:+918290951295"
                                className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-md transition"
                            >
                                📞 Call for Bulk Order
                            </a>

                            <Link
                                href="/services/train-delivery"
                                className="px-6 py-3 rounded-xl bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold shadow-md transition"
                            >
                                🍽️ Go to Menu
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT – SEO SUPPORT TEXT */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                            Bulk Food Delivery for Trains at Abu Road
                        </h3>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Whether you are managing a tour group, corporate travel or family
                            journey, our bulk order service ensures smooth coordination and
                            timely food delivery at your train seat.
                        </p>

                        <p className="mt-3 text-gray-600 leading-relaxed">
                            You can also explore our{" "}
                            <Link
                                href="/services/train-delivery"
                                className="text-orange-600 font-semibold underline"
                            >
                                regular train food delivery service
                            </Link>{" "}
                            for individual orders.
                        </p>
                    </div>
                </section>

                {/* =========================
            BULK ORDER ENQUIRY FORM
        ========================= */}
                <EnquirySection />

                {/* =========================
            SEO TEXT BLOCK
        ========================= */}
                <section className="max-w-6xl mx-auto px-4 pb-20">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Trusted Bulk Train Food Partner at Abu Road
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        Agarwal Rabdiwala has been serving thousands of passengers with
                        reliable <strong>bulk train food orders at Abu Road</strong>. As an
                        IRCTC food partner, we maintain strict hygiene standards and ensure
                        every meal meets quality expectations.
                    </p>
                </section>
            </main>

            <Footer />
        </>
    );
}
