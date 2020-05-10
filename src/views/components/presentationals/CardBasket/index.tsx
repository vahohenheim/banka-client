import React from 'react';
import {Basket} from '../../../../models/account';
import Icon from '../Icon';

import * as styles from './CardBasket.module.css';
import { PricePipe } from "../../../../utils/pipes";

type Props = {
    key?: number;
    basket: Basket;
    onClick?: () => void;
    className?: string;
};

const CardBasket: React.FC<Props> = ({ basket, onClick, key, className }) => {
    const isNegative = basket.amount < 0;

    return (
        <div key={key} onClick={onClick} className={`${styles.cardBasket} ${isNegative ? styles.cardBasketNegative : ''} ${className}`}>
            <Icon id={basket.icon} size={18} className={styles.cardBasketIcon} />
            <p className={styles.cardBasketAmount}>{PricePipe(basket.amount)}</p>
            <p className={styles.cardBasketName}>{basket.name}</p>
        </div>
    )
};

export default CardBasket;
