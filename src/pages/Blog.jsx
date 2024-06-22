import { useParams } from "react-router-dom";
const Blog = () => {
  const { id } = useParams();
  console.log(id);
  return <div>Blog</div>;
};

export default Blog;
