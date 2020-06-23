import React from 'react';
import {View, Text} from 'react-native';

import ToolbarAndroid from '@react-native-community/toolbar-android';

const Dashboards = () => {
    return (
        <View style={{flex: 1}}>
            <ToolbarAndroid
                title="AwesomeApp"
            />
            <Text>Dashboards screen</Text>
        </View>
    );
};
export default Dashboards;
