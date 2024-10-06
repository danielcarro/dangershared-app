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
                        <ButtonText>RECORD FIRE</ButtonText>
                    </Button>
                    <Button onPress={() => navigation.navigate('MapaScreen' as never)}>
                        <ButtonText>ACCESS THE MAP</ButtonText>
                    </Button>
                </SquareBackground>
            </Container>
        </LayoutBase>
    );
};

export default HomeScreen;
