export default async function handler(req, res) {
  const API_KEY = process.env.VITE_NEWS_API_KEY;
  const category = req.query.category || "everything";

  let link = "";

  if (category === "everything") {
    link = `https://newsapi.org/v2/everything?q=latest&language=en&sortBy=publishedAt&apiKey=${API_KEY}`;
  } else {
    link = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
  }

  try {
    const response = await fetch(link);
    const data = await response.json();
    return res.status(200).json({ articles: data.articles || [] });
  } catch (err) {
    return res.status(500).json({ articles: [] });
  }
}
