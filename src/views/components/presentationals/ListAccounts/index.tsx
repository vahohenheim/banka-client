import React from 'react'
import CardAccount from '../CardAccount'
import { Account } from '../../../../models/account'

import * as styles from './ListAccounts.module.css';

type Props = {
    accounts: Array<Account>;
    currentAccount?: Account;
    setCurrentAccount: (account: Account) => void;
}

const ListAccounts: React.FC<Props> = ({ accounts, currentAccount, setCurrentAccount }) => {

    return (
        <div className={styles.container}>
            <p className={styles.label}>Sélectionnez un compte</p>
            <div className={styles.listAccounts}>
                {accounts.map((account) => (
                    <CardAccount className={styles.cardAccount} key={account.id} current={currentAccount && currentAccount.id === account.id} account={account} onClick={() => setCurrentAccount(account)} />
                ))}
            </div>
        </div>
    )
};

export default ListAccounts;
