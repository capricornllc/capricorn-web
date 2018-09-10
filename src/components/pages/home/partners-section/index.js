import React from 'react';
import Link from 'gatsby-link';

import Responsive from '../../../utils/Responsive';

// Styles
import styles from './styles.module.css';

const PartnersSection = ({
    network,
    investment,
}) => {

    return (
        <div className={styles.main}>
            <div className={styles.partners}>
                <div className={styles.partner}>
                    <div className={styles.title}>
                        Network<br />of <b className={styles.blue}>Partners</b>
                    </div>
                    <div className={styles.text}>
                        {network}
                    </div>
                    <div className={styles.learnBlue}>
                        <Link to="/partners#network">
                            <button>LEARN MORE</button>
                        </Link>
                    </div>
                </div>
                <div className={styles.partner}>
                    <div className={styles.title}>
                        Sustainable<br /><b className={styles.green}>Investment Partners</b>
                    </div>
                    <div className={styles.text}>
                        {investment}
                    </div>
                    <div className={styles.learnGreen}>
                        <Link to="/partners#sustainable">
                            <button>LEARN MORE</button>
                        </Link>
                    </div>
                </div>
                <Responsive className={styles.learnMobile} name="phone">
                    <div>
                        <Link to="/partners">
                            <button>LEARN MORE</button>
                        </Link>
                    </div>
                </Responsive>
            </div>
        </div>
    );
};

export default PartnersSection;