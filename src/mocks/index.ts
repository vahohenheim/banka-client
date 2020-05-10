import {Account} from "../models/account";
import { User } from "../models/users";

export const accounts: Account[] = [
    {
        id: 1,
        name: "Compte commun",
        amount: 450.00,
        budget: 700.00,
        credit: 2000.00,
        debit: 120.00,
        monthlyBalance: {
            amount: 123.34,
            budget: 700,
            categories: [
                {
                    id: 1,
                    icon: "market",
                    name: "Market",
                    amount: 164,
                    budget: 250,
                },
                {
                    id: 2,
                    icon: "food",
                    name: "Food",
                    amount: 164,
                    budget: 250,
                },
                {
                    id: 3,
                    icon: "transport",
                    name: "Transport",
                    amount: 164,
                    budget: 250,
                },
                {
                    id: 4,
                    icon: "home",
                    name: "Home",
                    amount: 164,
                    budget: 250,
                }
            ]
        },
        transactions: [
            {
                id: 1,
                icon: "transport",
                category: "Transport",
                name: "SNCF - Le Mans - Nantes",
                amount: -14.34,
                date: new Date('12-04-2020 12:45:23')
            },
            {
                id: 2,
                icon: "market",
                category: "Courses",
                name: "Carrefour - Courses pour la semaine",
                amount: -46.98,
                date: new Date('12-04-2020 14:34:02')
            },
            {
                id: 3,
                icon: "gouv",
                category: "État",
                name: "CAF - Prime d’activité",
                amount: -46.98,
                date: new Date('08-04-2020 10:56:42')
            },
        ],
        baskets: [
            {
                id: 1,
                icon: "aesthetic",
                name: "Clothes & Cosmetic",
                amount: 123.00
            },
            {
                id: 2,
                icon: "culture",
                name: "Culture",
                amount: -12.00
            },
            {
                id: 3,
                icon: "home",
                name: "Decoration",
                amount: 35.00
            }
        ],
        projects: [
            {
                id: 1,
                picture: "wood_desk",
                name: "Wood Desk",
                amount: 123.00,
                goal: 300
            },
            {
                id: 2,
                picture: "wood_desk",
                name: "Garden",
                amount: 90.50,
                goal: 200
            },
            {
                id: 3,
                picture: "wood_desk",
                name: "Switch",
                amount: 123.00,
                goal: 300
            }
        ]

    },
    {
        id: 2,
        name: "Compte Personel",
        amount: 200.00,
        budget: 700.00,
        credit: 2000.00,
        debit: 120.00,
        monthlyBalance: {
            amount: 245.43,
            budget: 300,
            categories: [
                {
                    id: 1,
                    icon: "food",
                    name: "Food",
                    amount: 164,
                    budget: 250,
                },
                {
                    id: 2,
                    icon: "smoke",
                    name: "Smoke",
                    amount: 164,
                    budget: 250,
                }
            ]
        }
    },
    {
        id: 3,
        name: "Livret Jeune",
        amount: 2000.00,
        budget: 700.00,
        credit: 2000.00,
        debit: 120.00
    },
    {
        id: 4,
        name: "Livret A",
        amount: 2000.00,
        budget: 700.00,
        credit: 2000.00,
        debit: 120.00
    }
];

export const user: User = {
    id: 1,
    firstname: "Valentin",
    lastname: "Bourreau",
    accounts: [1, 2, 3, 4]
}

