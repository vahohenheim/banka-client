import React from 'react';
import { Account } from '../../../../models/account';
declare type Props = {
    accounts: Array<Account>;
    currentAccount?: Account;
    setCurrentAccount: (account: Account) => void;
};
declare const ListAccounts: React.FC<Props>;
export default ListAccounts;
