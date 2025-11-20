import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  const [news, setNews] = useState([]);

  const filterNews = async (category = "everything") => {
    try {
      const { data } = await axios.get(`/api/news?category=${category}`);
      setNews(data.articles || []);
    } catch (error) {
      console.error("ERROR:", error);
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
