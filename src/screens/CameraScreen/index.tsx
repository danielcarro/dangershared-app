import { CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useEffect } from 'react';
import { Container, Button, ButtonText, StyledCameraView, Message, RecordButton, SendButton, DiscardButton, ButtonContainer, TimerText } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';


export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(30); 
  const [video, setVideo] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

const navigation = useNavigation(); 

  useEffect(() => {
    let timerInterval: NodeJS.Timeout | null = null;

    if (isRecording) {
      timerInterval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timerInterval!);            
            setIsRecording(false);
            setVideo(true);
            return 0;
          }          
          return prev - 1;
        });
      }, 1000);   
    }

    return () => {
      if (timerInterval) clearInterval(timerInterval);
    };
  }, [isRecording, video]);

  if (!permission) {
    return <Container />;
  }

  if (!permission.granted) {
    return (
      <Container>
        <Message>We need your permission to show the camera</Message>
        <Button onPress={requestPermission}>
          <ButtonText>Grant Permission</ButtonText>
        </Button>
      </Container>
    );
  }


  function startRecording() {
    setIsRecording(true);
    
  }

  async function sendRecording() {
    setVideo(false); // Oculta os botões de ação
    setIsRecording(false); // Certifica-se de que a gravação está parada

    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log("Permissão de localização negada.");
        return;
      }

      const location = {
        latitude: -22.9325349,
        longitude: -45.4610182,
      };

      const userData = {
        name: "John Doe",
        email: "johndoe@example.com",
      };

      setSuccessMessage(
        `Enviando video! Localização: Latitude ${location.latitude}, Longitude ${location.longitude}. Dados do usuário: Nome: ${userData.name}, Email: ${userData.email}`
      );

      setTimeout(() => {
        setSuccessMessage('');
        navigation.navigate('ListaScreen' as never);        
      }, 3000);

      

    } catch (error) {
      console.error("Erro ao enviar o vídeo:", error);
    }
   
  }
  

  function discardRecording() {
    console.log("Discard recording");
    setIsRecording(false);
    setVideo(false);
    setTimer(30);
    
  }

  return (
    <Container>
      <StyledCameraView facing={facing}>
      <TimerText hide={!isRecording || video}>{timer} gravando</TimerText>

        <ButtonContainer>
          {/* Botão de gravação, exibido apenas se não há vídeo salvo */}
          <RecordButton onPress={startRecording} hide={video} />

          {/* Botões de ação, exibidos após a gravação */}
          <Message hide={!video}>Your video has been saved. What would you like to do?</Message>
          <SendButton onPress={sendRecording} hide={!video}>
            <FontAwesome name="check" size={40} color="white" />
          </SendButton>
          <DiscardButton onPress={discardRecording} hide={!video}>
            <FontAwesome name="times" size={40} color="white" />
          </DiscardButton>
        </ButtonContainer>
        {successMessage &&  (
          <Message>{successMessage}</Message>
        )}
      </StyledCameraView>
    </Container>
  );
}
