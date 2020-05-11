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
        <div key={key} onClick={onClick} className={`${styles.container} ${ current ? styles.current : ''} ${className}`}>
            <h2 className={styles.name}>{account.name}</h2>
            <p className={styles.amount}>{account.amount}€</p>

            <div className={styles.balance}>
                <p className={styles.credit}>
                    <Icon id="arrow" size={9} direction="top" />
                    {account.credit}€
                </p>
                <p className={styles.debit}>
                    <Icon id="arrow" size={9} direction="bottom" />
                    {account.debit}€
                </p>
            </div>
        </div>
    )
}

export default CardAccount
