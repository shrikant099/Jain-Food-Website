import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
console.log(`Mongodb Uri: ${MONGO_URI}`);

if (!MONGO_URI) throw new Error("MongoUri Missing");

export default async function connectDb() {
    if (mongoose.connection.readyState >= 1) return;

    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDb Connected Succfull");
    }
    catch (error) {
        console.error("Mongo Error:", error);
    }
}