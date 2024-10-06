import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useRoute } from '@react-navigation/native';
import LayoutBase from '../../components/Layout';


interface LocalizationScreenParams {
    video: {
        location: {
            latitude: number;
            longitude: number;
        };
    };
}

const LocalizationScreen: React.FC = () => {
    const route = useRoute();
    const { video } = route.params as LocalizationScreenParams;
    const { latitude, longitude } = video.location;

    return (
        <LayoutBase>
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1, marginTop: 20, marginBottom: 20 }} // Estiliza o mapa para ajustar no layout
                    initialRegion={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    <Marker
                        coordinate={{ latitude, longitude }}
                        title="Local da Ocorrência"
                        description={`Latitude: ${latitude}, Longitude: ${longitude}`}
                    />
                </MapView>
                <View style={{ padding: 10 }}>
                    <Text style={{ color: 'white'}} >Fire spot:</Text>
                    <Text style={{ color: 'white'}}>Latitude: {latitude}</Text>
                    <Text style={{ color: 'white'}}>Longitude: {longitude}</Text>
                </View>
            </View>
        </LayoutBase>
    );
};

export default LocalizationScreen;
