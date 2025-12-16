import connectDb from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

// GetBlog By Id
export async function GET(req, { params }) {
    await connectDb();

    try {
        const { id } = await params;
        const blog = await Blog.findById(id);

        if (!blog) {
            return NextResponse.json(
                { error: "Blog not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(blog, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch blog" },
            { status: 500 }
        );
    }
}

// DELETE BLOG
export async function DELETE(req, context) {
    await connectDb();

    try {
        const { id } = await context.params;

        const blog = await Blog.findById(id);
        if (!blog) {
            return NextResponse.json(
                { error: "Blog not found" },
                { status: 404 }
            );
        }

        await Blog.findByIdAndDelete(id);

        return NextResponse.json(
            { message: "Blog deleted successfully", success: true },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: `Error deleting blog: ${error}`, success: false },
            { status: 500 }
        );
    }
}


// Upadte Blogs
export async function PUT(req, context) {
    await connectDb();

    try {
        const { id } = await context.params;
        const formData = await req.formData();

        const title = formData.get("title");
        const content = formData.get("content");
        const image = formData.get("image");
        const category = formData.get("category");
        const description = formData.get("description");
        const metaTitle = formData.get("metaTitle");
        const metaDescription = formData.get("metaDescription");
        const metaKeywords = formData.get("metaKeywords"); // comma separated

        const blog = await Blog.findById(id);
        if (!blog) {
            return NextResponse.json(
                { error: "Blog not found" },
                { status: 404 }
            );
        }

        /* ========= BASIC FIELDS ========= */
        if (title && title !== blog.title) {
            blog.title = title;

            // slug update ONLY if title changed
            blog.slug = title
                .toLowerCase()
                .trim()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "");
        }

        if (content) blog.content = content;
        if (category) blog.category = category;
        if (description) blog.description = description;
        if (metaTitle !== null) blog.metaTitle = metaTitle;
        if (metaDescription !== null) blog.metaDescription = metaDescription;

        /* ========= META KEYWORDS ========= */
        if (metaKeywords !== null) {
            blog.metaKeywords = metaKeywords
                ? metaKeywords.split(",").map(k => k.trim())
                : [];
        }

        /* ========= IMAGE LOGIC (UNTOUCHED) ========= */
        if (image && typeof image !== "string") {
            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const uploadResult = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream(
                    { folder: "agarwal_blogs" },
                    (err, result) => {
                        if (err) reject(err);
                        resolve(result);
                    }
                ).end(buffer);
            });

            blog.image = uploadResult.secure_url;
        }

        await blog.save();

        return NextResponse.json(
            { message: "Blog updated successfully", success: true },
            { status: 200 }
        );

    } catch (error) {
        console.error("Update Blog Error:", error);
        return NextResponse.json(
            { error: "Error updating blog" },
            { status: 500 }
        );
    }
}
