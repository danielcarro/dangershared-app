import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LayoutBase from '../../components/Layout';
import { StyleSheet,  ScrollView, View } from 'react-native';
import {Container, Text} from './styles';

const AboutProject = () => {
    const navigation = useNavigation();

    const handleDonate = () => {
        navigation.navigate('Donate' as never);
    };

    return (
        <LayoutBase>

            <Container style={styles.container}>
                <Text style={styles.textAbout}>Danger Shared - app!</Text>
                <ScrollView style={styles.scroll}>
                    <Text style={styles.textAbout}>Danger Shared is an innovative app designed to help monitor and combat fire outbreaks in vulnerable areas. With the increasing incidence of wildfires and forest fires, the need for a rapid and effective response becomes essential. This app's mission is to connect citizens, technology, and competent authorities to act efficiently in emergency situations.</Text>
                </ScrollView>
               
            </Container>
        </LayoutBase>
    )
}

export default AboutProject;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        opacity: 0.6,
           },
    scroll:{
        marginTop:40,
        marginBottom:10,
        marginLeft:20,
        marginRight:20       
    },
    textAbout : {
        color: '#fff',
        fontSize: 16,
        textAlign: 'justify'        
    },
    button: {
        width: '90%',
        backgroundColor: '#4b204b',
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 20,
        paddingTop: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        alignSelf: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },
    buttonText: {
        fontSize: 16,
        color: '#fff'
    },
})