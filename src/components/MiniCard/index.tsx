import React from "react";
import styles from "./MiniCard.module.css";

type Props = {
    imageUrl?: string;
    title: string;
    status: string;
    time: string;
  };

const MiniCard = ({ imageUrl, title, status, time }: Props) => {
  return (
    <div className={styles.miniCards}>
      <img
        src={require(`../../assets/Purchases/${imageUrl}.png`)}
        alt="картика еды"
        className={styles.miniCards__img}
        loading="lazy"
      />
      <div className={styles.miniCards__textArea}>
        <p className={styles.miniCards__textArea__title}>{title}</p>
        <p className={styles.miniCards__textArea__status}>{status}</p>
      </div>
      <p className={styles.miniCards__time}>{time}</p>
    </div>
  );
};

export default MiniCard;
