import React, {useEffect, useState} from 'react';
import styles from './styles';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {navigate} from '../../navigation/RootNavigation/RootNavigation';
import {useRoute,useNavigationState,useNavigation} from "@react-navigation/native";

const BottomTabBar = () => {
    const interfaceSize:number=30;
    const selectedColor:string= '#feab00';
    const [flag,setFlag]=useState(false);

    return (
        <View style={styles.bar}>
            <View style={styles.buttons}>
                <TouchableOpacity  style={styles.label} onPress={() =>{navigate('Home'); setFlag(!flag)} }>
                    <Icon name={'home'} size={interfaceSize} color={'#ffffff'}
                          solid/>
                    <Text style={styles.textStyle}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.label} onPress={() => navigate('Dashboards')}>
                    <Icon name={'tachometer-alt'} size={interfaceSize} color={'#ffffff'}
                          solid/>
                    <Text style={styles.textStyle}>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.label} onPress={() => navigate('Integrations')}>
                    <Icon name={'link'} size={interfaceSize} color={'#ffffff'}
                          solid/>
                    <Text style={styles.textStyle}>Integrations</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.label} onPress={() => navigate('Social')}>
                    <Icon name={'thumbs-up'} size={interfaceSize} color={'#ffffff'}
                          solid/>
                    <Text style={styles.textStyle}>Social</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
};
export default BottomTabBar;
