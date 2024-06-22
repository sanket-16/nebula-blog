import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

const Blog = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const getBlog = async () => {
    const res = await fetch(`${import.meta.env.VITE_API}blogs/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resjson = await res.json();
    setBlog(resjson[0]);
    setLoading(false);
    if (res.status !== 200) setError(true);
    console.log(resjson);
  };

  useEffect(() => {
    getBlog();
  }, []);

  console.log(id);
  return (
    <div className="blog">
      {show && (
        <div className="popup-backdrop">
          <div className="popup">
            <div className="title">
              <h3>Share this blog</h3>
              <p className="close" onClick={() => setShow(false)}>
                X
              </p>
            </div>
            <div className="link">{window.location.href}</div>
            <button
              className="full-width"
              style={{ margin: "0em 2em" }}
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied");
              }}
            >
              Copy Link
            </button>
          </div>
        </div>
      )}
      {loading && <div className="lime-light">Loading...</div>}
      {!loading && error && (
        <div className="lime-light">Something went wrong...</div>
      )}
      {!loading && !error && (
        <>
          <img src={blog.image} alt={blog.title} />
          <h1>{blog.title}</h1>
          <div className="author-container">
            <p className="author">{blog.author}</p>
            <div className="author-buttons">
              <button>
                <a className="icon-button" href={blog.linkedin}>
                  <FaLinkedin />
                  Linkedin
                </a>
              </button>
              <button
                className="icon-button"
                onClick={() => setShow((prevValue) => !prevValue)}
              >
                <IoMdShare />
                Share
              </button>
            </div>
          </div>
          <div className="content">{blog.content}</div>
        </>
      )}
    </div>
  );
};

export default Blog;
