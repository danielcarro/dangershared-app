import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigators/MainStack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (  
        <NavigationContainer>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <MainStack />
          </GestureHandlerRootView>
        </NavigationContainer>   
  );
}

export default App;
