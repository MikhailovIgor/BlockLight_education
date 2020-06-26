import React, {useState} from 'react';
import {View, Text, Modal, Button} from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';


const Home = () => {
    const [test,setTest]=useState(false);

  return (
    <View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
      <Text >Home screen</Text>

    </View>
  );
};

export default Home;
