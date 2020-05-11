import React from 'react'
import {Transaction} from '../../../../models/account'

import * as styles from './Transactions.module.css';
import ListTransactions from "../../presentationals/ListTransactions";
import Heading from "../../presentationals/Heading";
import moment from "moment";
import Empty from "../../presentationals/Empty";

type Props = {
    transactions?: Transaction[];
}

const Transactions: React.FC<Props> = ({ transactions }) => {

    const classifiedTransactions = classifyTransactionsByDate(transactions);

    const isEmpty: boolean = !transactions || transactions.length === 0;

    return (
        <div className={styles.container}>
            <Heading className={`${styles.title} ${isEmpty ? styles.empty : ''}`} tag="h2">Transaction</Heading>
            {!isEmpty ? (
                <>
                    {classifiedTransactions.map((classifiedTransaction) => (
                        <div className={styles.transactionsByDate}>
                            <p className={styles.date}>{moment(classifiedTransaction.date).format("DD MMM YYYY")}</p>
                            <ListTransactions transactions={classifiedTransaction.transactions} />
                        </div>
                    ))}
                    <div className={styles.link}>
                        <a>Voir toutes les transactions</a>
                    </div>
                </>
            ) : (
                <Empty importantContent={"Ajouter vos premières transactions"} thinContent={"pour vivre l'expérience banka"} />
            )}
        </div>
    )
}

export default Transactions

interface classifiedTransactionsByDate {
    date: string;
    transactions: Transaction[];
}


const classifyTransactionsByDate = (transactions: Transaction[] | undefined): classifiedTransactionsByDate[] => {

    let classifiedTransactions: classifiedTransactionsByDate[] = []

    //TODO: Optimiziation necessery

    transactions?.map((transaction) => {
        const date = moment(transaction.date).format('DD-MM-YYYY');

        let isExistingDate: classifiedTransactionsByDate | undefined = classifiedTransactions.find((classifiedTransaction) => {
            return classifiedTransaction.date === date
        });

        if(!!isExistingDate) {
            classifiedTransactions.map((classifiedTransaction) => {
                if(classifiedTransaction.date === date) {
                    classifiedTransaction.transactions.push(transaction);
                }
            })
        } else {
            classifiedTransactions.push({ date: date, transactions: [transaction] });
        }
    })

    return classifiedTransactions;

}