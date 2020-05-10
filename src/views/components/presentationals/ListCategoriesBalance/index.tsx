import React from 'react'
import {CategoryBalance} from '../../../../models/account'

import * as styles from './ListCategoriesBalance.module.css';
import CardBalance from "../CardBalance";

type Props = {
    categories: CategoryBalance[];
}

const ListCategoriesBalance: React.FC<Props> = ({ categories }) => {

    return (
        <div className={styles.container}>
            {categories.map((categoryBalance) => (
                <CardBalance key={categoryBalance.id} category={categoryBalance} className={styles.item} />
            ))}
        </div>
    )
};

export default ListCategoriesBalance;