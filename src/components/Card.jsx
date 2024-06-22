import { Link } from "react-router-dom";

const Card = ({ id, image, title, date, author }) => {
  return (
    <Link to={`/blogs/${id}`} className="card">
      <img className="card-img" src={image} alt={title + "img"} />
      <div className="title">
        <h3>{title}</h3>
        <p className="author">By {author}</p>
      </div>
    </Link>
  );
};

export default Card;
