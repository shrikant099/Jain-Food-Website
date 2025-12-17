import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { notFound } from "next/navigation";

/* ===== SEO METADATA ===== */
export async function generateMetadata({ params }) {
    const { slug } = await params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/blogs?slug=${slug}`,
        { cache: "no-store" }
    );

    const blog = await res.json();

    if (!blog) {
        return { title: "Blog Not Found" };
    }

    return {
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription,
        keywords: blog.metaKeywords,
    };
}

/* ===== PAGE ===== */
const Page = async ({ params }) => {
    const { slug } = await params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/blogs?slug=${slug}`,
        { cache: "no-store" }
    );

    const blog = await res.json();

    if (!blog) notFound();

    return (
        <>
            <AnnouncementBar />
            <Navbar />

            <section className="max-w-4xl mx-auto px-4 py-24">

                {/* TITLE */}
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                    {blog.title}
                </h1>

                {/* IMAGE */}
                {blog.image && (
                    <div className="relative w-full h-[350px] mb-12 rounded-3xl overflow-hidden">
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 800px"
                            className="object-cover"
                        />
                    </div>
                )}

                {/* CONTENT (🔥 MAIN MAGIC) */}
                <article
                    className="prose prose-lg md:prose-xl max-w-none
             prose-h1:text-4xl
             prose-h2:text-2xl
             prose-h2:font-bold
             prose-h2:mt-10
             prose-p:text-gray-700
             prose-li:marker:text-orange-600"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />


            </section>

            <Footer />
        </>
    );
};

export default Page;
