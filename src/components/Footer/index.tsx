import React from 'react';
import styles from './Footer.module.css';
import Logo from '../../assets/Logo.svg'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__area}>
                <img
                alt="eatly"
                src={Logo}
                className={styles.logo}
                />
                <p>About Us</p>
                <p>Contact</p>
                <p>&copy; 2023 EATLY All Rights Reserved.</p>
            </div>
            
        </footer>
    );
};

export default Footer;