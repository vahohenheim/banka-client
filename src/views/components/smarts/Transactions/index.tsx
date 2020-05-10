import React from 'react'
import {Transaction} from '../../../../models/account'

import * as styles from './Transactions.module.css';
import Icon from "../../presentationals/Icon";
import ListTransactions from "../../presentationals/ListTransactions";
import Heading from "../../presentationals/Heading";

type Props = {
    transactions?: Transaction[];
}

/*
interface classifiedTransactionsByDate {
    date: Date;
    transactions: Transaction[];
}


const classifyTransactionsByDate = (transactions: Transaction[]): classifiedTransactionsByDate[] => {

    let classifiedTransactions: classifiedTransactionsByDate[] = []

    //TODO: reunir le test + l'ajout pour reduire la manipulation des dates

    transactions.map((transaction) => {
        let isExistingDate: classifiedTransactionsByDate | undefined = classifiedTransactions.find((classifiedTransaction) => {
            return (classifiedTransaction.date - transaction.date) === 0
        });

        if(!!isExistingDate) {
            classifiedTransactions.map((classifiedTransaction) => {
                if(classifiedTransaction.date === transaction.date) {
                    classifiedTransaction.transactions.push(transaction);
                }
            })
        } else {
            classifiedTransactions.push({ date: transaction.date, transactions: [transaction] });
        }
    })

    return classifiedTransactions;

}*/

const Transactions: React.FC<Props> = ({ transactions }) => {

    if(!!transactions) {

        //let classifiedTransactions = classifyTransactionsByDate(transactions);

        return (
            <>
                <Heading tag="h2">Transaction</Heading>
                {/*classifiedTransactions.map((classifiedTransaction) => (
                    <>
                        <p>{classifiedTransaction.date}</p>
                        <ListTransactions transactions={classifiedTransaction.transactions} />
                    </>
                ))*/}
                <ListTransactions transactions={transactions} />
            </>
        )
    } else {
        return (
            <div className={styles.empty}>
                <p>Ajouter vos premières transactions</p>
                <p>pour vivre l'expérience banka</p>
                <Icon id="add" size={15} />
            </div>
        )
    }
}

export default Transactions
