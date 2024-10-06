import { CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useEffect } from 'react';
import { Container, Button, ButtonText, StyledCameraView, Message, RecordButton, SendButton, DiscardButton, ButtonContainer, TimerText } from './styles';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(2); 
  const [video, setVideo] = useState(false);


  console.log(video);

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

  function sendRecording() {
    console.log("Send recording");
   
  }

  function discardRecording() {
    console.log("Discard recording");
    setIsRecording(false);
    setVideo(false);
    setTimer(2);
    
  }

  return (
    <Container>
      <StyledCameraView facing={facing}>
      <TimerText hide={!isRecording || video}>{timer}</TimerText>

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
      </StyledCameraView>
    </Container>
  );
}
