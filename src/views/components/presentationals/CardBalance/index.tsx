import React from 'react';
import {CategoryBalance} from '../../../../models/account';
import Icon from '../Icon';

import * as styles from './CardBalance.module.css';
import {PricePipe} from "../../../../utils/pipes";

type Props = {
    key?: number;
    category: CategoryBalance;
    onClick?: () => void;
    className?: string;
};

const CardBalance: React.FC<Props> = ({ category, onClick, key, className }) => {

    return (
        <div key={key} onClick={onClick} className={`${styles.container} ${className}`}>
            <Icon id={category.icon} size={13} />
            <p className={styles.name}>{category.name}</p>
            <p className={styles.amount}>{PricePipe(category.amount)} <span className={styles.budget}>/{PricePipe(category.budget)}</span></p>
            progress
        </div>
    )
};

export default CardBalance;
