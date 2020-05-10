import React from 'react'
import { Account } from '../../../../models/account'

import * as styles from './CardAccount.module.css';
import Icon from "../Icon";

type Props = {
    key?: number;
    account: Account;
    current?: boolean;
    onClick?: () => void;
    className?: string;
}

const CardAccount: React.FC<Props> = ({ account, onClick, current, key, className }) => {

    return (
        <div key={key} onClick={onClick} className={`${styles.cardAccount} ${ current ? styles.cardAccountCurrent : ''} ${className}`}>
            <h2 className={styles.cardAccountName}>{account.name}</h2>
            <p className={styles.cardAccountAmount}>{account.amount}€</p>

            <div className={styles.cardAccountBalance}>
                <p className={styles.cardAccountBalanceCredit}>
                    <Icon id="arrow" size={9} direction="top" />
                    {account.credit}€
                </p>
                <p className={styles.cardAccountBalanceDebit}>
                    <Icon id="arrow" size={9} direction="bottom" />
                    {account.debit}€
                </p>
            </div>
        </div>
    )
}

export default CardAccount
