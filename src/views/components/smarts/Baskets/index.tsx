import React from 'react'
import {Basket} from '../../../../models/account'

import * as styles from './Baskets.module.css';
import Icon from "../../presentationals/Icon";
import ListBaskets from "../../presentationals/ListBaskets";

type Props = {
    baskets?: Basket[];
}

const Baskets: React.FC<Props> = ({ baskets }) => {

    if(!!baskets && baskets.length > 0) {
        return (
            <>
                <div className={styles.actions}>
                    <div>
                        <Icon id="add" size={20} />
                    </div>
                    <div>
                        <Icon id="param" size={20} />
                    </div>

                </div>
                <ListBaskets baskets={baskets} />
            </>
        )
    } else {
        return (
            <div className={styles.empty}>
                <p>Créer votre premier panier</p>
                <p>pour gérer vos dépenses non courantes</p>
                <Icon id="add" size={15} />
            </div>
        )
    }
}

export default Baskets;
