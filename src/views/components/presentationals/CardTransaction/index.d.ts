import React from 'react';
import { Transaction } from '../../../../models/account';
declare type Props = {
    key?: number;
    transaction: Transaction;
    onClick?: () => void;
    className?: string;
};
declare const CardTransaction: React.FC<Props>;
export default CardTransaction;
