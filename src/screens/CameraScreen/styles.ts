import styled from 'styled-components/native';
import { CameraView } from 'expo-camera';


export const Message = styled.Text<{ hide?: boolean }>`
  margin-top: 50px;
  font-size: 15px;
  color: red;
  text-align: center;
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  align-self: flex-end;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

export const StyledCameraView = styled(CameraView)`
  flex: 1;
  width: 100%;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 40px;
  align-items: center;
  width: 100%;
`;

export const RecordButton = styled.TouchableOpacity<{ hide?: boolean }>`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  background-color: red;
  border: 6px solid white;
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
`;

export const SendButton = styled.TouchableOpacity<{ hide?: boolean }>`
  background-color: green;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
`;

export const DiscardButton = styled.TouchableOpacity<{ hide?: boolean }>`
  background-color: red;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
`;

export const TimerText = styled.Text<{ hide?: boolean }>`
  position: absolute;
  top: 50px; 
  font-size: 40px; 
  color: red;
  text-align: center;
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
`;
