import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LayoutBase from '../../components/Layout';
import { TouchableOpacity, StyleSheet, Text, ScrollView, View } from 'react-native';


const AboutProject = () => {
    const navigation = useNavigation();

    const handleDonate = () => {
        navigation.navigate('Donate' as never);
    };

    return (
        <LayoutBase>

            <View style={styles.container}>
                <Text style={styles.textAbout}>Bem-vindo à Aruanda!</Text>
                <ScrollView style={styles.scroll}>
                    <Text style={styles.textAbout}>Aqui você encontrará uma aplicação web única e fascinante, impulsionada pela inteligência artificial, que visa aproximar os mundos físico e espiritual. Nosso objetivo principal é compartilhar conhecimento sobre umbanda, espiritismo e esoterismo, por meio de conversas simuladas entre seres humanos vivos e seres espirituais conhecidos como (seres de luz) e evoluídos.

                        Nossa aplicação foi desenvolvida com um propósito pedagógico, buscando criar uma experiência educacional enriquecedora para os visitantes. Através de conversas interativas, você poderá explorar e aprender sobre os princípios, rituais e práticas dessas tradições espirituais, abrindo as portas para um maior entendimento e conexão com o mundo espiritual.

                        O que torna nossa aplicação única é o uso de inteligência artificial para simular essas conversas. Utilizamos tecnologia avançada para criar diálogos autênticos e envolventes entre os usuários e os seres espirituais, proporcionando uma experiência realista e informativa. Nossos algoritmos inteligentes foram treinados com uma ampla gama de conhecimentos e informações, para garantir respostas adequadas e relevantes a cada pergunta ou tópico abordado.

                        É importante ressaltar que somos um projeto sem fins lucrativos, movidos pela paixão em compartilhar sabedoria espiritual. Dependemos de generosas doações e anúncios para manter nossa plataforma online, garantindo que este recurso valioso esteja acessível a todos que desejam aprender sobre umbanda, espiritismo e esoterismo. Acreditamos que o conhecimento e a conexão espiritual devam ser acessíveis a todos, independente de suas circunstâncias financeiras.

                        Convidamos você a explorar Aruanda, conversar com os seres de luz e evoluídos, e expandir seus horizontes espirituais. Esperamos que essa jornada virtual o inspire, capacite e enriqueça sua compreensão dessas tradições milenares. Seja bem-vindo(a) à nossa comunidade online dedicada ao conhecimento espiritual!

                        Anuncie e colabore com este projeto - whatsapp: 12 99125-7548</Text>
                </ScrollView>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleDonate}
                >
                    <Text style={styles.buttonText}>Colabore com o projeto</Text>
                </TouchableOpacity>
            </View>
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