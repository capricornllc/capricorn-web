import React from 'react';
import Link from 'gatsby-link';

import Header from '../components/header';
import About from '../components/pages/about';
import Footer from '../components/footer';

import withSharedBackground from '../components/utils/withSharedBackground';
import styles from '../layouts/viewport.module.css';

import agriculture from '../assets/images/agriculture.jpg';

const AboutPage = ({ data, siteTitle, history }) => {

    // General Settings
    const generalSettings =
    data.allStrapiGeneralsettings.edges &&
    data.allStrapiGeneralsettings.edges[0].node;


    return (
        <div>
            <div className={styles.phone}>
                <Header logo={generalSettings['LogoColor'].url} mobile={true} active="about" history={history} />
            </div>
            <Header
                active="about"
                history={history}
                sticky={true}
                logo={generalSettings['LogoColor'].url} />
            <About data={data} siteTitle={siteTitle} />
            {
                withSharedBackground(
                    [<Footer key="footer" background={true} twitter={generalSettings['TwitterURL']} linkedin={generalSettings['LinkedInURL']} />],
                    {
                        backgroundImage: agriculture,
                        fontColor: '#ffffff',
                        parallax: false,
                        gradient: false,
                    }
                )
            }
        </div>
    );
};

export default AboutPage;

export const pageQuery = graphql`
query AboutPageQuery {
  allStrapiGeneralsettings(limit: 1) {
    edges {
      node {
        LogoColor {
          url
        }
        TwitterURL
        LinkedInURL
      }
    }
  }
  allStrapiAboutpages(limit: 1) {
    edges {
      node {
        MissionText
        BannerText
        OurApproachText
      }
    }
  }
  allStrapiGoalsandvalues {
    edges {
      node {
        Title
        Content
        Image {
          url
        }
      }
    }
  }
}
`;