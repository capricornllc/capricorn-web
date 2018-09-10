import React from 'react';
import Link from 'gatsby-link';
import Slider from 'react-slick';
import Markdown from 'react-markdown';

import { API_URL } from '../../../../config';

// Styles
import styles from './styles.module.css';

const Slide = ({
    image,
    invert,
    heading,
    subHeading,
}) => {
    return (
        <div className={styles.slideContainer}>
            <div className={styles.leftSlide}>
                <h3>
                    <Markdown source={heading} className={invert ? styles.invert : ''} />
                </h3>
                <Markdown source={subHeading} />
            </div>
            <div className={styles.rightSlide}>
                <img src={API_URL + image} />
            </div>
        </div>
    );
};

export default Slide;