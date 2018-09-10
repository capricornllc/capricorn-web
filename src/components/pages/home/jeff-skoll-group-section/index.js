import React from 'react';
import Link from 'gatsby-link';

import { API_URL } from '../../../../config';

// Styles
import styles from './styles.module.css';

const JeffSkollGroupSection = ({
    title = 'Jeff Skoll Group',
    text,
    logos,
}) => {
    return (
        <div className={styles.main}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.message}>
                {text}
            </div>
            <div className={styles.logos}>
                <Link to='/group'>
                    <div className={styles.logo}>
                        <div style={{ backgroundImage: `url(${API_URL + logos['ParticipantMediaLogo'].url}` }} />
                    </div>
                </Link>
                <Link to='/group'>
                    <div className={styles.logo}>
                        <div style={{ backgroundImage: `url(${API_URL + logos['SkollFoundationLogo'].url}` }} />
                    </div>
                </Link>
                <Link to='/group'>
                    <div className={styles.logo}>
                        <div style={{ backgroundImage: `url(${API_URL + logos['SkollWorldLogo'].url}` }} />
                    </div>
                </Link>
            </div>
            <div className={styles.learn}>
                <Link to="/group/">
                    <button>LEARN MORE</button>
                </Link>
            </div>
        </div>
    );
};

export default JeffSkollGroupSection;