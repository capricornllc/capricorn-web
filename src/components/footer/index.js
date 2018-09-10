import React from 'react';
import Link from 'gatsby-link';

// Styles
import styles from './styles.module.css';

import colorLogo from '../../assets/images/logo-color.svg';
import whiteLogo from '../../assets/images/logo-white.svg';

import twitterIcon from '../../assets/icons/twitterIcon.svg';
import linkedinIcon from '../../assets/icons/linkedinIcon.svg';
import twitterIconActive from '../../assets/icons/twitterIconActive.svg';
import linkedinIconActive from '../../assets/icons/linkedinIconActive.svg';

import Responsive from '../utils/Responsive';

const Footer = ({
    background,
    linkedin,
    twitter,
    home,
    fixed = false,
    technicals = [
        {
            title: 'Terms of use',
            path: '/terms',
        },
        {
            title: 'Disclosure',
            path: '/disclosure',
        }
    ],
    menus = [
        {
            title: 'About',
            path: '/about/',

            sections: [
                {
                    title: 'Mission',
                    path: '/about',
                },
                {
                    title: 'Goals & Values',
                    path: '/about#goals-and-values',
                },
                {
                    title: 'Approach',
                    path: '/about#our-approach',
                },
            ]
        },
        {
            title: 'Team',
            path: '/team/',
            sections: [
                {
                    title: 'Investment team',
                    path: '/team#investment',
                },
                {
                    title: 'Operations team',
                    path: '/team#operations',
                },
            ]
        },
        {
            title: 'Jeff Skoll Group',
            path: '/group/',
        },
        {
            title: 'Partners',
            path: '/partners/',
            sections: [
                {
                    title: 'Network of Partners',
                    path: '/partners',
                },
                {
                    title: 'Sustainable Investment Partners',
                    path: '/partners#sustainable',
                },
            ]
        },
        {
            title: 'Contact',
            path: '/contact/',
        },
    ]
}) => {
    return (
        <div >
            <Responsive name="desktop" className={`${styles.main} ${fixed ? styles.fixed : ''}`}>
                <div className={`${styles.top} ${home ? styles.home : ''} ${background ? styles.withTopBackground : styles.noBackground}`}>
                </div>
                <div className={`${styles.middle} ${background ? styles.withBackground : styles.noBackground}`}>
                    <div className={styles.logo}>
                        <img src={background ? whiteLogo : colorLogo} className={`${background ? styles.withBackground : styles.noBackground}`} />
                    </div>
                    <div className={styles.menus}>
                        {
                            menus.map((menu, key) => (
                                <div className={`${styles.menu} ${background ? styles.whiteMenu : ''}`} key={`footer-menu-${key}`}>
                                    <Link to={menu.path}>
                                        {menu.title}
                                    </Link>
                                    <div className={styles.sections}>
                                        {
                                            menu.sections && menu.sections.map(
                                                (section, key) => (
                                                    <Link key={`section-${key}`} to={section.path}>
                                                        {section.title}
                                                    </Link>
                                                ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={`${styles.technicals} ${background ? styles.whiteMenu : ''}`}>
                        {
                            technicals.map(
                                (technical, key) => (
                                    <Link key={`technical-${key}`} to={technical.path}>
                                        {technical.title}
                                    </Link>
                                ))
                        }
                    </div>
                    <div className={styles.socials}>
                        <a target="_blank" key="twitter" href={twitter}>
                            <img src={background ? twitterIconActive : twitterIcon} />
                        </a>
                        <a target="_blank" key="linkedin" href={linkedin}>
                            <img src={background ? linkedinIconActive : linkedinIcon} />
                        </a>
                    </div>
                </div>
            </Responsive>
            <Responsive name="phone" className={styles.phone}>
                <div className={styles.miniFooter}>
                    <img src={background ? whiteLogo : colorLogo} />
                    <div className={`${styles.technicals} ${background ? styles.whiteMenu : ''}`}>
                        {
                            technicals.map(
                                (technical, key) => (
                                    <Link key={`technical-${key}`} to={technical.path}>
                                        {technical.title}
                                    </Link>
                                ))
                        }
                    </div>
                </div>
                <div className={styles.socials}>
                    <a target="_blank" key="twitter" href={twitter}>
                        <img src={background ? twitterIconActive : twitterIcon} />
                    </a>
                    <a target="_blank" key="linkedin" href={linkedin}>
                        <img src={background ? linkedinIconActive : linkedinIcon} />
                    </a>
                </div>
            </Responsive>
        </div >
    );
};

/* onMouseOver={e => background ? e.currentTarget.src = twitterIcon : e.currentTarget.src = twitterIconActive}
onMouseOut={e => background ? e.currentTarget.src = twitterIconActive : e.currentTarget.src = twitterIcon} /> */

export default Footer;