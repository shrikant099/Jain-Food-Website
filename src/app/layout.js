

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";
import CartPopup from "@/components/CartPopup";
import OrderFloatingButton from "@/components/OrderFloatingButton";
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* =========================
   SEO METADATA (FIXED)
========================= */
export const metadata = {
  title: "Order Train Food & Meals at Abu Road | Agarwal Rabdiwala",
  description:
    "Order fresh train food, meals & bulk food orders at Abu Road railway station. Agarwal Rabdiwala offers hygienic railway meals with minimum order options.",

  alternates: {
    canonical: "https://www.agarwalrabdiwala.in/",
  },

  openGraph: {
    type: "website",
    title: "Order Train Food & Meals at Abu Road | Agarwal Rabdiwala",
    description:
      "Order fresh train food, meals & bulk food orders at Abu Road railway station. Hygienic railway meals by Agarwal Rabdiwala.",
    url: "https://www.agarwalrabdiwala.in/",
    siteName: "Agarwal Rabdiwala",
    images: [
      {
        url: "IMAGE_URL_HERE",
        width: 1200,
        height: 630,
        alt: "Agarwal Rabdiwala Train Food Abu Road",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Order Train Food at Abu Road | Agarwal Rabdiwala",
    description:
      "Fresh train food, meals & bulk food orders at Abu Road railway station.",
    images: ["IMAGE_URL_HERE"],
  },

  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        { /* ========================= GOOGLE TAG MANAGER ========================= */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5HPQH6V5');
          `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReduxProvider>
          {children}
          <OrderFloatingButton />
          <CartPopup />
        </ReduxProvider>

        {/* GTM (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5HPQH6V5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>


        {/* =========================
            ORGANIZATION SCHEMA
        ========================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Agarwal Rabdiwala",
              url: "https://www.agarwalrabdiwala.in/",
              logo: "https://www.agarwalrabdiwala.in/logo1.png",
            }),
          }}
        />

        {/* =========================
            LOCAL BUSINESS SCHEMA
        ========================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name:
                "Agarwal Rabdiwala abu road-train food delivery store IRCTC FOOD PARTNER",
              image: "https://www.agarwalrabdiwala.in/logo1.png",
              url: "https://www.agarwalrabdiwala.in/",
              telephone: "+91-8107139044",
              priceRange: "₹100-₹200",
              servesCuisine: "Indian Vegetarian",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Abu Road",
                addressRegion: "Rajasthan",
                addressCountry: "IN",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "09:00",
                  closes: "22:30",
                },
              ],
              sameAs: [
                "https://www.google.com/search?kgmid=/g/11gg654w9j",
              ],
            }),
          }}
        />

        {/* =========================
            FAQ SCHEMA
        ========================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name:
                    "Do you provide train food delivery at Abu Road station?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, Agarwal Rabdiwala is an IRCTC food partner providing fresh train food delivery at Abu Road railway station.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I order food from Agarwal Rabdiwala?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "You can order train food and meals online through our website for delivery at Abu Road railway station.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the opening hours of Agarwal Rabdiwala?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "We are open daily from 9:00 AM to 10:30 PM.",
                  },
                },
                {
                  "@type": "Question",
                  name:
                    "Do you accept bulk food orders for trains?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes, we accept bulk food orders for train passengers, groups, and events at Abu Road.",
                  },
                },
              ],
            }),
          }}
        />

        {/* =========================
            GOOGLE ANALYTICS (GA4)
        ========================= */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </body>
    </html>
  );
}
