import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Container, Text, ListItem, DateText, LocationText } from './styles';
import LayoutBase from '../../components/Layout';
import { useNavigation } from '@react-navigation/native';

interface VideoData {
    id: number;
    date: string;
    location: {
        latitude: number;
        longitude: number;
    };
}

const ListaScreen: React.FC = () => {
    const [videos, setVideos] = useState<VideoData[]>([]);
    const navigation = useNavigation();

    // Simula uma requisição ao banco de dados
    useEffect(() => {
        const fetchData = () => {
            // Dados simulados de vídeos enviados
            const videoList = [
                {
                    id: 1,
                    date: '2024-10-06 14:32',
                    location: {
                        latitude: -22.9325349,
                        longitude: -45.4610182,
                    },
                },
                {
                    id: 2,
                    date: '2024-10-05 18:20',
                    location: {
                        latitude: -23.5632108,
                        longitude: -46.654321,
                    },
                },
                {
                    id: 3,
                    date: '2024-10-04 09:15',
                    location: {
                        latitude: -22.912176,
                        longitude: -43.230278,
                    },
                },
            ];

            // Simula a "requisição" e define o estado
            setVideos(videoList);
        };

        fetchData();
    }, []);

    const handlePress = (video: VideoData) => {
        // Corrige o navigate removendo o `as never`
        navigation.navigate('LocalizationScreen', { video });
    };

    return (
        <LayoutBase>
            <Container>
                <Text>Fire spots</Text>

                <ScrollView>
                    {videos.map((video) => (
                        <TouchableOpacity key={video.id} onPress={() => handlePress(video)}>
                            <ListItem>
                                <DateText>Date: {video.date}</DateText>
                                <LocationText>

                                    Location: Latitude {video.location.latitude}, Longitude {video.location.longitude}
                                </LocationText>
                            </ListItem>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </Container>
        </LayoutBase>
    );
};

export default ListaScreen;
