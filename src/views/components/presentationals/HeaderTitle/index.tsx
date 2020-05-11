import React from 'react';
import Icon from "../Icon";
import Heading from "../Heading";

import * as styles from './HeaderTitle.module.css';
import Container from "../Container";

type Props = {
    title: string;
    children: React.ReactNode;
};

const HeaderTitle: React.FC<Props> = ({ title, children }) => {
    return (
        <header className={styles.container}>
            <Container>
                <Icon id="kodama" size={30} />
                <Heading tag="h1">{title}</Heading>
            </Container>
            {children}
        </header>
    )
};

export default HeaderTitle;