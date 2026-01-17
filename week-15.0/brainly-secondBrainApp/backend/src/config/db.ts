import mongoose from "mongoose"

export const connectDb = async () => {
  try{
    const conn = await mongoose.connect(
      process.env.MONGO_URI as string
    )
    console.log(`✅ MongoDb connected: ${conn.connection.host}`)
  }
  catch(error){
    console.error("❌ MongoDb connection failed")
    console.error(error)
    process.exit(1)
  }
}