import React from "react";
import Logo from "../../assets/Logo.svg";
import styles from "./Header.module.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__area}>
        <img src={Logo} alt="eatly" className={styles.logo} loading="eager" />
        <menu className={styles.header__menu}>
          <HashLink
            to="/#Recipes"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "center" })
            }
          >
            <li className={styles.header__menu__item}>Recipes</li>
          </HashLink>
          <HashLink
            to="/#FAQ"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "center" })
            }
          >
          <li className={styles.header__menu__item}>FAQ</li>
          </HashLink>
          <Link to="/blog">
          <li className={styles.header__menu__item}>Blog</li>
          </Link>
        </menu>
      </div>
      <div className={styles.header__border}></div>
    </header>
  );
};

export default Header;
