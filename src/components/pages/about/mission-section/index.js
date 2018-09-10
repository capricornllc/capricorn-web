import React from 'react';
import Link from 'gatsby-link';

// Styles
import styles from './styles.module.css';

const MissionSection = ({
    title = 'Mission',
    text = 'Capricorn Investment Group seeks to deliver extraordinary investment results by leveraging market forces to scale solutions to global problems.',
}) => {
    return (
        <div className={styles.main}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.message}>
                {text}
            </div>
        </div>
    );
};

export default MissionSection;