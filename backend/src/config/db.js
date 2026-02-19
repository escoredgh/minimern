import mongoose from "mongoose";

export async function connectDB(uri) {
    try {
        await mongoose.connect(uri)
        console.log("Conectado a MongoDB")
    } catch (err) {
        console.error("Error en la conexión a Mongo: ", err.message)
        process.exit(1)
    }
}