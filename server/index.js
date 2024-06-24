import express from "express";
import mongoose from "mongoose";
import { addBlog, getBlog, getBlogs } from "./controllers/blog.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = 8000;
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

app.get("/", (_, res) => {
  res.json({ message: "App working properly." });
});

const blogsRouter = express.Router();

blogsRouter.post("/", addBlog);
blogsRouter.get("/", getBlogs);
blogsRouter.get("/:id", getBlog);

mongoose.connect(process.env.MONGODB);

app.use("/blogs", blogsRouter);
app.use("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

export default serverless(app);
