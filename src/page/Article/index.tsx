import React from "react";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import style from "./Article.module.css"

const Article = () => {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <h2>Article</h2>
      </main>
      <Footer />
    </div>
  );
};

export default Article;
