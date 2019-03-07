import React from 'react';
import Link from 'gatsby-link';

import Header from '../components/header';
import Terms from '../components/pages/terms';
import Footer from '../components/footer';

import withSharedBackground from '../components/utils/withSharedBackground';

import styles from '../layouts/viewport.module.css';

const TermsPage = ({ data, history }) => {

    // General Settings
    const generalSettings =
        data.allStrapiGeneralsettings.edges &&
        data.allStrapiGeneralsettings.edges[0].node;

    // Terms Page
    const termsPage =
        data.allStrapiTechnicalpages.edges &&
        data.allStrapiTechnicalpages.edges[0].node;

    return (
        <div>
            <Header sticky={true} logo={generalSettings['LogoColor'].url} history={history} />
            <div className={styles.phone}>
                <Header logo={generalSettings['LogoColor'].url} mobile={true} history={history} />
            </div>
            <Terms terms={termsPage['TermsOfUse']} />
            {
                withSharedBackground(
                    [<Footer key="footer" twitter={generalSettings['TwitterURL']} linkedin={generalSettings['LinkedInURL']} />],
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

export default TermsPage;


export const pageQuery = graphql`
query TermsPageQuery {
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
    allStrapiTechnicalpages {
        edges {
          node {
            TermsOfUse
          }
        }
      }
  }
`;