import React from 'react';
import { Basket } from '../../../../models/account';
declare type Props = {
    baskets: Basket[];
};
declare const ListBaskets: React.FC<Props>;
export default ListBaskets;
