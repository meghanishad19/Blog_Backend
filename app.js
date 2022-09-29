import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";

const app = express();
app.use(cors())
app.use(express.json());

app.use("/api/user",router)
app.use("/api/blog",blogRouter)

mongoose.connect('mongodb+srv://admin:Mph1yuLgCHwbLaLn@cluster0.tzd3tk4.mongodb.net/Blog?retryWrites=true&w=majority')
  .then(() => app.listen(6000))
  .then(() =>
    console.log("Connected to Database and Listening TO localhost 6000")
  )
  .catch((err) => console.log(err));
