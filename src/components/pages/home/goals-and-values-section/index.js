import React from 'react';
import Link from 'gatsby-link';
import Slider from 'react-slick';

// Components
import Slide from './Slide';

import prevArrow from '../../../../assets/icons/left.svg';
import nextArrow from '../../../../assets/icons/right.svg';
import prevArrowFilled from '../../../../assets/icons/leftFilled.svg';
import nextArrowFilled from '../../../../assets/icons/rightFilled.svg';
import bullet from '../../../../assets/icons/bullet.svg';
import bulletFilled from '../../../../assets/icons/bulletFilled.svg';

// Styles
import styles from './styles.module.css';

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styles.nextArrow}`}
            style={{ ...style, backgroundImage: `url(${nextArrow})` }}
            onMouseOver={e => e.currentTarget.style.backgroundImage = `url(${nextArrowFilled})`}
            onMouseOut={e => e.currentTarget.style.backgroundImage = `url(${nextArrow})`}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styles.prevArrow}`}
            style={{ ...style, backgroundImage: `url(${prevArrow})` }}
            onMouseOver={e => e.currentTarget.style.backgroundImage = `url(${prevArrowFilled})`}
            onMouseOut={e => e.currentTarget.style.backgroundImage = `url(${prevArrow})`}
            onClick={onClick}
        />
    );
};

const GoalsAndValuesSection = ({
    data,
    title = 'Goals and Values',
}) => {

    let invert = false;

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: dots => {
            const customDots = React.Children.map(dots, dot => {
                if (dot.props['className'] === 'slick-active') {
                    return <img src={bullet} className={styles.slickActive} />;
                } else {
                    return <img src={bulletFilled} className={styles.slickNon} />;
                }
            });

            return (
                <ul className={styles.slickDots} style={{ bottom: '-3rem' }}> {customDots} </ul>
            );
        },
    };

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.slideContainer}>
                <Slider {...sliderSettings}>
                    {
                        data.map(
                            ({ node }, idx) => {

                                invert = (idx % 2) ? !invert : invert;

                                return (
                                    <Slide
                                        key={`slide-${Math.random().toString().slice(2, 6)}`}
                                        invert={invert}
                                        heading={node['Title']}
                                        subHeading={node['Content']}
                                        image={node['Image'].url} />
                                );
                            }
                        )
                    }
                </Slider>
            </div>
        </div>
    );
};

export default GoalsAndValuesSection;