import React from 'react';
import Link from 'gatsby-link';

import IntroSection from './intro-section';
import MissionSection from './mission-section';
import GoalsAndValuesSection from './goals-and-values-section';
import OurApproachSection from './our-approach-section';
import JeffSkollGroupSection from './jeff-skoll-group-section';
import PartnersSection from './partners-section';

import Header from '../../header';

import Waypoint from 'react-waypoint';

// Assets
import sea from '../../../assets/images/sea.jpg';
import sky from '../../../assets/images/sky.jpg';

import withSharedBackground from '../../utils/withSharedBackground';
import Responsive from '../../utils/Responsive';

import styles from './styles.module.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stickyNav: false
        };
    }

    render() {

        const { siteTitle, data, history } = this.props;

        // General Settings
        const generalSettings =
            data.allStrapiGeneralsettings.edges &&
            data.allStrapiGeneralsettings.edges[0].node;

        // Home Page
        const homePage =
            data.allStrapiHomepage.edges &&
            data.allStrapiHomepage.edges[0].node;

        // Goals and Values
        const goalsAndValues =
            data.allStrapiGoalsandvalue.edges;

        // Group Logos
        const groupLogos =
            data.allStrapiGrouppage.edges &&
            data.allStrapiGrouppage.edges[0].node;

        const _handleWaypointEnter = () => {
            this.setState(() => ({ stickyNav: false }));
        };

        const _handleWaypointLeave = () => {
            this.setState(() => ({ stickyNav: true }));
        };

        return (
            <div>
                <div className={styles.phone}>
                    <Header logo={generalSettings['LogoColor'].url} mobile={true} active="home" history={history} />
                </div>
                <IntroSection
                    key="intro"
                    history={history}
                    message={homePage['HomeMessage']}
                    video={homePage['DesktopVideoCover']}
                    image={homePage['MobileImageCover']}
                    logo={generalSettings[`Logo${homePage['LogoVersion'].trim()}`]}
                    siteTitle />
                <div className={styles.waypoint}>
                    <Waypoint
                        onEnter={_handleWaypointEnter}
                        onLeave={_handleWaypointLeave}>
                    </Waypoint>
                </div>
                {
                    this.state.stickyNav ?
                        <Header logo={generalSettings['LogoColor'].url} sticky={true} active="home" history={history} />
                        : null
                }
                <MissionSection
                    key="mission"
                    message={homePage['MissionText']} />
                {
                    withSharedBackground(
                        [
                            <GoalsAndValuesSection
                                key="goals-and-values"
                                data={goalsAndValues} />,
                            <OurApproachSection
                                key="our-approach"
                                text={homePage['OurApproachText']} />
                        ],
                        {
                            backgroundImage: sea,
                            parallax: false,
                            gradient: true,
                        })
                }
                {
                    withSharedBackground(
                        [
                            <JeffSkollGroupSection
                                key="jeff-skoll-group"
                                text={homePage['JeffSkollGroupText']}
                                logos={groupLogos} />,
                            <PartnersSection
                                key="partners"
                                network={homePage['NetworkPartnersText']}
                                investment={homePage['InvestmentPartnersText']} />
                        ],
                        {
                            backgroundImage: sky,
                            parallax: false,
                            gradient: true,
                        })
                }
            </div>
        );
    }
}

export default Home;

