import React from 'react';
import {CategoryBalance} from '../../../../models/account';
import Icon from '../Icon';

import * as styles from './CardBalance.module.css';

type Props = {
    key?: number;
    category: CategoryBalance;
    onClick?: () => void;
    className?: string;
};

const CardBalance: React.FC<Props> = ({ category, onClick, key, className }) => {

    return (
        <div key={key} onClick={onClick} className={`${styles.cardBalance} ${className}`}>
            <Icon id={category.icon} size={12} />
            <p className={styles.cardBalanceName}>{category.name}</p>
            <p className={styles.cardBalanceAmount}>{category.amount} /{category.budget}</p>
            progress
        </div>
    )
};

export default CardBalance;
