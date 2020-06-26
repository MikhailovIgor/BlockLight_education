/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState,useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ToolBar from '../app/components/ToolBar/ToolBar';
import NavigationController from './navigation/NavigationController/NavigationController';
import EStyleSheet from 'react-native-extended-stylesheet';

import {navigationRef,isReadyRef} from '../app/navigation/RootNavigation/RootNavigation';
import BottomTabBar from "./components/BottomTabBar/BottomTabBar";
//тут будут все цвета для глобального доступа
EStyleSheet.build({
    $toolbarColor: '#2C2C2C',
});
const App: () => React$Node = () => {

    return (
        <NavigationContainer ref={navigationRef}>
            <ToolBar/>
            <NavigationController/>
            <BottomTabBar/>
        </NavigationContainer>
    );
};


export default App;
