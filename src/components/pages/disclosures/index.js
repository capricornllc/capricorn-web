import React from 'react';
import Link from 'gatsby-link';
import Markdown from 'react-markdown';
import styles from './styles.module.css';

class Disclosures extends React.Component {
    render() {

        const { disclosures } = this.props;

        return (
            <div className={styles.main}>
                <div className={styles.title}>
                    Disclosures
                </div>
                <div className={styles.text}>
                    <Markdown source={disclosures}/>
                </div>
            </div>
        );
    }
}

export default Disclosures;

