import cloudinary from "@/lib/cloudinary";
import connectDb from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

// Create Blog
export async function POST(req) {
    await connectDb();
    try {
        const formData = await req.formData();

        const title = formData.get("title");
        const content = formData.get("content");
        const image = formData.get("image");
        const category = formData.get("category");
        const description = formData.get("description");
        const metaTitle = formData.get("metaTitle");
        const metaDescription = formData.get("metaDescription");
        const metaKeywords = formData.get("metaKeywords");

        if (!title || !content || !image || !category || !description) {
            return NextResponse.json(
                { error: "Required fields are missing" },
                { status: 400 }
            );
        }

        // File Buffer
        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Upload on cloudinary
        const uploadResult = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({
                folder: "agarwal_blogs",
                resource_type: "image"
            },
                (error, result) => {
                    if (error) reject(error);
                    resolve(result)
                }
            ).end(buffer)
        });

        // ===== SLUG =====
        const slug = title
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");

        // ===== KEYWORDS ARRAY =====
        const keywordsArray = metaKeywords
            ? metaKeywords.split(",").map((k) => k.trim())
            : [];

        // Create Blog
        await Blog.create({
            title,
            content,
            slug,
            category,
            description,
            image: uploadResult.secure_url,
            metaTitle,
            metaDescription,
            metaKeywords: keywordsArray,
        });


        return NextResponse.json({ message: "Blog create successfull", success: true }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: `Error creating blog: ${error}` }, { status: 500 })
    }
};

// Get Blog
export async function GET() {
    await connectDb();
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        return NextResponse.json(blogs);
    } catch (error) {
        return NextResponse.json({ error: `Failed To Fetch Blogs: ${error}` }, { status: 500 })
    }
}
