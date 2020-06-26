import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';

import Home from '../../screens/Home/Home';
import Dashboards from '../../screens/Dashboards/Dashboards';
import Integrations from '../../screens/Integrations/Integrations';
import Social from '../../screens/Social/Social';

import Icon from 'react-native-vector-icons/FontAwesome';
import UserPage from "../../screens/UserPage/UserPage";
import CustomDrawerContent from "../../components/CustomDrawer/CustomDrawerContent";

const Tab = createBottomTabNavigator();
const Draver = createDrawerNavigator();
const Stack = createStackNavigator();
const TabNavigation = () => {
    return <Tab.Navigator
        initialRouteName='Home'
        tabBarOptions={{
            activeTintColor: '#EF7C15',
            inactiveTintColor: '#ffffff',
            style: {backgroundColor: '#2C2C2C', height: 70},
        }}
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName: string;
                let iconColor: string;
                switch (route.name) {
                    case 'Home':
                        iconName = 'home';
                        break;
                    case 'Dashboards':
                        iconName = 'tachometer';
                        break;
                    case 'Integrations':
                        iconName = 'link';
                        break;
                    case 'Social':
                        iconName = 'thumbs-up';
                    default:
                        break;
                }
                return <Icon name={iconName} size={30} color={color}/>;
            },
        })}
    >
        <Tab.Screen
            name='Home'
            component={Home}
            options={{
                tabBarLabel: 'Home',
            }}
        />
        <Tab.Screen
            name='Dashboards'
            component={Dashboards}
            options={{
                tabBarLabel: 'Dashboards',

            }}
        />
        <Tab.Screen
            name='Integrations'
            component={Integrations}
            options={{
                tabBarLabel: 'Integrations',

            }}
        />
        <Tab.Screen
            name='Social'
            component={Social}
            options={{
                tabBarLabel: 'Social',
            }}
        />
    </Tab.Navigator>
}
const DrawerNavigation = () => {
    return <Draver.Navigator
        drawerPosition={'right'}
        drawerType={'slide'}
        drawerStyle={{
            width: 240,
        }}
        drawerContent={CustomDrawerContent}
    >
        <Draver.Screen name={'Settings'} component={UserPage}/>
    </Draver.Navigator>

}
const StackNavigation = () => {
    return <Stack.Navigator
        screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation
        }}
        headerMode={'none'}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Dashboards" component={Dashboards}/>
        <Stack.Screen name="Integrations" component={Integrations}/>
        <Stack.Screen name="Social" component={Social}/>
    </Stack.Navigator>
}
const NavigationController = () => {

    return (
        <Draver.Navigator
            drawerPosition={'right'}
            drawerType={'slide'}
            drawerStyle={{
                width: 240,
            }}
            drawerContent={()=><CustomDrawerContent/>}
        >
            <Draver.Screen name={'Main'} component={StackNavigation}/>
            <Draver.Screen name={'Settings'} component={UserPage}/>
        </Draver.Navigator>

    );
};
export default NavigationController;
