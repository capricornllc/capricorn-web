import React from 'react';
import Link from 'gatsby-link';

import withID from '../../../utils/withID';

// Styles
import styles from './styles.module.css';

const PartnersSection = ({
    network = 'The Firm benefits from a wide set of relationships across nonprofit, government, and corporate entities which are active in areas of sustainable investing. In addition to our investment activities, Capricorn attempts to promote systemic change in the financial system through organizations such as:',
    investment = 'In pursuit of our return objectives as well as to support the movement of capital into sustainable investment strategies, we create and sponsor new investment funds. We also make early investments into established managers addressing opportunities across the sustainable investment landscape. Over the last 14 years, Capricorn has created multiple investment partnerships which manage over $3.5 billion and focus on specific areas of impact or sustainability, such as renewable energy infrastructure, renewable resources, clean technology, health & wellness, and energy efficiency.',
    networkPartners,
    sustainablePartners,
}) => {
    return (
        <div className={styles.main}>
            <div className={styles.partners}>
                {
                    withID(
                        <div className={styles.partner}>
                            <div className={styles.title}>
                                Network of <b className={styles.blue}>Partners</b>
                            </div>
                            <div className={styles.text}>
                                {network}
                            </div>
                            <div className={styles.list}>
                                {
                                    networkPartners.map(({ node: { Image, Website } }) => (
                                        <a href={Website} target="_blank">
                                            <img src={Image.url} />
                                        </a>
                                    ))
                                }
                            </div>
                            <div id="sustainable" />
                        </div>, 'network')
                }
                <div className={styles.partner}>
                    <div className={styles.title}>
                        Sustainable <b className={styles.green}>Investment Partners</b>
                    </div>
                    <div className={styles.text}>
                        {investment}
                    </div>
                    <div className={styles.list}>
                        {
                            sustainablePartners.map(({ node: { Image, Website } }) => (
                                <a href={Website} target="_blank">
                                    <img src={Image.url} />
                                </a>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PartnersSection;