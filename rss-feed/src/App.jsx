import axios from "axios";
import { useState, useEffect } from "react";
import Feed from "./Feed";

function App() {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000/");
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <h1>rss feed</h1>
      <h2>Good Morning, Anuj</h2>
      {articles.map((item, i) => (
        <Feed
          key={i}
          title={item.item.title}
          link={item.item.link}
          date={item.item.pubDate}
        />
      ))}
    </>
  );
}

export default App;
