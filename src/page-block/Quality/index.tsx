import React from "react";
import styles from "./Quality.module.css";
import Mobily from "../../assets/Mobile.png";

const Quality = () => {
  return (
    <section className={styles.quality}>
      <img
        className={styles.quality__img}
        alt="картинка с теоефоном"
        src={Mobily}
      />

      <div className={styles.quality__area}>
        <p className={styles.quality__area__title}>
          Premium <span>Quality</span>
          <br></br>
          For Your Health
        </p>

        <ul className={styles.quality__area__list}>
          <li className={styles.quality__area__list__paragraph}>
            Premium quality food is made with ingredients that <br></br>
            are packed with essential vitamins, mineral
          </li>
          <li className={styles.quality__area__list__paragraph}>
            These foods promote overall wellness by support <br></br>
            healthy digestion and boosting immunity
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Quality;
