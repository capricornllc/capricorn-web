import React from 'react';
import Link from 'gatsby-link';

// Styles
import styles from './styles.module.css';

const GroupSection = ({
    title = 'Jeff Skoll Group',
    message = 'To pursue his vision of a sustainable world of peace and prosperity, Jeff Skoll created an innovative portfolio of philanthropic and commercial enterprises, each of which is a distinctive social catalyst in its field. Capricorn manages the investment portfolio of Jeff Skoll and his organizations.',
}) => {

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.message}>
                {message}
            </div>
            <div className={styles.learn}>
                <Link to="/group/">
                    <button>LEARN MORE</button>
                </Link>
            </div>
        </div>
    );
};

export default GroupSection;