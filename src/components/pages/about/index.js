import React from 'react';
import Link from 'gatsby-link';

import MissionSection from './mission-section';
import BannerSection from './banner-section';
import GoalsAndValuesSection from './goals-and-values-section';
import OurApproachSection from './our-approach-section';

import ice from '../../../assets/images/ice.jpg';

import withSharedBackground from '../../utils/withSharedBackground';
import withID from '../../utils/withID';


class About extends React.Component {
    render() {

        const { data } = this.props;

        // About Page
        const aboutPage =
            data.allStrapiAboutpage.edges &&
            data.allStrapiAboutpage.edges[0].node;

        // Goals and Values
        const goalsAndValues =
            data.allStrapiGoalsandvalue.edges;

        return (
            <div>
                {
                    withSharedBackground(
                        [
                            <MissionSection
                                id="mission"
                                key="mission"
                                text={aboutPage['MissionText']} />,
                            <BannerSection
                                key="banner"
                                text={aboutPage['BannerText']} />,
                        ],
                        {
                            backgroundImage: ice,
                            parallax: true,
                            overlay: true,
                        })
                }
                {
                    withID(<GoalsAndValuesSection
                        key="goals-and-values"
                        data={goalsAndValues} />, 'goals-and-values')
                }
                {
                    withID(<OurApproachSection
                        id="our-approach"                    
                        key="our-approach"
                        text={aboutPage['OurApproachText']} />, 'our-approach')
                }
            </div>
        );
    }
}

export default About;

