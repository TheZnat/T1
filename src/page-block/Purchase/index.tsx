import React from "react";
import styles from "./Purchase.module.css";
import Info from "../../assets/savings.png";
import MiniCard from "../../components/MiniCard";

const Purchase = () => {
  const data = [
    {
      imageUrl: "ChickenHell",
      title: "Chicken Hell",
      status: "On The Way",
      time: "3:09 PM",
    },
    {
      imageUrl: "FishHellVeg",
      title: "Swe Dish",
      status: "Delivered",
      time: "Yesterday",
    },
    {
      imageUrl: "SweDish",
      title: "Fish Hell Veg",
      status: "Cancelled",
      time: "Yesterday",
    },
  ];

  return (
    <section className={styles.purchase}>
      <div className={styles.purchase__textArea}>
        <p className={styles.purchase__textArea__title}>
          Control <span className="highlight">Purchases</span>
          <br></br> Via Dashboard
        </p>
        {data.map((obj, index) => (
          <MiniCard {...obj} key={index}/>
        ))}
      </div>

      <img alt="Purchases" src={Info} className={styles.purchase__img} />
    </section>
  );
};

export default Purchase;
