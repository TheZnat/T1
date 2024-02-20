import React from "react";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import style from "./Blog.module.css"

const Blog = () => {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <h2>Blog</h2>
        <p>
          Latest <span>Articles</span>
        </p>
      
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
