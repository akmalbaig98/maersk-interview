import express from "express"
import dotenv from "dotenv"

import connectDB from "./db.js"
// import Cors from 'cors';
import userRoutes from "./routes/userRoutes.js"

const app = express()
dotenv.config()

connectDB()

// app.use(cors)
app.use(express.json())
// app.use(Cors());

app.get("/", (req, res) => res.status(200).send("Hello"))


app.use("/api/users", userRoutes)

if(process.env.NODE_ENV==="production"){
    
}

const PORT = process.env.PORT || 8000

app.listen(PORT, console.log("Running on " + PORT))
