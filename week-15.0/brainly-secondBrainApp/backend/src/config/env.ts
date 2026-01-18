import dotenv from "dotenv";

dotenv.config()

const requiredEnvVars = [
  "PORT",
  "MONGO_URI",
  "JWT_SECRET",
  "BASE_URL",
  "OPENAI_API_KEY"
]

const missingVars = requiredEnvVars.filter(
  (key) => !process.env[key]
)

if(missingVars.length > 0){
  console.error("❌ Missing required environment variables:")
  missingVars.forEach((v) => console.error(`   - ${v}`))
  process.exit(1)
}

console.log("✅ Environment variables loaded successfully")
