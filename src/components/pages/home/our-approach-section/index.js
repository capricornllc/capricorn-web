import React from 'react';
import Link from 'gatsby-link';

// Styles
import styles from './styles.module.css';

const OurApproachSection = ({
    title = 'Our Approach',
    text,
}) => {

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.message}>
                {text}
            </div>
            <Link to="about">
                <div className={styles.learn}>
                    <button>LEARN MORE</button>
                </div>
            </Link>
        </div>
    );
};

export default OurApproachSection;