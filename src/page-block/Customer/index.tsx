import React from "react";
import styles from "./Customer.module.css";
import CustomerCard from "../../components/CustomerCard/index.tsx";

const Customer = () => {
  const data = [
    {
      name: "Alexander R.",
      experience: " 01 Year With Us",
      imageUrl: "reviews",
      text: "Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time",
      rating: 5,
    },
    {
      text: "Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time",
      rating: 1,
    },
    {
      text: "Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time",
      rating: 3,
    },
  ];

  return (
    <section className={styles.customer}>
      <h2 className={styles.customer__title}>
        <span>Customer</span> Say
      </h2>

      <div className={styles.test}>
        <div className={styles.reviews__area}>
          {data.map((obj, index) => (
            <CustomerCard {...obj} key={index} />
          ))}
        </div>
      </div>

      <div className={styles.scrolly}></div>
    </section>
  );
};

export default Customer;
