import express from "express"
import dotenv from "dotenv"
import databaseConnection from "./config/database.js"
import userRoute from './routes/userRoute.js'
import cookieParser from "cookie-parser"
import tweetRoute from "./routes/tweetRoute.js"
import cors from "cors"


dotenv.config({
    path:".env"
})

databaseConnection();
const app=express()

app.use(express.urlencoded({
    extended:true
}))

app.use(express.json())
app.use(cookieParser())

const allowedOrigins = [
    "http://localhost:3000",
    "https://serene-daffodil-5eaf62.netlify.app"
];

// const corsOptions={
//     // origin:"http://localhost:3000",
//     origin:"http://localhost:3000",
//     credentials:true

// }
// app.use(cors(corsOptions))

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
};
app.use(cors(corsOptions));


// defiling allowed origins

// const allowedOrginis=[
//     // what to put here
// ]



// test route
app.get("/",(req,res)=>{
    res.send("welcome to the API")
})

//api routes
app.use("/api/v1/user",userRoute)
app.use("/api/v1/tweet",tweetRoute)

app.listen(process.env.PORT,()=>{
    console.log(`Server listen at port ${process.env.PORT} `)
})