import  express from "express";
import  cors from "cors";
import  bodyParser from "body-parser";
import  mongoose from "mongoose";
import postRouter from "./routes/posts.js";

const app = express()

app.use(bodyParser.json({limit: "32mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "32mb", extended: true}))
app.use(cors())

app.use('/posts', postRouter)


const CONNECT_URL = 'mongodb+srv://kollim:alzbetka21@cluster0.e1mws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECT_URL).then(() => app.listen(PORT, () => console.log(`Server is listen on port: ${PORT}`)))
.catch(err => console.log(err.message))