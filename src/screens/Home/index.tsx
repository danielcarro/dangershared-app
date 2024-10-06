import React from 'react';

import { useNavigation } from '@react-navigation/native';
import {
    Container,
    SquareBackground,
    Button,
    ButtonText
} from './styles'; 
import LayoutBase from '../../components/Layout';

const HomeScreen: React.FC = () => {
 
    const navigation = useNavigation();

    return (
        <LayoutBase>
            <Container>
                <SquareBackground>
                    <Button onPress={() => navigation.navigate('CameraScreen' as never)}>
                        <ButtonText>GRAVAR VIDEO</ButtonText>
                    </Button>
                    <Button onPress={() => navigation.navigate('AnotherScreen' as never)}>
                        <ButtonText>ACESSAR O MAPA</ButtonText>
                    </Button>
                </SquareBackground>
            </Container>
        </LayoutBase>
    );
};

export default HomeScreen;
