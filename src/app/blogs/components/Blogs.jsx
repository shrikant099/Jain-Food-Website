"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const blogs = [
    {
        id: 1,
        title: "Train Food Delivery: A New Comfort for Indian Travelers",
        image:
            "/home/chilli-paneer.png",
        desc: `
Traveling by train in India has always been an experience filled with stories,
long journeys and memorable moments. However, food availability has often been
a concern for passengers, especially for those looking for hygienic and Jain
meal options.

Train food delivery services have completely changed this experience. Now,
freshly prepared Jain meals can be delivered directly to your seat at selected
stations. This ensures purity, hygiene, and convenience, allowing travelers to
enjoy their journey without worrying about outside food or station vendors.
    `,
    },
    {
        id: 2,
        title: "Why Jain Food is the Healthiest Choice During Travel",
        image:
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1400&q=80",
        desc: `
Jain food is known for its sattvic nature, simplicity, and focus on purity.
During travel, when digestion and hygiene are major concerns, Jain meals
become the safest and healthiest option.

Prepared without onion, garlic, or root vegetables, Jain food is light on the
stomach and rich in nutrition. When delivered fresh during train journeys or
at home, it provides comfort, taste, and peace of mind for families, elders,
and frequent travelers alike.
    `,
    },
    {
        id: 3,
        title: "Home Delivery of Fresh Jain Meals: Taste Meets Convenience",
        image:
            "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=1400&q=80",
        desc: `
With changing lifestyles, home food delivery has become a necessity rather than
a luxury. For Jain families, finding food that matches their dietary values can
be challenging.

Home delivery of Jain meals ensures freshly cooked food reaches your doorstep
without compromising on taste or tradition. Whether it is a daily meal or a
special occasion, having access to trusted Jain food delivery services brings
both comfort and reliability.
    `,
    },
    {
        id: 4,
        title: "Benefits of Ordering Food Online for Train Journeys",
        image:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80",
        desc: `
Online food ordering for trains is no longer just a convenience—it is becoming
the preferred choice for smart travelers. With pre-booking options, transparent
pricing, and assured hygiene, passengers can enjoy quality meals on long routes.

For Jain travelers, this service ensures access to pure vegetarian meals without
compromise. Timely delivery, secure packaging, and consistent quality make
online train food delivery a reliable solution for modern travel needs.
    `,
    },
    /* 🔥 NEW BLOG 5 */
    {
        id: 5,
        title: "How Hygienic Food Delivery Improves Long Train Journeys",
        image:
            "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1400&q=80",
        desc: `
Long-distance train journeys can be tiring, especially when food quality is
uncertain. Hygienic food delivery services ensure that meals are prepared in
clean kitchens, packed securely, and delivered fresh at the right time.

For families, elderly passengers, and Jain travelers, hygiene is not just a
preference—it is a necessity. Choosing a trusted food delivery service for
train journeys significantly improves comfort, health, and overall travel
experience.
    `,
    },
    {
        id: 6,
        title: "Why Pre-Ordering Food for Trains is a Smart Choice",
        image:
            "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1400&q=80",
        desc: `
    Pre-ordering food for train journeys eliminates last-minute stress and unhealthy
    choices. By booking meals in advance, passengers can plan their dining according
    to station stops, meal preferences, and dietary needs.
    
    For Jain food lovers, pre-ordering ensures availability of pure vegetarian meals
    without compromise. It also guarantees timely delivery, fixed pricing, and peace
    of mind throughout the journey, making it a smart and reliable travel decision.
        `,
    },
];

export default function BlogsPage() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-24">

            {/* PAGE HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center mb-20"
            >
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
                    Our Food Delivery <span className="text-orange-600">Stories</span>

                </h1>
                <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
                    Explore detailed insights about Jain food delivery for trains and homes.
                    Learn how hygienic meals, convenience, and tradition come together to
                    create a better dining experience for travelers and families.
                </p>
            </motion.div>

            {/* BLOG SECTIONS */}
            <div className="space-y-28">
                {blogs.map((blog, i) => (
                    <motion.div
                        key={blog.id}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* IMAGE */}
                        <div className="relative h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* CONTENT */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                {blog.title}
                            </h2>

                            <div className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line">
                                {blog.desc}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
