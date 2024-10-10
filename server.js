import { configDotenv } from "dotenv";
import express from "express";
import connectToDB from "./DB.js";
import routes from "./Routes/authRoute.js";

const app = express()

// 
connectToDB()

// .env Configure
configDotenv()
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());


app.get('/', (req, res) => {
    res.send("You are Calling Main URL");
});

app.use('/auth', routes)


app.listen(PORT, () => {
    console.log(`Our Server is Running on the ${PORT} `)
})

