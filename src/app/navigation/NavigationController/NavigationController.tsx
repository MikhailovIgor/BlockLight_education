import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../../screens/Home/Home';
import Dashboards from '../../screens/Dashboards/Dashboards';
import Integrations from '../../screens/Integrations/Integrations';
import Social from '../../screens/Social/Social';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const NavigationController=()=>{
    return(
        <Tab.Navigator
            initialRouteName='Home'

        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarLabel:'Home',
                    tabBarIcon:()=>(<Icon name='home' size={25} />),
                }}
            />
            <Tab.Screen
                name='Dashboards'
                component={Dashboards}
                options={{
                    tabBarLabel:'Dashboards',
                    tabBarIcon:()=>(<Icon name='tachometer' size={25} />),
                }}
            />
            <Tab.Screen
                name='Integrations'
                component={Integrations}
                options={{
                    tabBarLabel:'Integrations',
                    tabBarIcon:()=>(<Icon name={'link'} size={25}/>),
                }}
            />
            <Tab.Screen
                name='Social'
                component={Social}
                options={{
                    tabBarLabel:'Social',
                    tabBarIcon:()=>(<Icon name={'thumbs-up'} size={25} />),
                }}
            />
        </Tab.Navigator>

    );
};
export default NavigationController;
