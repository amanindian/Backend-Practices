import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv()
const mongoURI = process.env.mongoURI

const connectToDB = async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log("Our Database connected successfully ")
    } catch (error) {
        console.error(error)
    }
}

export default connectToDB;