import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    toolbar:{
        flexDirection:'row',
        justifyContent: 'space-between',
        backgroundColor:'$toolbarColor',
        height: 56,
    },
    logo:{
        marginLeft:12,
        alignSelf:'center',
        width:'30%',
        height:'30%',
    },
    buttons:{
        width:'30%',
        marginEnd:12,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },


});
export  default  styles;
