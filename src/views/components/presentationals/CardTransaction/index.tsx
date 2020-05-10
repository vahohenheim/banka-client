import React from 'react';
import {Transaction} from '../../../../models/account';
import Icon from '../Icon';
import { TruncatePipe } from "../../../../utils/pipes";

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
        <div key={key} onClick={onClick} className={`${styles.cardTransaction} ${className}`}>
            <Icon id={transaction.icon} size={15} />
            <div>
                <p className={styles.cardTransactionCategory}>{transaction.category}</p>
                <p className={styles.cardTransactionName}>{TruncatePipe(transaction.name, 28)}</p>
            </div>
            <p className={`${styles.cardTransactionAmount} ${isNegativeAmount ? styles.cardTransactionAmountNegative : ''}`}>{transaction.amount}</p>
        </div>
    )
};

export default CardTransaction;
