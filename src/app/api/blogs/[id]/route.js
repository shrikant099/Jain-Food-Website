import connectDb from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

// GetBlog By Id
export async function GET(req, { params }) {
    await connectDb();

    try {
        const { id } = await params;
        console.log(id);
        

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
        console.log(id)
        const formData = await req.formData();
        const title = formData.get("title");
        const content = formData.get("content");
        const image = formData.get("image");

        const blog = await Blog.findById(id);
        if (!blog) {
            return NextResponse.json({ error: "Blog not found" }, { status: 404 })
        }

        if (title) blog.title = title;
        if (content) blog.content = content;

        // update image (if new image sent)
        if (image && typeof image !== "string") {
            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const uploadResult = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream(
                    { folder: "agarwal_blogs" },
                    (err, result) => {
                        if (err) reject(err)
                        resolve(result)
                    }
                ).end(buffer)
            })
            blog.image = uploadResult.secure_url;
        }
        await blog.save();
        return NextResponse.json(
            { message: "Blog updated successfully", success: true },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            { error: "Error updating blog" },
            { status: 500 }
        );
    }
}