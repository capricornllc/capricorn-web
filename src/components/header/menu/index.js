import React from 'react';
import styles from './styles.module.css';
import Link from 'gatsby-link';

const Menu = ({
    active,
    white,
    history: {
        location: {
            pathname = '/',
        }
    },
    menus = [
        {
            title: 'About Us',
            path: '/about/',
        },
        {
            title: 'Team',
            path: '/team/',
        },
        {
            title: 'Jeff Skoll Group',
            path: '/group/',
        },
        {
            title: 'Partners',
            path: '/partners/',
        },
        {
            title: 'Contact',
            path: '/contact/',
        },
    ]
}) => {
    return (
        <div className={styles.main}>
            {
                active !== 'home' && <div
                    key={'menu-home'}
                    className={`${styles.menuItem} ${white ? styles.white : ''}`}>
                    <Link to={{ pathname: '/', state: { fromOtherPages: true } }}>Home</Link>
                    <div className={styles.underbar} />
                </div>
            }
            {
                menus.map(
                    ({ path, title }, index) => (
                        <div
                            key={`menu-${index}`}
                            className={`${styles.menuItem} ${path === pathname ? styles.active : ''} ${white ? styles.white : ''}`}>
                            <Link to={`${path}`}>{title}</Link>
                            <div className={styles.underbar} />
                        </div>)
                )
            }
        </div>
    );
};

export default Menu;