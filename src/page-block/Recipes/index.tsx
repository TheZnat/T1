import React from "react";
import styles from "./Recipes.module.css";
import Card from "../../components/CardEat/index.tsx";

const Recipes = () => {
  const data = [
    {
      title: "The Chicken King",
      time: 24,
      imageUrl: "TheChickenKing",
      rating: 4.8,
    },
    {
      title: "The Burger King",
      time: 24,
      imageUrl: "TheBurgerKing",
      rating: 4.9,
    },
    {
      title: "The Chicken King",
      time: 24,
      imageUrl: "TheChickenKing",
      rating: 4.8,
    },
  ];

  return (
    <section className={styles.recipes}>
      <p className={styles.recipes__title}>
        Our Top <span>Recipes</span>
      </p>

      <div className={styles.recipes__cardsArea}>
        {data.map((obj) => (
          <Card {...obj} />
        ))}
        <div className={styles.recipes__link}>View All</div>
      </div>
    </section>
  );
};

export default Recipes;
