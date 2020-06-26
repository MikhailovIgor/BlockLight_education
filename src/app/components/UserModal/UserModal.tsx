
import React from 'react';
import styles from './styles';
import {Button, Modal, Text, View, TouchableHighlight} from 'react-native';

type UserModalProps={
    visible:boolean,
    singOutAction:()=>void,
}

const UserModal = ({ visible,singOutAction }: UserModalProps) => {
    return (
        <View >
            <Modal
                transparent={true}
                visible={visible} >
                <View style={styles.body}>
                    <Text>Hi</Text>
                </View>
                <Button title={'close'} onPress={singOutAction}/>
            </Modal>

        </View>
    );
};
export default UserModal;
