import React, { useEffect, useState } from "react";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import style from "./Blog.module.css";
import BlogCard from "src/components/BlogCard";

const Blog = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [perPage] = useState(12);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://dummyjson.com/posts?&select=title,reactions,userId,body,tags"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.posts);
        setLoading(false);
      });
  }, []);

  const lastCardsIndex = currentPage * perPage;
  const firstCardsIndex = lastCardsIndex - perPage;
  const currentCards = data.slice(firstCardsIndex, lastCardsIndex);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className="page">
      <Header />
      <main className="main">
        <div className={style.area}>
          <h2 className={style.area__title}>
            Latest <span className="highlight">Articles</span>
          </h2>
          <div className={style.cardsArea}>
            {loading ? (
              <h2>Loading...</h2>
            ) : (
              currentCards.map((obj, index) => (
                <BlogCard
                  title={obj["title"]}
                  text={obj["body"]}
                  rating={obj["reactions"]}
                  teg={obj["tags"]}
                  key={index}
                />
              ))
            )}
          </div>
          <div className={style.buttonArea}>
            {firstCardsIndex === 0 ? (
              <div className={`${style.arrow} ${style.arrowLeftBlock}`}></div>
            ) : (
              <div
                className={`${style.arrow} ${style.arrowLeftActive}`}
                onClick={prevPage}
              ></div>
            )}

            {data.length < lastCardsIndex ? (
              <div className={`${style.arrow} ${style.arrowRightBlock}`}></div>
            ) : (
              <div
                className={`${style.arrow} ${style.arrowRightActive}`}
                onClick={nextPage}
              ></div>
            )}

            {/* <div
              className={`${style.prevPage} ${style.nextPage}`}
              onClick={nextPage}
            ></div> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
