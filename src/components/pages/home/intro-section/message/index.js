import React from 'react';
import Markdown from 'react-markdown';
import Typist from 'react-typist';

// Styles
import styles from './styles.module.css';
import 'react-typist/dist/Typist.css';

const Message = ({ message, history: { location: { state = {} } } }) => {

    const markdown = { ...new Markdown({ source: message }).props.children }[0].props.children;

    return state && state.fromOtherPages ? 
        <Markdown className={styles.main} source={message} /> :
        <Typist
            className={styles.main}
            avgTypingSpeed={500}
            startDelay={1500}
            cursor={{
                show: true,
                blink: true,
                element: '|',
                hideWhenDone: true,
                hideWhenDoneDelay: 0,
            }}>
            {markdown}
        </Typist >;
};

export default Message;