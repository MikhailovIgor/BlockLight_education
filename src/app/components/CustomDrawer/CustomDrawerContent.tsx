import React, {useEffect, useState} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import {Text, View} from "react-native";
import {navigate} from "../../navigation/RootNavigation/RootNavigation";


const  CustomDrawerContent=(props:any)=> {

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                label="Hi,BlockLight"
                labelStyle={{color:'#000000'}}
                onPress={()=>{}}
            />
            <DrawerItem
                label="Settings"
                labelStyle={{color:'#000000'}}
                style={{borderTopWidth:1, borderTopColor:'#c4c4c4'}}
                icon={()=><Icon  name={'cog'} size={25} color={'#000000'}/>}
                onPress={()=>{navigate('Settings')}}
            />
           {/* <DrawerItemList  {...props} />*/}
            <DrawerItem
                label={'Night:'+" Off"}
                labelStyle={{color:'#000000'}}
                style={{borderTopWidth:1, borderTopColor:'#c4c4c4'}}
                icon={()=><Icon  name={'moon'} size={25} color={'#000000'}/>}
                onPress={()=>{ }}
            />
            <DrawerItem
                label="Sing out"
                labelStyle={{color:'#ffffff'}}
                inactiveBackgroundColor={'#EF7C15'}
                onPress={()=>console.log('sing out')}
            />

        </DrawerContentScrollView>
    );
};
export default CustomDrawerContent;
