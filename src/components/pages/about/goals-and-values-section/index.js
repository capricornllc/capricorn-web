import React from 'react';
import Link from 'gatsby-link';
import Slider from 'react-slick';

// Components
import Slide from './Slide';

// Styles
import styles from './styles.module.css';

const GoalsAndValuesSection = ({
    data,
    title = 'Goals and Values',
}) => {

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.slideContainer}>
                {
                    data.map(
                        ({ node }, idx) => {
                            return <Slide
                                invert={idx % 2}
                                key={`slide-${Math.random().toString().slice(2,6)}`}                                
                                index={idx}
                                heading={node['Title']}
                                subHeading={node['Content']}
                                image={node['Image'].url} />;
                        
                        })
                }
            </div>
        </div>
    );
};

export default GoalsAndValuesSection;