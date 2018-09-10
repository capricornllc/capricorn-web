import React from 'react';

import styles from './styles.module.css';
import { API_URL } from '../../../../../config';

const Video = ({ image }) => {
    return (
        <div className={styles.videoContainer} style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}/>
    );
};

export default Video;