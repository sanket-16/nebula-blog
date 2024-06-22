import mongoose from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  author: String,
  image: String,
  linkedin: String,
  content: String,
});

const Blog = mongoose.model("Blog", blogSchema);

export { Blog };
