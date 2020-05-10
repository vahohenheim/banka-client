import React from 'react'
import { Account } from '../../../../models/account'

import * as styles from './Balance.module.css';
import Heading from "../../presentationals/Heading";
import { PricePipe } from "../../../../utils/pipes";

type Props = {
    account?: Account;
}

const Balance: React.FC<Props> = ({ account }) => {

    return (
        <div className={styles.container}>
            <p className={styles.nameAccount}>{account?.name}</p>
            <Heading tag="h2">Balance Mensuelle</Heading>
            <div className={styles.balanceAmount}>
                <p className={styles.amount}>{PricePipe(account?.amount)}</p>
                <p className={styles.budget}> / {PricePipe(account?.budget)}</p>
            </div>
        </div>
    )
}

export default Balance
