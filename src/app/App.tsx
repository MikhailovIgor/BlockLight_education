/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ToolBar from '../app/components/ToolBar/ToolBar';
import NavigationController from './navigation/NavigationController/NavigationController';
import EStyleSheet from 'react-native-extended-stylesheet';
import SplashScreen from 'react-native-splash-screen';
//тут будут все цвета для глобального доступа
EStyleSheet.build({
    $toolbarColor:'#2C2C2C',
});
const App: () => React$Node = () => {
    useEffect(()=>{
        SplashScreen.hide();
    });
  return (
    <NavigationContainer>
       <ToolBar/>
      <NavigationController/>
    </NavigationContainer>
  );
};


export default App;
