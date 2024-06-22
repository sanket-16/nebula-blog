import { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const getBlogs = async () => {
    const res = await fetch(`${import.meta.env.VITE_API}blogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resjson = await res.json();
    setBlogs(resjson);
    setLoading(false);
    if (res.status !== 200) setError(true);
    console.log(resjson);
  };
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <section className="blogs">
      {loading && <div className="lime-light">Loading....</div>}
      {!loading && error && (
        <div className="lime-light">Some error occured</div>
      )}
      {!loading &&
        !error &&
        blogs.length !== 0 &&
        blogs.map((blog) => (
          <Card
            key={blog._id}
            id={blog._id}
            author={blog.author}
            image={blog.image}
            title={blog.title}
          />
        ))}
    </section>
  );
};

export default Home;
