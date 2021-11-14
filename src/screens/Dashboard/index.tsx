import React from 'react';

import { HighLightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';


import {
    Container, 
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighLightCards,
    Transactions,
    Title,
    TransactionList
} from './styles';

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard() {
    const data: DataListProps[] = [{
    id: '1',
    type: 'positive',
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    category: {
        name:'Vendas',
        icon: 'dollar-sign'
    },
    date: "14/11/2021"
},
{
    id: '2',
    type: 'negative',
    title: "hamburgueria ",
    amount: "R$ 59,00",
    category: {
        name:'Alimentação',
        icon: 'coffee'
    },
    date: "13/11/2021"
},
{
    id: '3',
    type: 'negative',
    title: "Aluguel do apartamento",
    amount: "R$ 1.200,00",
    category: {
        name:'Casa',
        icon: 'shopping-bag'
    },
    date: "14/11/2021"
}
];
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo 
                            source={{uri: 'https://avatars.githubusercontent.com/u/25790667?v=4' }} 
                        />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Felipe</UserName>
                        </User>
                    
                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>
            </Header>
            <HighLightCards>
                <HighLightCard 
                    type="up"
                    title="Entradas" 
                    amount="R$ 17.400,00"
                    lastTransition="Última entrada dia 13 de abril"
                />
                <HighLightCard 
                    type="down"
                    title="Saídas" 
                    amount="R$ 1.259,00"
                    lastTransition="Última saída dia 3 de abril"
                />
                <HighLightCard 
                    type="total"
                    title="Total" 
                    amount="R$ 16.141,00"
                    lastTransition="01 à 16 de abril"
                />
            </HighLightCards>

            <Transactions>
                <Title>Listagem</Title>
                <TransactionList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                   
                />

               
            </Transactions>
            
        </Container>
    )
}
