import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import AboutProject from "../screens/AboutProject";
import CameraScreen from "../screens/CameraScreen";


const MainStack = createNativeStackNavigator();

export default () => {
    return (
        <MainStack.Navigator screenOptions={{headerShown: false}}>              
            <MainStack.Screen name="Home" component={Home}  />   
            <MainStack.Screen name="AboutProject" component={AboutProject}  />     
            <MainStack.Screen name="CameraScreen" component={CameraScreen} />                 
        </MainStack.Navigator>
    );
}



