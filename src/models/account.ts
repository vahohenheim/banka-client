import {IconType} from "../constants/icons";

export interface Account {
    id: number;
    name: string;
    amount: number;
    budget: number;
    credit: number;
    debit: number;
    monthlyBalance?: Balance;
    transactions?: Transaction[];
    baskets?: Basket[];
    projects?: Project[];
}

export interface Balance {
    amount: number;
    budget: number;
    categories: CategoryBalance[];
}

export interface CategoryBalance {
    id: number;
    icon: IconType;
    name: string;
    amount: number;
    budget: number;
}

export interface Transaction {
    id: number;
    icon: IconType;
    category: string;
    name: string;
    amount: number;
    date: string;
}


export interface Basket {
    id: number;
    icon: IconType;
    name: string;
    amount: number;
}

export interface Project {
    id: number;
    picture: string;
    name: string;
    amount: number;
    goal: number;
}