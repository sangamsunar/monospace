import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://monospacedb:vRYTrz4QQW0sz56v@cluster0.9ad67bg.mongodb.net/notes_db?appName=Cluster0",
    );
    console.log("MONGODB CONNECTED SUCCESSFULLY");
  } catch (error) {
    console.error("Failed to connect to MONGODB", error);
  }
};
