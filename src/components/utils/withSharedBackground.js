import React from 'react';
import Link from 'gatsby-link';

import { Parallax } from 'react-parallax';

import styles from './styles.module.css';

const withSharedBackground = (children, { backgroundImage, backgroundColor, fontColor, parallax, gradient, bottom, bgSizeHack }) => {

    const iOS = typeof navigator !== 'undefined' && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
   
    const linearGrad = iOS ? ' linear-gradient(white, rgba(255, 255, 255, 0.001), white),' : ' linear-gradient(white, rgba(255, 255, 255, 0.001), white),';

    return parallax ? (
        <Parallax
            className={bottom ? styles.bottom : ''}
            bgImage={backgroundImage}
            strength={500}>
            {children.map(WrappedComponent => WrappedComponent)}
        </Parallax>
    ) : (
        <div
            className={ bgSizeHack && styles.cover } // hack
            style={{
                color: fontColor,
                backgroundSize: bgSizeHack ? 'none' : bottom ? 'contain' : 'cover',  // hack
                backgroundImage: `${gradient ? linearGrad : ''} url('${backgroundImage}')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: bottom? 'center bottom' : 'center', backgroundColor,
            }}>
            {children.map(WrappedComponent => WrappedComponent)}
        </div>
    );
};

export default withSharedBackground;
