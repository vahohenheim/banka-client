import React from 'react'
import {Basket} from '../../../../models/account'

import * as styles from './Baskets.module.css';
import Icon from "../../presentationals/Icon";
import ListBaskets from "../../presentationals/ListBaskets";
import Heading from "../../presentationals/Heading";
import Empty from "../../presentationals/Empty";

type Props = {
    baskets?: Basket[];
}

const Baskets: React.FC<Props> = ({ baskets }) => {

    return (

        <div className={styles.container}>
            <Heading className={styles.title} tag="h2">Panier</Heading>
            {!!baskets && baskets.length > 0 ? (
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
            ): (
                <Empty importantContent={"Créer votre premier panier"} thinContent={"pour gérer vos dépenses non courantes"} />
            )}
        </div>
    )
}

export default Baskets;
