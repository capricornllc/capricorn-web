import React from 'react';
import Link from 'gatsby-link';

import { API_URL } from '../../../../config';

// Styles
import styles from './styles.module.css';

const JeffSkollGroupSection = ({
    title = 'Jeff Skoll Group',
    data,
}) => {
    return data && (
        <div className={styles.main}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.message}>
                {data['IntroText']}
            </div>
            <div className={styles.groups}>
                <div className={styles.group}>
                    <a target="_blank" href={data['ParticipantMediaURL']}>
                        <div className={styles.logo}>
                            <div style={{ backgroundImage: `url(${API_URL + data['ParticipantMediaLogo'].url}` }} />
                        </div>
                    </a>
                    <div className={styles.subtitle}>
                        Participant Media
                    </div>
                    <div className={styles.text} >
                        {data['ParticipantMediaText'] + ' '}
                        <a target="_blank" href={data['ParticipantMediaURL']}>Go to website.</a>                        
                    </div>
                </div>
                <div className={styles.group}>
                    <a target="_blank" href={data['SkollFoundationURL']}>
                        <div className={styles.logo}>
                            <div style={{ backgroundImage: `url(${API_URL + data['SkollFoundationLogo'].url}` }} />
                        </div>
                    </a>
                    <div className={styles.subtitle}>
                        Skoll Foundation
                    </div>
                    <div className={styles.text} >
                        {data['SkollFoundationText'] + ' '}
                        <a target="_blank" href={data['SkollFoundationURL']}>Go to website.</a>
                    </div>
                </div>
                <div className={styles.group}>
                    <a target="_blank" href={data['SkollWorldURL']}>
                        <div className={styles.logo}>
                            <div style={{ backgroundImage: `url(${API_URL + data['SkollWorldLogo'].url}` }} />
                        </div>
                    </a>
                    <div className={styles.subtitle}>
                        Skoll World Forum
                    </div>
                    <div className={styles.text} >
                        {data['SkollWorldText'] + ' '}
                        <a target="_blank" href={data['SkollWorldURL']}>Go to website.</a>                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JeffSkollGroupSection;