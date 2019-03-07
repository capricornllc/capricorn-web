import React from 'react';
import Link from 'gatsby-link';

import Home from '../components/pages/home';
import Footer from '../components/footer';

import Responsive from '../components/utils/Responsive';
import withSharedBackground from '../components/utils/withSharedBackground';

class IndexPage extends React.Component {
    render() {
        const { siteTitle, data, history } = this.props;

        // General Settings
        const generalSettings =
      data.allStrapiGeneralsettings.edges &&
      data.allStrapiGeneralsettings.edges[0].node;

        return (
            <div>
                <Home data={data} siteTitle={siteTitle} history={history}/>
                <Footer key="footer" home={true} twitter={generalSettings['TwitterURL']} linkedin={generalSettings['LinkedInURL']}/>
            </div>
        );
    }
}


export default IndexPage;

export const pageQuery = graphql`
query HomePageQuery {
  allStrapiGeneralsettings(limit: 1) {
    edges {
      node {
        LogoColor {
          url
        }
        LogoWhite {
          url
        }
        LogoDark {
          url
        }
        TwitterURL
        LinkedInURL
      }
    }
  }
  allStrapiHomepages(limit: 1) {
    edges {
      node {
        HomeMessageText
        MobileImageCover {
          url
        }
        DesktopVideoCover{
          url
        }
        LogoVersion
        MissionText
        OurApproachText
        JeffSkollGroupText
        NetworkPartnersText
        InvestmentPartnersText
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
  allStrapiGrouppages(limit: 1) { 
    edges {
      node {
        SkollWorldLogo {
          url
        }
        SkollFoundationLogo {
          url
        }
        ParticipantMediaLogo {
          url
        }
      }
    }
  }
}
`;
