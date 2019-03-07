import React from 'react';
import Link from 'gatsby-link';

import Header from '../components/header';
import Group, { EmptyGradient } from '../components/pages/group';
import Footer from '../components/footer';

import withSharedBackground from '../components/utils/withSharedBackground';
import styles from '../layouts/viewport.module.css';
import sky from '../assets/images/sky.jpg';

const JeffSkollGroupPage = ({ data, history }) => {

    // General Settings
    const generalSettings =
    data.allStrapiGeneralsettings.edges &&
    data.allStrapiGeneralsettings.edges[0].node;

    return (
        <div>
            <div className={styles.phone}>
                <Header logo={generalSettings['LogoColor'].url} mobile={true} active="group" history={history}/>
            </div>
            <Header
                active="group"
                history={history} 
                sticky={true}
                logo={generalSettings['LogoColor'].url} />
            {
                withSharedBackground(
                    [
                        <Group data={data} />,
                    ],
                    {
                        backgroundImage: sky,
                        parallax: false,
                        gradient: true,
                    }
                )
            }
            <Footer key="footer" background={false} twitter={generalSettings['TwitterURL']} linkedin={generalSettings['LinkedInURL']} />

        </div>
    );
};

export default JeffSkollGroupPage;

export const pageQuery = graphql`
query GroupPageQuery {
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
  allStrapiGrouppages(limit: 1) {
    edges {
      node {
        IntroText
        SkollWorldURL
        SkollWorldText
        SkollWorldLogo {
          url
        }
        SkollFoundationURL
        SkollFoundationText
        SkollFoundationLogo {
          url
        }
        ParticipantMediaURL
        ParticipantMediaText
        ParticipantMediaLogo {
          url
        }
      }
    }
  }
}
`;