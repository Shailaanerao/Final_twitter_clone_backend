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

const corsOptions={
    origin:"http://localhost:3000",
    credentials:true

}
app.use(cors(corsOptions))

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