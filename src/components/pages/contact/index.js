import React from 'react';

import Map from './map';
import Markdown from 'react-markdown';

import classnames from 'classnames';

import styles from './styles.module.css';

const Contact = ({ contacts }) => {
    return (
        <div className={styles.main}>
            <div className={styles.tiles}>
                {
                    contacts.map(({ node: { Title, Address, Website, Email, Longitude, Latitude } }, index) => (
                        <div className={styles.contact}>
                            <Map
                                long={Longitude}
                                lat={Latitude}
                                website={Website}
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCExiWSrwKgjTPvDptjNa8jiqVPRwOOQ48&v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: '100%' }} />}
                                containerElement={<div style={{ height: '12rem' }} />}
                                mapElement={<div style={{ height: '100%' }} />}
                            />
                            <div className={styles.title}>
                                <Markdown source={Title} className={index % 2 ? styles.green : styles.blue} />
                            </div>
                            <div className={styles.address}>
                                {Address}
                            </div>
                            <a className={styles.email} href={`mailto:${Email}`}>
                                {Email}
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Contact;