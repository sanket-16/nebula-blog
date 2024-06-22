import { Blog } from "../models/blog.js";

const getBlog = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const blog = await Blog.find({ _id: id });
  if (!blog) return res.status(400).json({ error: "Blog not found" });

  res.status(200).json(blog);
};

const getBlogs = async (_, res) => {
  const blogs = await Blog.find();
  console.log(blogs);
  res.status(200).json(blogs.reverse());
};
const addBlog = async (req, res) => {
  console.log(req.body);
  const { author, content, title, linkedin, image } = req.body;
  try {
    const blog = new Blog({
      title,
      author,
      content,
      linkedin,
      image,
    });
    blog.save();
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// const deleteBlog = async () => {};

export { getBlog, getBlogs, addBlog };
