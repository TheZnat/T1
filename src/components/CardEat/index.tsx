import React from "react";
import styles from "./CardEat.module.css";

type Props = {
  title: string;
  time: number;
  imageUrl?: string;
  rating: number;
};

const Card = ({ title, time, imageUrl, rating }: Props) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.card__img}
        alt="карточка еды"
        src={imageUrl}
        loading="lazy"
      />
      <div className={styles.card__textArea}>
        <p className={styles.card__textArea__label}>Pizza</p>
        <p className={styles.card__textArea__title}>{title}</p>
        <div className={styles.card__textArea__info}>
          <p className={styles.card__textArea__info__time}>{time}min • </p>
          <div className={styles.card__textArea__info__ratingIcon}></div>
          <p className={styles.card__textArea__info__rating}>{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
