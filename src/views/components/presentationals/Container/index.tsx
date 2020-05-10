import React from 'react';
import * as styles from './Container.module.css';

type Props = {
    className?: string;
    children: React.ReactNode;
};

const Container: React.FC<Props> = ({ className, children }) => {
    return (
        <div className={[className, styles.container].filter((s) => s).join(' ')} children={children} />
    )
};

export default Container;