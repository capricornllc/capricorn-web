import React from 'react';
import Link from 'gatsby-link';

import { API_URL } from '../../config';

import styles from './styles.module.css';

import Menu from './menu';
import MobileMenu from './mobile-menu';

const Header = ({ logo, sticky = false, white = false, active = '', mobile = false, history }) => (
    !mobile ?
        <div className={sticky ? styles.sticky : (white ? styles.white : styles.main)}>
            <div className={styles.header}>
                <Link to={{ pathname: '/', state: { fromOtherPages: true } }}>
                    <div className={styles.logo}>
                        <img src={API_URL + logo} />
                    </div>
                </Link>
                <Menu active={active} white={white} history={history} />
            </div>
        </div> :
        <MobileMenu active={active} history={history} />
);

export default Header;
