import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <h3>
        <Link to="/">Nebula Blog</Link>
      </h3>
      <Link to="add-blog">Add Blog</Link>
    </nav>
  );
};

export default Navbar;
