import React from 'react';
import Link from 'gatsby-link';

import Header from '../components/header';
import Disclosures from '../components/pages/disclosures';
import Footer from '../components/footer';

import withSharedBackground from '../components/utils/withSharedBackground';
import styles from '../layouts/viewport.module.css';

const DisclosurePage = ({ data, history }) => {

    // General Settings
    const generalSettings =
        data.allStrapiGeneralsettings.edges &&
        data.allStrapiGeneralsettings.edges[0].node;

    // Disclosures Page
    const disclosuresPage =
        data.allStrapiTechnicalpage.edges &&
        data.allStrapiTechnicalpage.edges[0].node;

    return (
        <div>
            <Header sticky={true} logo={generalSettings['LogoColor'].url} history={history} />
            <div className={styles.phone}>
                <Header logo={generalSettings['LogoColor'].url} mobile={true} history={history}/>
            </div>
            <Disclosures disclosures={disclosuresPage['Disclosures']} />
            {
                withSharedBackground(
                    [<Footer key="footer" fixed={true} twitter={generalSettings['TwitterURL']} linkedin={generalSettings['LinkedInURL']} />],
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

export default DisclosurePage;


export const pageQuery = graphql`
query DisclosuresPageQuery {
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
    allStrapiTechnicalpage {
        edges {
          node {
            Disclosures
          }
        }
      }
  }
`;