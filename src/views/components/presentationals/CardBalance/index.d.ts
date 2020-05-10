import React from 'react';
import { CategoryBalance } from '../../../../models/account';
declare type Props = {
    key?: number;
    category: CategoryBalance;
    onClick?: () => void;
    className?: string;
};
declare const CardBalance: React.FC<Props>;
export default CardBalance;
