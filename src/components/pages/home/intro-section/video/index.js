import React from 'react';
import Markdown from 'react-markdown';
import classnames from 'classnames';
import { API_URL } from '../../../../../config';

import styles from './styles.module.css';
import play from '../../../../../assets/icons/play-button.svg';
import frame from '../../../../../assets/images/first-frame.jpg';
import { setTimeout } from 'timers';

class Video extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            firstPlay: true,
        };
    }

    playVideo() {
        const { playing } = this.state;

        if (playing) {
            this.refs.vidRef.pause();
        } else {
            this.refs.vidRef.play();
        }

        this.setState((prevState) => ({ playing: !prevState.playing, firstPlay: false }));
    }

    componentDidMount() {
        this.refs.vidRef.load();
    }

    render() {
        const { playing, firstPlay } = this.state;

        return (
            <div className={styles.videoContainer}>
                <div className={styles.buttonWrapper} onClick={this.playVideo.bind(this)}>
                    <div className={styles.mobileTop} >
                        <Markdown source={this.props.message} />
                    </div>
                    <img id='playButton' align="right" className={classnames(styles.button, playing ? styles.play : styles.false)} src={play} />
                </div>
                <video ref="vidRef" className={styles.desktop} autoPlay="autoPlay" loop muted playsinline="playsinline">
                    <source src={API_URL + this.props.video} key="video" type="video/mp4" />
                </video>
                {firstPlay ? <img className={styles.firstPlay} src={frame} /> : null}
                <video ref="vidRef" className={styles.phone} loop muted playsinline="playsinline">
                    <source src={API_URL + this.props.video} key="video" type="video/mp4" />
                </video>
            </div>
        );
    }
}

export default Video;