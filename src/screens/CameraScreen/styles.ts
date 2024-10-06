import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  text-align: center;
  padding-bottom: 10px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: transparent;
  margin: 64px;
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