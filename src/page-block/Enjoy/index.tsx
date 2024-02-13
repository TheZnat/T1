import React from "react";
import styles from "./Enjoy.module.css";
import Food from "../../assets/Food.png";

const Enjoy = () => {
  return (
    <section className={styles.enjoy}>
      <div className={styles.enjoy__infoArea}>
        <div className={styles.enjoy__infoArea__text}>
          <p className={styles.subtitle}>OVER 1000 USERS</p>
          <h1 className={styles.title}>Enjoy Foods All Over The World</h1>
          <p className={styles.paragraph}>
            EatLy help you set saving goals, earn cash back offers, Go to
            disclaimer for more details and get paychecks up to two days early.
            Get a <span>$20 bonus</span>.
          </p>
        </div>
        <div className={styles.buttonArea}>
          <button className={styles.button__primary}>Get Started</button>

          <button className={styles.button__secondary}>Go Pro</button>
        </div>
      </div>

      <img src={Food} alt="картинка еды" className={styles.enjoy__img} />
    </section>
  );
};

export default Enjoy;
