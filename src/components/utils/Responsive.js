import React from 'react';
import MediaQuery from 'react-responsive';
import classnames from 'classnames';
import styles from './styles.module.css';

const breakpoints = {
    desktop: '(min-device-width: 768px)',
    //tablet: '(min-width: 768px) and (max-width: 1024px)',
    phone: '(max-device-width: 767px)',
};

export default function Breakpoint(props) {
    const breakpoint = breakpoints[props.name] || breakpoints.desktop;
    return (
        <MediaQuery {...props } className={classnames(props.full ? styles.full : '', ...props.className)} query={breakpoint} >
            {props.children}
        </MediaQuery >
    );
}