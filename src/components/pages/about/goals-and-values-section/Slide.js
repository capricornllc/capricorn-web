import React from 'react';
import Link from 'gatsby-link';
import Slider from 'react-slick';
import Markdown from 'react-markdown';

import classnames from 'classnames';

import { API_URL } from '../../../../config';

// Styles
import styles from './styles.module.css';

const Slide = ({
    image,
    invert,
    heading,
    subHeading,
}) => {
    const makeContent = () => !invert ? (
        <div style={{ display: 'flex' }} >
            <div className={styles.leftSlide}>
                <h3>
                    <Markdown source={heading} className={styles.invert} />
                </h3>
                <Markdown source={subHeading} />
            </div>
            <div className={classnames(styles.rightSlide, styles.imageContainer)} style={{ backgroundImage: `url(${image})` }}>
                <img className={styles.phone} src={API_URL + image} />
            </div>
        </div>
    ) : (
        <div style={{ display: 'flex' }}>
            <div className={classnames(styles.rightSlide, styles.imageContainer)} style={{ backgroundImage: `url(${image})` }}>
                <img className={styles.phone}  src={API_URL + image} />
            </div>
            <div className={styles.leftSlide}>
                <h3>
                    <Markdown source={heading} />
                </h3>
                <Markdown source={subHeading} />
            </div>
        </div>
    );

    return (
        <div className={styles.slideContainer}>
            {makeContent()}
        </div>
    );
};

export default Slide;