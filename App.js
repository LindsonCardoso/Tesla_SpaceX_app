import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './src/routes';
import { Platform, StatusBar } from 'react-native';

export default function App() {

  StatusBar.setBarStyle("light-content");
  if(Platform.OS === "android"){
    StatusBar.setBackgroundColor("rgba(0,0,0,0)");
    StatusBar.setTranslucent(true);
  }

  return (
    <>
    <NavigationContainer >
        <StatusBar  barStyle="light"/>
        <MyDrawer/>
    </NavigationContainer>
    </>
  );
}