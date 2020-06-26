import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './style';
import React, {useState,useEffect} from 'react';
import {View, Image} from 'react-native';

import {openDrawer,closeDrawer,navigate} from '../../navigation/RootNavigation/RootNavigation';

const ToolBar = () => {
    const interfaceSize: number = 27;
    const test = (): void => {
        console.log("press on ");
    }
    return (
        <View style={styles.toolbar}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')}/>
            <View style={styles.buttons}>
                <Icon style={{marginStart: -4}} onPress={test} name={'bell'} size={interfaceSize} color={'#ffffff'}
                      solid/>
                <Icon style={{marginEnd: -8}} name={'comment-dots'} size={interfaceSize} color={'#ffffff'}/>
                <Icon style={{height: interfaceSize, borderLeftWidth: 1, borderLeftColor: 'white', paddingLeft: 13}}
                            onPress={openDrawer}
                      name={'user-circle'} size={interfaceSize} color={'#ffffff'} solid/>
            </View>

        </View>
    );
};
export default ToolBar;

