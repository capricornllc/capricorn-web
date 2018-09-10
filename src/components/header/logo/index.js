import React from 'react';
import styles from './styles.module.css';

const Logo = ({ logo = '/images/logo.png' }) => {
    return (
        <div className={styles.main}>
            <img src={logo} />
        </div>
    );
};

export default Logo;