import mongoose from 'mongoose'

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(error)
    }
}

export default connection;