// define
import React, {useState} from 'react';
import Container from '../../components/presentationals/Container';
import ListAccounts from '../../components/presentationals/ListAccounts';
import { accounts, user } from "../../../mocks";
import Heading from "../../components/presentationals/Heading";
import {Account} from "../../../models/account";
import Balance from '../../components/smarts/Balance';
import Icon from "../../components/presentationals/Icon";
import ListProjects from "../../components/presentationals/ListProjects";
import ListCategoriesBalance from "../../components/presentationals/ListCategoriesBalance";
import Transactions from "../../components/smarts/Transactions";
import Baskets from "../../components/smarts/Baskets";
import HeaderTitle from "../../components/presentationals/HeaderTitle";

const Home: React.FC = () => {
    const [currentAccount, setCurrentAccount] = useState<Account | undefined>(accounts.length > 0 ? accounts[0]: undefined);

    // TODO:Container Section
    // TODO:Projects smart

    return (
       <>
           <Container>
               <HeaderTitle>Bonjour {user.firstname},</HeaderTitle>
           </Container>

           <ListAccounts accounts={accounts} currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} />

           <Container>
               <Balance account={currentAccount} />
           </Container>

           {currentAccount?.monthlyBalance && (
               <ListCategoriesBalance categories={currentAccount.monthlyBalance.categories} />
           )}

           <Container>
                <Transactions transactions={currentAccount?.transactions} />
           </Container>

           <Container>
               <Heading tag="h2">Panier</Heading>
               <Baskets baskets={currentAccount?.baskets} />
           </Container>

           <Container>
               <Heading tag="h2">Project</Heading>

               {currentAccount && currentAccount.projects ? (
                   <div>
                       <Icon id="add" size={15} />
                       <Icon id="param" size={15} />
                       <ListProjects projects={currentAccount.projects} />
                   </div>
               ): (
                   <div>
                       <p>Créer votre premier projet</p>
                       <p>pour gérer vos épargnes</p>
                       <Icon id="add" size={15} />
                   </div>
               )}

           </Container>


       </>


    )
}

export default Home
