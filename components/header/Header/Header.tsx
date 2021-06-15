import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <nav className={styles.header}>
            <div className={styles.logo}>
                Logo
            </div>
            <div className={styles.hamburger}>
                Hamb
            </div>
        </nav>
    )
}

export default Header;
