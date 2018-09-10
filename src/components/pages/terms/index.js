import React from 'react';
import Link from 'gatsby-link';
import Markdown from 'react-markdown';
import styles from './styles.module.css';

class Terms extends React.Component {
    render() {

        const { terms } = this.props;

        return (
            <div className={styles.main}>
                <div className={styles.title}>
                    Terms of Use
                </div>
                <div className={styles.text}>
                    <Markdown source={terms}/>
                </div>
            </div>
        );
    }
}

export default Terms;

