import React from 'react';
import styles from './styles.module.css';
import Link from 'gatsby-link';

const Menu = ({
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
                menus.map(
                    ({ path, title }, index) => (
                        <div
                            key={`menu-${index}`}
                            className={styles.menuItem}>
                            <Link to={`${path}`}>{title}</Link>
                        </div>
                    ))
            }
        </div>
    );
};

export default Menu;