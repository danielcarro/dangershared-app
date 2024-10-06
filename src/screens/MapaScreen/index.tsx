import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Dimensions } from 'react-native';
import { Container, MapaArea, Text } from './styles';
import LayoutBase from '../../components/Layout';

interface Occurrence {
    id: number;
    latitude: number;
    longitude: number;
    description: string;
}

const MapaScreen: React.FC = () => {
    const [occurrences, setOccurrences] = useState<Occurrence[]>([]);

    // Simula a lista de ocorrências com latitude e longitude
    useEffect(() => {
        const data = [
            {
                id: 1,
                latitude: -22.9325349,
                longitude: -45.4610182,
                description: 'Ocorrência 1',
            },
            {
                id: 2,
                latitude: -23.5632108,
                longitude: -46.654321,
                description: 'Ocorrência 2',
            },
            {
                id: 3,
                latitude: -22.912176,
                longitude: -43.230278,
                description: 'Ocorrência 3',
            },
        ];

        setOccurrences(data);
    }, []);

    return (
        <LayoutBase>
            <Container>
                <Text>Localização de Ocorrencias</Text>
                <MapaArea>
                    <MapView
                        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
                        initialRegion={{
                            latitude: -22.9325349,
                            longitude: -45.4610182,
                            latitudeDelta: 0.5,
                            longitudeDelta: 0.5,
                        }}
                    >
                        {occurrences.map((occurrence) => (
                            <Marker
                                key={occurrence.id}
                                coordinate={{
                                    latitude: occurrence.latitude,
                                    longitude: occurrence.longitude,
                                }}
                                title={occurrence.description}
                                description={`Latitude: ${occurrence.latitude}, Longitude: ${occurrence.longitude}`}
                            />
                        ))}
                    </MapView>
                </MapaArea>
            </Container>
        </LayoutBase>
    );
};

export default MapaScreen;
