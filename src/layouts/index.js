import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'babel-polyfill';

import appleTouchIcon from '../assets/icons/apple-touch-icon.png';
import favicon32 from '../assets/icons/favicon-32x32.png';
import favicon16 from '../assets/icons/favicon-16x16.png';

import './index.css';

const Layout = ({ children, data }) => (
    <div>
        <Helmet
            title={ 'Capricorn Investment Group' }
            meta={[
                { name: 'description', content: 'Capricorn Investment Group was created in 2000 to demonstrate the promise that it is possible to invest profitably while driving sustainable positive change. Today Capricorn manages the assets for Jeff Skoll, the Skoll Foundation and others who strive for extraordinary investment results by leveraging market forces to accelerate large scale impact. The firm invests in the public equity, fixed income, private equity, and real assets markets across the globe. Capricorn has offices in Palo Alto, California, and New York, New York.' },
                { name: 'keywords', content: 'Finance, FinTech, Venture Capital' },
            ]}
            link={[
                { rel: 'stylesheet', type: 'text/css', charset:'UTF-8', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css', },
                { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css', },
                { href:'https://fonts.googleapis.com/css?family=Playfair+Display', rel:'stylesheet' },
                { rel:'stylesheet', href:'https://fontlibrary.org/face/now', type:'text/css' },
                { rel:'apple-touch-icon', sizes: '152x152', href: appleTouchIcon },
                { rel:'icon', type: 'image/png', sizes: '32x32', href: favicon32 },
                { rel:'icon', type: 'image/png', sizes: '16x16', href: favicon16 },
            ]}
        >
            <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
        </Helmet>
        <div
            style={{
                margin: '0',
            }}>
            {children()}
        </div>
    </div>
);

Layout.propTypes = {
    children: PropTypes.func,
};

export default Layout;