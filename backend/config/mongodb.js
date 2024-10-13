import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log("Database Connected"))
    const user = await mongoose.connect(process.env.MONGODB_URI)
    console.log(user)

}

export default connectDB;

