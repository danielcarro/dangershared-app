import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #0D1A33;
`;

export const SquareBackground = styled(ImageBackground).attrs({
  source: require('../../assets/images/fundo_button.png'),
})`
  width:280px;
  height: 260px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #0D1A33;
  padding: 15px 30px;
  border-radius: 10px;
  margin: 10px;
  width: 200px;
  text-align: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;




