import React from "react";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import Customer from "src/page-block/Customer";
import Enjoy from "src/page-block/Enjoy";
import InfoBanner from "src/page-block/InfoBanner";
import Purchase from "src/page-block/Purchase";
import Quality from "src/page-block/Quality";
import Questions from "src/page-block/Questions";
import Recipes from "src/page-block/Recipes";

const Home = () => {
  return (
      <div className="page">
        <Header />
        <main className="main">
          <Enjoy />
          <InfoBanner />
          <Quality />
          <Recipes />
          <Purchase />
          <Customer />
          <Questions />
        </main>
        <Footer />
      </div>
  );
};

export default Home;
