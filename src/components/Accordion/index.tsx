import React, { useState } from "react";
import style from "./Accordion.module.css";

type Props = {
  title: string;
  content: string;
};

const Accordion = ({ title, content }: Props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={style.list__item}>
      <div className={style.item_button} onClick={() => setIsActive(!isActive)}>{isActive ? "-" : "+"}</div>
      <p className={style.list__item__title}>{title}</p>
      {isActive && <p className={style.list__item__paragraph}>{content}</p>}
      <div className={style.list__item__border}></div>
    </div>
  );
};

export default Accordion;
