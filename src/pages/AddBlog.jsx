import { useState } from "react";

const AddBlog = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [author, setAuthor] = useState();
  const [linkedin, setLinkedin] = useState();
  const [image, setImage] = useState();

  const addBlog = async () => {
    const res = await fetch(`${import.meta.env.VITE_API}blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, author, linkedin, image }),
    });
    const resjson = await res.json();
    if (res.status !== 200) return alert("Failed to create blog.");
    alert("Blog created successfully.");
    setTitle("");
    setContent("");
    setAuthor("");
    setLinkedin("");
    setImage("");
    console.log(resjson);
  };
  return (
    <form className="add-blog">
      <div className="input-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => {
            setTitle(event.currentTarget.value);
          }}
        />
      </div>
      <div className="input-group">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(event) => {
            setContent(event.currentTarget.value);
          }}
        />
      </div>
      <div className="input-group">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(event) => {
            setAuthor(event.currentTarget.value);
          }}
        />
      </div>
      <div className="input-group">
        <label htmlFor="image-link">Image Link</label>
        <input
          type="link"
          id="image-link"
          value={image}
          onChange={(event) => {
            setImage(event.currentTarget.value);
          }}
        />
      </div>
      <div className="input-group">
        <label htmlFor="linkedin">Linkedin</label>
        <input
          type="link"
          id="linkedin"
          value={linkedin}
          onChange={(event) => {
            setLinkedin(event.currentTarget.value);
          }}
        />
      </div>
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          addBlog();
        }}
      >
        Add Blog
      </button>
    </form>
  );
};

export default AddBlog;
