import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Kajal:Kajal@1234@cluster0.0n9ji.mongodb.net/blog-app')
    console.log('DB Connected');  
}