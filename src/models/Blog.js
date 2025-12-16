import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    image: String,
    content: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    category: {
        type: String,
        enum: ["Food", "Health", "Travel"],
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 200,
    },
    metaKeywords: [
        {
            type: String,
            trim: true,
        },
    ],
    metaDescription: {
        type: String,
        maxlength: 160,
    },

    metaTitle: {
        type: String,
        maxlength: 70,
    },

}, { timestamps: true });

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
