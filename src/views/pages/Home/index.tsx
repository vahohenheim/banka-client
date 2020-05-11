// define
import React, {useState} from 'react';
import Container from '../../components/presentationals/Container';
import ListAccounts from '../../components/presentationals/ListAccounts';
import { accounts, user } from "../../../mocks";
import {Account} from "../../../models/account";
import Balance from '../../components/smarts/Balance';
import ListCategoriesBalance from "../../components/presentationals/ListCategoriesBalance";
import Transactions from "../../components/smarts/Transactions";
import Baskets from "../../components/smarts/Baskets";
import HeaderTitle from "../../components/presentationals/HeaderTitle";
import Projects from "../../components/smarts/Projects";

const Home: React.FC = () => {
    const [currentAccount, setCurrentAccount] = useState<Account | undefined>(accounts.length > 0 ? accounts[0]: undefined);

    // TODO:Container Section
    // TODO:Projects smart

    return (
       <>
           <HeaderTitle title={`Bonjour ${user.firstname},`}>
               <ListAccounts accounts={accounts} currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} />
           </HeaderTitle>

           <Container>
               <Balance account={currentAccount} />
           </Container>

           {currentAccount?.monthlyBalance && (
               <ListCategoriesBalance categories={currentAccount.monthlyBalance.categories} />
           )}

           <Container>
                <Transactions transactions={currentAccount?.transactions} />
                <Baskets baskets={currentAccount?.baskets} />
                <Projects projects={currentAccount?.projects} />
           </Container>

       </>


    )
}

export default Home
