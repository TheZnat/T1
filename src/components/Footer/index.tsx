import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../assets/Logo.svg";

import Facebook from "../../assets/socialMedia/facebook.png";
import Instagram from "../../assets/socialMedia/instagram.png";
import Linkedin from "../../assets/socialMedia/linkedin.png";
import Twitter from "../../assets/socialMedia/twitter.png";

const Footer = () => {
  return (
    <footer className={styles.area}>
      <div className={styles.area__top}>
        <img alt="eatly" src={Logo} className={styles.logo} />
        <div className={styles.area__top__linkArea}>
          <p className={styles.area__top__linkArea__item}>About Us</p>
          <p className={styles.area__top__linkArea__item}>Contact</p>
        </div>
      </div>
      <div className={styles.area__bottom}>
        <p>&copy; 2023 EATLY All Rights Reserved.</p>
        <div className={styles.area__bottom__iconArea}>
          <img
            className={styles.area__bottom__iconArea__item_instagram}
            src={Instagram}
            alt="Instagram"
          />
          <img
            className={styles.area__bottom__iconArea__item_linkedin}
            src={Linkedin}
            alt="Linkedin"
          />

          <img
            className={styles.area__bottom__iconArea__item_facebook}
            src={Facebook}
            alt="Facebook"
          />

          <img
            className={styles.area__bottom__iconArea__item_twitter}
            src={Twitter}
            alt="Twitter"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
