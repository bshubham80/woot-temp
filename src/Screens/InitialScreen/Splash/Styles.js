import { StyleSheet } from 'react-native';
import Colors from '../../../Config/Colors';
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    logoView: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
    },
    logobg: {
        flex:1,
    },
    logo: {
   width:'100%',
   height:'100%',
    },
    bottomView: {
        position: 'absolute',
        bottom: 20,
        left: 40,
        right: 40,
    },
    bottomline: {
        height: 1,
        backgroundColor: Colors.grey
    },
    iconview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    iconbackground: {
        width: 80,
        height: 80,
        backgroundColor: Colors.lightgrey,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomtext: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 15,
    },
    iconsize: {
        width: 48,
        height: 48,
    },
    charticon: {
        width: 48,
        height: 40,
    },
    markicon: {
        width: 44,
        height: 44,
    }
})