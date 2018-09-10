import React from 'react';
import Link from 'gatsby-link';

import Header from '../components/header';
import Contact from '../components/pages/contact';
import Footer from '../components/footer';

import withSharedBackground from '../components/utils/withSharedBackground';
import styles from '../layouts/viewport.module.css';
import city from '../assets/images/city.jpg';

const ContactPage = ({ data, history }) => {

    // General Settings
    const generalSettings =
        data.allStrapiGeneralsettings.edges &&
        data.allStrapiGeneralsettings.edges[0].node;

    // General Settings
    const contacts =
        data.allStrapiContact.edges;


    return (
        <div>
            {
                withSharedBackground(
                    [
                        <div className={styles.phone}>
                            <Header logo={generalSettings['LogoWhite'].url} mobile={true} active="contacts" history={history} />
                        </div>,
                        <Header
                            white={true}
                            history={history}
                            active="contact"
                            sticky={false}
                            logo={generalSettings['LogoWhite'].url} />,
                        <Contact contacts={contacts} />,
                    ],
                    {
                        backgroundImage: city,
                        fontColor: 'white',
                        parallax: false,
                        bottom: false,
                        gradient: false,
                    }
                )
            }
            {
                withSharedBackground(
                    [<Footer key="footer" white={true} twitter={generalSettings['TwitterURL']} linkedin={generalSettings['LinkedInURL']} />],
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

export default ContactPage;

export const pageQuery = graphql`
query ContactsPageQuery {
    allStrapiGeneralsettings(limit: 1) {
      edges {
        node {
          LogoWhite {
            url
          }
          TwitterURL
          LinkedInURL
        }
      }
    }
    allStrapiContact {
      edges {
        node {
            Longitude
            Latitude
          	Title
            Website
            Email
          	Address
        }
      }
    }
  }
`;
