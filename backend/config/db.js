import mongoose from "mongoose";

const connectDB = async (MONGO_URI) => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`Successfully connected to mongoDB`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
