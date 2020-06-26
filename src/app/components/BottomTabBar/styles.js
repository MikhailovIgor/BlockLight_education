import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    bar:{
        flexDirection:'row',
        justifyContent: 'space-between',
        backgroundColor:'$toolbarColor',
        height: 56,
    },
    buttons:{
        width:'100%',
        marginEnd:12,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center',
    },
    label:{
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
    },
    textStyle:{
        color:'#ffffff'
    }
});
export default styles;
