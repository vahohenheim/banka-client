import React from 'react';
import { Transaction } from '../../../../models/account';
declare type Props = {
    transactions: Transaction[];
};
declare const ListTransactions: React.FC<Props>;
export default ListTransactions;
