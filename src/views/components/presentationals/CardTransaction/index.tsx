import React from 'react';
import {Transaction} from '../../../../models/account';
import Icon from '../Icon';
import {PricePipe, TruncatePipe} from "../../../../utils/pipes";

import * as styles from './CardTransaction.module.css';

type Props = {
    key?: number;
    transaction: Transaction;
    onClick?: () => void;
    className?: string;
};

const CardTransaction: React.FC<Props> = ({ transaction, onClick, key, className }) => {
    const isNegativeAmount = transaction.amount < 0;

    return (
        <div key={key} onClick={onClick} className={`${styles.container} ${className}`}>
            <Icon id={transaction.icon} size={15} />
            <div>
                <p className={styles.category}>{transaction.category}</p>
                <p className={styles.name}>{TruncatePipe(transaction.name, 28)}</p>
            </div>
            <p className={`${styles.amount} ${isNegativeAmount ? styles.negative : ''}`}>{PricePipe(transaction.amount)}</p>
        </div>
    )
};

export default CardTransaction;
