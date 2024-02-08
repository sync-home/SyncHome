"use client"
import { Typewriter } from 'react-simple-typewriter';

const Typewrite = ({ textContents }) => {
    return (
        <Typewriter
            words={textContents}
            cursor
            cursorStyle='_'
            loop='true'
            typeSpeed={100}
            deleteSpeed={40}
            delaySpeed={1000}
        />
    );
};

export default Typewrite;