import React from 'react';

// Styles
import styles from './styles.module.css';

// Components
import Video from './video';
import Image from './image';
import Menu from './menu';
import Message from './message';

import Responsive from '../../../utils/Responsive';

import { API_URL } from '../../../../config';

const IntroSection = ({
    history,
    video: {
        url: video,
    },
    image: {
        url: image,
    },
    message,
    logo: {
        url: logo
    },
}) => {
    return (
        <div className={styles.main}>
            <Video video={video} message={message}/>
            <div className={styles.top}>
                <div className={styles.logo}>
                    <img src={API_URL + logo} />
                </div>
                <Message message={message} history={history} />
            </div>
            <div className={styles.bottom}>
                <Menu />
            </div>
        </div>
    );
};

export default IntroSection;