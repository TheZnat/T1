import React from 'react';
import Logo from '../../assets/Logo.svg';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__area}>
                <img 
                src={Logo}
                alt='eatly'
                className={styles.logo}
                loading="eager"
                />
                <menu className={styles.header__menu}>
                <li className={styles.header__menu__item}>Recipes</li>
                <li className={styles.header__menu__item}>FAQ</li>
                <li className={styles.header__menu__item}>Blog</li>
                </menu>
            </div>     
            <div className={styles.header__border}></div>       
        </header>
    );
};

export default Header;