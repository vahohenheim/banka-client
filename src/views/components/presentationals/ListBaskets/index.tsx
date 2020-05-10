import React from 'react'
import {Basket} from '../../../../models/account'
import CardBasket from "../CardBasket";

import * as styles from './ListBaskets.module.css';

type Props = {
    baskets: Basket[];
}

const ListBaskets: React.FC<Props> = ({ baskets }) => {

    return (
        <div className={styles.container}>
            {baskets.map((basket) => (
                <CardBasket key={basket.id} basket={basket} />
            ))}
        </div>
    )
};

export default ListBaskets;
