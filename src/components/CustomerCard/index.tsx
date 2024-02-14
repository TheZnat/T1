import React from "react";
import styles from "./CustomerCard.module.css";
import StarRating from "../../assets/StarRating.png";

type Props = {
  name?: string;
  experience?: string;
  imageUrl?: string;
  text: string;
  rating: number;
};

const CustomerCard = ({ name, experience, imageUrl, text, rating }: Props) => {
  const ratingСalculation = (num: number) => {
    let arrayRating = [0, 0, 0, 0, 0];

    for (let i = 0; i < num; i++) {
      arrayRating[i] = 1;
    }
    return arrayRating;
  };

  return (
    <div className={styles.reviews}>
      {name !== undefined && (
        <div className={styles.reviews__customerInfo}>
          <img
            className={styles.reviews__customerInfo__img}
            alt="фото пользователя"
            src={require(`../../assets/${imageUrl}.png`)}
          />
          <div className={styles.reviews__customerInfo__description}>
            <p className={styles.reviews__customerInfo__description__name}>
              {name}
            </p>
            <p
              className={styles.reviews__customerInfo__description__experience}
            >
              {experience}
            </p>
          </div>
        </div>
      )}
      <p className={styles.reviews__customerInfo__paragraph}>{text}</p>
      <div className={styles.reviews__rating}>
        {ratingСalculation(rating).map(
          (data, index) =>
            data === 1 && (
              <img
                alt="рейтинг улуги"
                src={StarRating}
                key={index}
                className={styles.reviews__rating__img}
              />
            )
        )}
      </div>
    </div>
  );
};

export default CustomerCard;
