import React from 'react';
import Link from 'gatsby-link';

import PartnersSection from './partners-section';

class Partners extends React.Component {
    render() {

        const { siteTitle, data } = this.props;

        // Partners Page
        const { networkPartners, sustainablePartners, network, investment } = this.props;


        return (
            <PartnersSection
                key="jeff-skoll-group"
                network={network}
                investment={investment}
                networkPartners={networkPartners}
                sustainablePartners={sustainablePartners} />
        );
    }
}

export default Partners;

