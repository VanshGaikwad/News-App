import React from "react";

const Card = ({ title, content, author, publishedAt, url, urlToImage }) => {
  const truncate = (text, length) =>
    text && text.length > length ? text.slice(0, length) + "..." : text;

  const fallbackImage =
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800";

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="card">
      <div className="card-img">
        <img src={urlToImage || fallbackImage} alt={title || "news"} />
      </div>

      <div className="card-body">
        <h3>{truncate(title || "No Title Available", 65)}</h3>
        <p className="desc">
          {truncate(content || "No description available", 120)}
        </p>

        <div className="meta">
          <span>{author || "Unknown"}</span>
          <span>
            {publishedAt
              ? new Date(publishedAt).toLocaleDateString()
              : "No Date"}
          </span>
        </div>
      </div>
    </a>
  );
};

export default Card;
