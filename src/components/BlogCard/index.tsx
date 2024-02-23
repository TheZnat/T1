import React, { useState } from "react";
import style from "./BlogCard.module.css";
import Star from "../../assets/Star.png";

type Props = {
  title: string;
  text: string;
  rating: number;
  teg: Array<string>;
};

const BlogCard = ({ title, text, rating, teg }: Props) => {
  return (
    <div className={style.card}>
      <div className={style.card__info}>
        <p className={style.card__info__title}>{title}</p>
        <div className={style.card__info__containerTeg}>
          {teg.map((dataTeg, index, array) => (
            <p key={index} className={style.card__info__containerTeg_teg}>
              #{index + 1 !== array.length ? `${dataTeg}, ` : `${dataTeg}`}
            </p>
          ))}
        </div>
        <div className={style.card__info__rangeArea}>
          <p className={style.card__info__range}>{rating}</p>
          <img
            alt="рейтинг"
            src={Star}
            className={style.card__info__rangeImg}
          />
        </div>
      </div>
      <div className={style.card__container}>
        <p className={style.card__container__paragraph}>{text}</p>
      </div>
    </div>
  );
};

export default BlogCard;
