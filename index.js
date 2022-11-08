import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import dateRoutes from "./routes/dateRoutes.js"
import cors from "cors"


const app = express()
app.use(express.json())
dotenv.config()

connectDB()
app.use(cors())

// Routing
app.use("/api/users", userRoutes)
app.use("/api/dates", dateRoutes)



const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log("servidor corriendo en el puerto 4000")
})