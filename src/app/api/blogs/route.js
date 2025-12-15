import cloudinary from "@/lib/cloudinary";
import connectDb from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

// Create Blog
export async function POST(req) {
    await connectDb();
    try {
        const formData = await req.formData();
        console.log(`FormData: ${formData.get("image")}`)
        const title = formData.get("title");
        const content = formData.get("content");
        const image = formData.get("image");
        if (!title || !content || !image) {
            return NextResponse.json({ error: "All fields are required !" }, { status: 400 })
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

        const slug = title.toLowerCase().replace(/\s+/g, "-");

        await Blog.create({
            title,
            content,
            slug,
            image: uploadResult.secure_url,
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
