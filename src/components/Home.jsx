import React from "react";
import Card from "./Card";

const Home = ({ news }) => {
  return (
    <div className="home">
      {news.length === 0 ? (
        <h2>No news available...</h2>
      ) : (
        news.map((element) => (
          <Card
            key={element.url}
            title={element.title}
            content={element.content}
            author={element.author}
            publishedAt={element.publishedAt}
            url={element.url}
            urlToImage={element.urlToImage}
          />
        ))
      )}
    </div>
  );
};

export default Home;
