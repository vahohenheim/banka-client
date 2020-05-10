import React from 'react'
import * as styles from './Heading.module.css';

type Tags = 'h1' | 'h2' | 'h3';

type Props = {
    tag: Tags;
    children: React.ReactNode;
}

const Heading: React.FC<Props> = ({ tag, children }) => {

    return React.createElement(
        tag,
        {
            className: styles[tag]
        },
        children);
}

export default Heading;
