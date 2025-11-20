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

    // FIX 1: Free plan supports only 'everything' reliably
    if (category === "everything") {
      link = `https://newsapi.org/v2/everything?q=latest&language=en&sortBy=publishedAt&apiKey=${API_KEY}`;
    } 
    else {
      link = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
    }

    try {
      const { data } = await axios.get(link);
      setNews(data.articles || []);
    } catch (error) {
      console.error("API Error:", error);
      setNews([]);
    }
  };

  useEffect(() => {
    filterNews("everything");
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
