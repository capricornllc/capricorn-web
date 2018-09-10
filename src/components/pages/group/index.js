import React from 'react';
import Link from 'gatsby-link';

import JeffSkollGroupSection from './jeff-skoll-group-section';
import styles from './jeff-skoll-group-section/styles.module.css';

export class EmptyGradient extends React.Component {
    render() {
        return (
            <div className={styles.phone} style={{
                height: '50vh',
                background: '-moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 29%, rgba(255,255,255,0) 41%)', /* FF3.6-15 */
                background: '-webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 29%,rgba(255,255,255,0) 41%)', /* Chrome10-25,Safari5.1-6 */
                background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 29%,rgba(255,255,255,0) 41%)', /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#ffffff", endColorstr="#00ffffff",GradientType=0 )'
            }} />
        );
    }
}

class Group extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stickyNav: false
        };
    }

    render() {

        const { siteTitle, data } = this.props;

        // J Page
        const groupPage =
            data.allStrapiGrouppage
                ? (data.allStrapiGrouppage.edges && data.allStrapiGrouppage.edges[0].node)
                : false;


        return (
            <JeffSkollGroupSection
                key="jeff-skoll-group"
                data={groupPage} />
        );
    }
}

export default Group;

