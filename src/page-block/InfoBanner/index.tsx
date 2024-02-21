import React from "react";
import styles from "./InfoBanner.module.css";

const InfoBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.banner__text}>
        <div className={styles.banner__text__item}>
          <p className={styles.banner__text__title}>10K+</p>
          <p className={styles.banner__text__paragraph}>
            Satisfied Costumers <br></br>
            All Great Over The World
          </p>
        </div>
        <div className={`${styles.banner__text__item} ${styles.banner__text_center}`}>
          <p className={styles.banner__text__title}>4M</p>
          <p className={styles.banner__text__paragraph}>
            Healthy Dishes Sold <br></br>
            Including Milk Shakes Smooth
          </p>
        </div>
        <div className={styles.banner__text__item}>
          <p className={styles.banner__text__title}>99.99%</p>
          <p className={styles.banner__text__paragraph}>
            Reliable Customer Support <br></br>
            We Provide Great Experiences
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoBanner;
