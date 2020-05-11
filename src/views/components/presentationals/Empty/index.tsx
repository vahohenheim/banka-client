import React from 'react';
import Icon from "../Icon";

import * as styles from './Empty.module.css';

type Props = {
    importantContent: string;
    thinContent: string;
    onClick?: void;
};

const Empty: React.FC<Props> = ({ importantContent,thinContent, onClick  }) => {
    return (
        <div className={styles.container}>
            <p className={styles.important}>{importantContent}</p>
            <p className={styles.thin}>{thinContent}</p>
            <Icon onClick={onClick} className={styles.action} id="add" size={15} />
        </div>
    )
};

export default Empty;