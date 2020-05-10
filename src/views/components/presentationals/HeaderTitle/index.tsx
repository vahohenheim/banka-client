import React from 'react';
import Icon from "../Icon";
import Heading from "../Heading";

import * as styles from './HeaderTitle.module.css';

type Props = {
    children: React.ReactNode;
};

const HeaderTitle: React.FC<Props> = ({ children }) => {
    return (
        <header className={styles.container}>
            <Icon id="kodama" size={30} />
            <Heading tag="h1">{children}</Heading>
        </header>
    )
};

export default HeaderTitle;