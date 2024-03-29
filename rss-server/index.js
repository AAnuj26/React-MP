import cors from "cors";
import express from "express";
import RSSParser from "rss-parser";

const feedURL = "https://netflixtechblog.com/feed";

const parser = new RSSParser();
let articles = [];

const parse = async (url) => {
  const feed = await parser.parseURL(url);
  feed.items.forEach((item) => {
    articles.push({ item });
  });
};
parse(feedURL);

let app = express();
app.use(cors());

app.get("/articles", (req, res) => {
  res.send(articles);
});

const server = app.listen(4000, () => {
  console.log("RSS Server running on port 4000");
});

export default server;
