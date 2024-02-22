import React, { useEffect, useRef, useState } from "react";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import style from "./Blog.module.css";
import BlogCard from "src/components/BlogCard";

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://dummyjson.com/posts?limit=12&skip=2&select=title,reactions,userId,body,tags"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.posts);
      });
  }, []);

  return (
    <div className="page">
      <Header />
      <main className="main">
        <div className={style.area}>
          <h2 className={style.area__title}>
            Latest <span className="highlight">Articles</span>
          </h2>
          <div className={style.cardsArea}>
            {data.map((obj, index) => (
              <BlogCard
                title={obj["title"]}
                text={obj["body"]}
                rating={obj["reactions"]}
                teg={obj["tags"]}
                key={index}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
