import express from "express";
import mongoose from "mongoose";
import { addBlog, getBlog, getBlogs } from "./controllers/blog.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.options("*", cors(corsOptions));
app.use(
  cors({
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.get("/", (_, res) => {
  res.json({ message: "App working properly." });
});

const blogsRouter = express.Router();

blogsRouter.post("/", addBlog);
blogsRouter.get("/", getBlogs);
blogsRouter.get("/:id", getBlog);

mongoose.connect(process.env.MONGODB);

app.use("/blogs", blogsRouter);

app.listen(PORT, () => console.log("app running successfully."));
export default app;
