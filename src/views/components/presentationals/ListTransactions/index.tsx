import React from 'react'
import {Transaction} from '../../../../models/account'
import CardTransaction from "../CardTransaction";

import * as styles from './ListTransactions.module.css';

type Props = {
    transactions: Transaction[];
}

const ListTransactions: React.FC<Props> = ({ transactions }) => {

    return (
        <div className={styles.container}>
            {transactions.map((transaction) => (
                <CardTransaction className={styles.item} key={transaction.id} transaction={transaction} />
            ))}
        </div>
    )
};

export default ListTransactions;
