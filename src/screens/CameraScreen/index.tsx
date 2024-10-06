import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import {Container, Message, Button, ButtonText, ButtonContainer} from './styles';



export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

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

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <Container>
      <CameraView style={{ flex: 1 }} facing={facing}>
        <ButtonContainer>
          <Button onPress={toggleCameraFacing}>
            <ButtonText>Flip Camera</ButtonText>
          </Button>
        </ButtonContainer>
      </CameraView>
    </Container>
  );
}
