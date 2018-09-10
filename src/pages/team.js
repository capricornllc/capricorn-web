import React from 'react';
import Link from 'gatsby-link';

import Header from '../components/header';
import Team from '../components/pages/team';
import Footer from '../components/footer';

import withSharedBackground from '../components/utils/withSharedBackground';
import styles from '../layouts/viewport.module.css';

const TeamPage = ({ data, history }) => {

    // General Settings
    const generalSettings =
        data.allStrapiGeneralsettings.edges &&
        data.allStrapiGeneralsettings.edges[0].node;

    // Team Members 
    const members =
        data.allStrapiTeammember.edges;

    const investment = members.filter(({ node: { Team } }) => Team && Team.includes('Investment'));
    const operations = members.filter(({ node: { Team } }) => Team && Team.includes('Operations'));

    return (
        <div>
            <div className={styles.phone}>
                <Header logo={generalSettings['LogoColor'].url} mobile={true} active="team" history={history} />
            </div>
            <Header active="team" sticky={true} logo={generalSettings['LogoColor'].url} history={history} />
            <Team
                investment={investment}
                operations={operations} />
            {
                withSharedBackground(
                    [<Footer
                        key="footer"
                        twitter={generalSettings['TwitterURL']}
                        linkedin={generalSettings['LinkedInURL']} />],
                    {
                        backgroundColor: 'white',
                        fontColor: 'rgb(0, 99, 131)',
                        parallax: false,
                        gradient: false,
                    }
                )
            }
        </div>
    );
};

export default TeamPage;


export const pageQuery = graphql`
query TeamPageQuery {
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
    allStrapiTeammember {
        edges {
          node {
            id
            Name
            Title
            Avatar {
                url
            }
            Bio
            Team
            LinkedIn
          }
        }
    }
  }
`;