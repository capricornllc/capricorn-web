import React, { Component } from 'react';
import Link from 'gatsby-link';
import classnames from 'classnames';
import styles from './styles.module.css';

import { slide as Menu } from 'react-burger-menu';

import colorLogo from '../../../assets/images/logo-color.svg';
import mobileMenu from '../../../assets/images/mobile-menu.svg';

class MobileMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }


    render() {

        const {
            white,
            active,
            history: {
                location: {
                    pathname = '/',
                }
            },
            menus = [
                {
                    title: 'Home',
                    path: '/',
                },
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
        } = this.props;

        return (
            <div className={styles.main}>
                <div className={styles.menuTop}>
                    <img
                        src={mobileMenu}
                        className={styles.hamburguer}
                        onClick={() => this.setState((prevState) => ({ isOpen: !prevState.isOpen }))} />
                    <div className={styles.header}>
                        <img className={styles.logo} src={colorLogo} />
                    </div>
                </div>
                <Menu isOpen={this.state.isOpen} >
                    {
                        menus.map(
                            ({ path, title }, index) => (
                                <div
                                    key={`menu-${index}`}
                                    className={classnames(styles.menuItem, pathname === path ? styles.active : '')}>
                                    <Link to={`${path}`}>{title}</Link>
                                </div>)
                        )
                    }
                </Menu>
            </div>
        );
    }
}

export default MobileMenu;