import React from 'react';
import { Account } from '../../../../models/account';
declare type Props = {
    key?: number;
    account: Account;
    current?: boolean;
    onClick?: () => void;
    className?: string;
};
declare const CardAccount: React.FC<Props>;
export default CardAccount;
