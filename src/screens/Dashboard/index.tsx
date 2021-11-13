import React from 'react';
import { HighLightCard } from '../../components/HighlightCard';
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
    HighLightCards

} from './styles';

export function Dashboard() {
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
            
        </Container>
    )
}
