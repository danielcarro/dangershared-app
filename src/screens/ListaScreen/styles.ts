import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  
`;

export const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
  color: #FFF;
`;

export const ListItem = styled.View`
  padding: 10px;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 8px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 5;
`;

export const DateText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const LocationText = styled.Text`
  font-size: 16px;
  color: gray;
`;
