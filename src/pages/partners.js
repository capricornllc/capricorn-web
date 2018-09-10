import React from 'react';
import Link from 'gatsby-link';

import Header from '../components/header';
import Partners from '../components/pages/partners';
import Footer from '../components/footer';

import withSharedBackground from '../components/utils/withSharedBackground';
import styles from '../layouts/viewport.module.css';
import india from '../assets/images/india.jpg';

const PartnersPage = ({ data, history }) => {

    // General Settings
    const generalSettings =
        data.allStrapiGeneralsettings.edges &&
        data.allStrapiGeneralsettings.edges[0].node;

        // Partners Page
    const partnerPage =
        data.allStrapiPartnerpage.edges &&
        data.allStrapiPartnerpage.edges[0].node;
    
    // Partners
    const partners =
        data.allStrapiPartner.edges;


    const networkPartners = partners.filter(({ node: { PartnerType } }) => PartnerType.includes('NetworkOfPartners'));
    const sustainablePartners = partners.filter(({ node: { PartnerType } }) => PartnerType.includes('SustainableInvestmentPartners'));


    return (
        <div>
            <div className={styles.phone}>
                <Header logo={generalSettings['LogoColor'].url} mobile={true} active="partners" history={history} />
            </div>
            <Header
                active="partners"
                sticky={true}
                history={history}
                logo={generalSettings['LogoColor'].url} />
            <div className={styles.desktop}>
                {
                    withSharedBackground(
                        [
                            <Partners
                                network={partnerPage['NetworkPartnersText']}
                                investment={partnerPage['InvestmentPartnersText']}
                                networkPartners={networkPartners}
                                sustainablePartners={sustainablePartners} />,
                            <Footer key="footer" background={true} twitter={generalSettings['TwitterURL']} linkedin={generalSettings['LinkedInURL']} />
                        ],
                        {
                            backgroundImage: india,
                            fontColor: 'white',
                            parallax: true,
                            bottom: true,
                            gradient: false,
                        }
                    )
                }
            </div>
            <div className={styles.phone}>
                {
                    withSharedBackground(
                        [
                            <Partners
                                networkPartners={networkPartners}
                                sustainablePartners={sustainablePartners} />,
                            <Footer key="footer" background={true} twitter={generalSettings['TwitterURL']} linkedin={generalSettings['LinkedInURL']} />
                        ],
                        {
                            backgroundImage: india,
                            fontColor: 'white',
                            parallax: false,
                            bottom: false,
                            gradient: false,
                        }
                    )
                }
            </div>
        </div>
    );
};

export default PartnersPage;

export const pageQuery = graphql`
query PartnersPageQuery {
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
    allStrapiPartner {
      edges {
        node {
          PartnerType
          Website
          Image {
            url
          }
        }
      }
    }
    allStrapiPartnerpage {
        edges {
            node {
                NetworkPartnersText
                InvestmentPartnersText
            }
        }
    }
  }
`;

// allStrapiPartners(limit: 1) {
//   edges {
//     node {
//       IntroText
//       SkollWorldURL
//       SkollWorldText
//       SkollWorldLogo {
//         url
//       }
//       SkollFoundationURL
//       SkollFoundationText
//       SkollFoundationLogo {
//         url
//       }
//       ParticipantMediaURL
//       ParticipantMediaText
//       ParticipantMediaLogo {
//         url
//       }
//     }
//   }
// }