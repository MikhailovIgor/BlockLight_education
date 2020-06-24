
import React from 'react';
import styles from './styles';
import {Button, Modal, Text, View} from 'react-native';

type UserModalProps={
    transparent:boolean,
    visible:boolean,
    style:any,
}

const UserModal = ({transparent, visible,style}: UserModalProps) => {
    const singOutAction = () => {
        console.log('Sing Out press');
    };
    return (
        <Modal
        transparent={transparent}
        visible={visible}

        >
            <View style={styles.background}>
                <View style={styles.body}>
                    <Text>Modal User settings</Text>
                    <Button title={'Sing Out'} onPress={singOutAction}/>
                </View>
            </View>
        </Modal>

    );
};
export default UserModal;
