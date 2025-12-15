"use client";

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { motion } from "framer-motion"
import AnnouncementBar from '@/components/AnnouncementBar';
const page = () => {
    return (
        <>
        <AnnouncementBar/>
            <Navbar />
            {/* HERO SECTION */}
            <section className="relative w-full bg-black text-white py-24 md:py-32 flex justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-4xl mx-auto px-6 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
                        Disclaimer
                    </h1>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 180 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="h-[4px] bg-orange-500 rounded-full mx-auto mt-3"
                    />

                    <p className="mt-6 text-lg text-orange-100 max-w-xl mx-auto leading-relaxed">
                        Please read this disclaimer carefully before using our website.
                    </p>
                </motion.div>
            </section>

            {/* CONTENT SECTION */}
            <section className="w-full flex justify-center bg-white py-16 md:py-24">
                <div className="w-full max-w-[1350px] px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 space-y-10 text-gray-800 leading-relaxed">

                    {/* MAIN DISCLAIMER CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p>
                            The words of which the initial letter is capitalized have meanings defined under the following conditions.
                            The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                        </p>

                        <p>
                            For the purposes of this Disclaimer, “Company”, “We”, “Us” or “Our” refers to Aagarwal Rabdiwala, a
                            Proprietorship Firm, having its place of business at Shop No. 16, Railway Taxi Parking, Welcome Home,
                            Namaste, Abu Road, Rajasthan – 307026. “Service” refers to the website. “You” means the individual accessing the
                            Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service,
                            as applicable. “Website” refers to Aagarwal Rabdiwala, accessible from https://agarwalrabdiwala.in/.
                        </p>

                        <p>
                            The information contained on the Website is for general information purposes only. While we strive to keep the
                            information accurate and up to date, the Company makes no representations or warranties of any kind, express or
                            implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products,
                            services, or related graphics contained on the Website for any purpose.
                        </p>

                        <p>
                            The Company assumes no responsibility for errors or omissions in the contents of the Website. In no event shall
                            the Company be liable for any special, direct, indirect, incidental, or consequential damages or any damages
                            whatsoever, whether in an action of contract, negligence, or any other legal theory, arising out of or in connection
                            with the use of the Website or the contents of the Website.
                        </p>

                        <p>
                            The Company reserves the right to make additions, deletions, or modifications to the contents on the Website at
                            any time without prior notice. The Company does not warrant that the Website is free of viruses or other harmful
                            components.
                        </p>

                        <p>
                            The Website may contain links to external websites that are not provided, maintained, or in any way affiliated with
                            the Company. The Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information
                            on these external websites and shall not be responsible for any loss or damage caused by your use of such links.
                        </p>

                        <p>
                            The information provided on the Website is for general guidance only. Even if the Company takes reasonable steps
                            to ensure that the content is current and accurate, errors may occur due to the changing nature of laws, rules,
                            regulations, and business practices. The Company is not responsible for any errors or omissions, or for the results
                            obtained from the use of this information.
                        </p>

                        <p>
                            The Website may contain content which includes opinions, views, or user-generated content. Such content represents
                            the views of the respective authors and does not necessarily reflect the official views or policy of the Company.
                            Users are solely responsible for the content they post and any legal consequences arising therefrom. The Company
                            reserves the right to remove any content at its sole discretion.
                        </p>

                        <p>
                            The information available on the Website is not intended as, and shall not be understood or construed as,
                            professional advice including but not limited to legal, financial, tax, or business advice. You should consult
                            with appropriate professionals before taking any action based upon the information available on this Website.
                        </p>

                        <p>
                            All information on the Website is provided on an “as is” basis, without warranty of any kind, express or implied,
                            including but not limited to warranties of performance, merchantability, or fitness for a particular purpose. The
                            Company shall not be liable for any decision made or action taken in reliance upon the information provided on the
                            Website or for any consequential, special, or similar damages.
                        </p>

                        <p className="font-semibold text-gray-900">
                            If you have any questions about this Disclaimer, you may contact us at info@agarwalrabdiwala.in
                        </p>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default page