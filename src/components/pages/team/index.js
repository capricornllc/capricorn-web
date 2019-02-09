import React, { Component } from 'react';
import Fader from 'react-fader';
import Link from 'gatsby-link';

import city from '../../../assets/images/city.jpg';
import Markdown from 'react-markdown';
import styles from './styles.module.css';
import StackGrid from 'react-stack-grid';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import linkedinIconActive from '../../../assets/icons/linkedinIconActive.svg';

import { alphabeticaly } from '../../utils/sortHelpers';

class Card extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.member['id'] !== this.props.member['id'];
    }

    render() {
        const { member } = this.props;

        return (
            <Fader animateHeight={false} id={`active-${member.id}`} >
                <div className={styles.activeMember}>
                    <div className={styles.card}>
                        <img className={styles.image} src={member['Avatar'].url} />
                    </div>
                    <div className={styles.info} >
                        <div className={styles.infoHeader}>
                            <div className={styles.infoText}>
                                <div className={styles.infoName}>
                                    {member['Name']}
                                </div>
                                <div className={styles.infoTitle}>
                                    {member['Title']}
                                </div>
                            </div>
                            <a target="_blank" href={member['LinkedIn']}>
                                <div className={styles.infoSocial}>
                                    <img src={linkedinIconActive} />
                                </div>
                            </a>
                        </div>
                        <div className={styles.infoBio}>
                            <Markdown source={member['Bio']} />
                        </div>
                    </div>
                </div>
            </Fader>
        );
    }
}

class Person extends Component {
    render() {
        const { member, handleClick, active, activeTeam = null } = this.props;

        return (
            <AnchorLink href={'#info'} onClick={() => handleClick(member)} className={styles.tile}>
                <div className={`${styles.personWrapper} ${active ? styles.active : ''}`}><img className={`${styles.image} ${active ? styles.activeFaded : ''} ${activeTeam && !member['Team'].includes(activeTeam) ? styles.faded : ''}`} src={member['Avatar'].url} /></div>
                <div className={styles.member}>
                    <div className={styles.name}>
                        {member['Name']}
                    </div>
                </div>
            </AnchorLink>
        );
    }
}

class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
            members: [
                ...props.investment,
                ...props.operations
            ].sort(alphabeticaly),
            openBio: false,
            selectedMember: {},
            activeTeam: null,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeActiveTeam = this.handleChangeActiveTeam.bind(this);
    }


    handleClick(selectedMember) {
        this.setState({
            selectedMember,
            openBio: true,
        });
    }

    handleChangeActiveTeam(activeTeam) {
        if (activeTeam === this.state.activeTeam) {
            this.setState({ activeTeam: null, members: this.state.members.sort(alphabeticaly) });
            return;
        }


        this.setState({
            activeTeam,
            members: activeTeam === 'Investment' ? 
                [
                    ...this.state.members.filter(member => member.node['Team'].includes('Investment')).sort(alphabeticaly),
                    ...this.state.members.filter(member => member.node['Team'].includes('Operations')).sort(alphabeticaly)
                ] : [
                    ...this.state.members.filter(member => member.node['Team'].includes('Operations')).sort(alphabeticaly),
                    ...this.state.members.filter(member => member.node['Team'].includes('Investment')).sort(alphabeticaly)
                ],
        });
    }


    render() {
        const { members, selectedMember, openBio, activeTeam } = this.state;

        return (
            <div>
                <div className={styles.tintCover}>
                    <div className={styles.imageCover} style={{ backgroundImage: `url(${city})` }}>
                    </div>
                </div>
                <div className={styles.main} id="main">
                    <div id="info" />
                    {(openBio) ?
                        (
                            <Card member={selectedMember} />
                        ) : null}
                    <div className={styles.buttons}>
                        <div className={styles.typeButton}>
                            <button onClick={() => this.handleChangeActiveTeam('Investment')} className={activeTeam === 'Investment' ? styles.activeButton : ''}>INVESTMENT TEAM</button>
                        </div>
                        <div className={styles.typeButton}>
                            <button onClick={() => this.handleChangeActiveTeam('Operations')} className={activeTeam === 'Operations' ? styles.activeButton : ''}>OPERATIONS TEAM</button>
                        </div>
                    </div>
                    <StackGrid
                        gutterWidth={5}
                        columnWidth={210}>
                        {
                            members.map(
                                ({ node: member }) => {
                                    return (
                                        <Person activeTeam={activeTeam} handleClick={this.handleClick} member={member} key={member.id} active={selectedMember.id === member.id} />
                                    );
                                })
                        }
                    </StackGrid>
                </div>
            </div>
        );
    }
}

export default Team;
