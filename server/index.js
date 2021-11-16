import  express from "express";
import  cors from "cors";
import  bodyParser from "body-parser";
import  mongoose from "mongoose";
import postRouter from "./routes/posts.js";
import dotenv from "dotenv";

const app = express()
dotenv.config()

app.use(bodyParser.json({limit: "32mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "32mb", extended: true}))
app.use(cors())

app.use('/posts', postRouter)


const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECT_URL).then(() => app.listen(PORT, () => console.log(`Server is listen on port: ${PORT}`)))
.catch(err => console.log(err.message))