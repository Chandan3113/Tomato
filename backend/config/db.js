import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://chandan:33858627@cluster0.dxcmnhx.mongodb.net/food-del').then(()=>console.log("DB IS CONNECTED"));
}