import mongoose from "mongoose";

export const connectDB =  async(uri)=>{         // this uri came when we are calling this function 
  try {
    await mongoose.connect(uri);
    console.log("DB CONNECTED 👌");
  } catch (error) {
    console.log("Database connection error " , error);
  }
}