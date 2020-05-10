import React from 'react';
import { Basket } from '../../../../models/account';
declare type Props = {
    key?: number;
    basket: Basket;
    onClick?: () => void;
    className?: string;
};
declare const CardBasket: React.FC<Props>;
export default CardBasket;
