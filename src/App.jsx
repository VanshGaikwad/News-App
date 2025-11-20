import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  const [news, setNews] = useState([]);

  const filterNews = async (category = "everything") => {
    let link = "";

    if (category === "everything") {
      link = `https://newsapi.org/v2/everything?q=latest&language=en&sortBy=publishedAt&apiKey=${API_KEY}`;
    } else {
      link = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
    }

    try {
      const proxy = `https://api.allorigins.win/get?url=${encodeURIComponent(
        link
      )}`;

      const res = await axios.get(proxy);

      // allorigins returns { contents: "actual_response_as_string" }
      const realData = JSON.parse(res.data.contents);

      console.log(realData); // for debugging

      setNews(realData.articles || []);
    } catch (err) {
      console.error("API ERROR:", err);
      setNews([]);
    }
  };

  useEffect(() => {
    filterNews();
  }, []);

  return (
    <>
      <Navbar filterNews={filterNews} />
      <Home news={news} />
      <Footer />
    </>
  );
};

export default App;
