import React, { useEffect, useState } from "react";
import styles from "./Recipes.module.css";
import Card from "../../components/CardEat";

const Recipes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes/meal-type/snack")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.recipes);
      });
  }, []);

  return (
    <section className={styles.recipes} id="Recipes">
      <p className={styles.recipes__title}>
        Our Top <span className="highlight">Recipes</span>
      </p>
      <div className={styles.recipes__cardsArea}>
        {data
          .sort((x, y) => y["rating"] - x["rating"])
          .map((obj, index) => (
            <Card
              title={obj["name"]}
              time={obj["cookTimeMinutes"]}
              imageUrl={obj["image"]}
              rating={obj["rating"]}
              key={index}
            />
          ))}
      </div>
    </section>
  );
};

export default Recipes;
