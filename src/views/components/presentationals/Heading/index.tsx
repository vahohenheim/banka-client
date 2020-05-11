import React from 'react'
import * as styles from './Heading.module.css';

type Tags = 'h1' | 'h2' | 'h3';

type Props = {
    tag: Tags;
    children: React.ReactNode;
    className?: string;
}

const Heading: React.FC<Props> = ({ tag, children, className }) => {

    return React.createElement(
        tag,
        {
            className:[className, styles[tag]].filter((s) => s).join(' ')
        },
        children);
}

export default Heading;
