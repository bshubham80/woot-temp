import { StyleSheet } from 'react-native';
import Colors from '../../../Config/Colors';
export default StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor:Colors.skyblue,
    },
    heading: {
        fontSize: 20,
        color: Colors.primary,
        alignSelf: 'center'
    },
    mainview:{
        flex: 1,
        justifyContent: 'center',
      backgroundColor:Colors.skyblue,
    },
    textinput: {
    fontSize: 16,
    color: Colors.primary,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: Colors.primary,
    padding: 10,
    marginVertical: 10
    },
    button: {
        // marginTop:-250,
        marginTop:15,
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: '#63D2FF',
        borderRadius: 50,
        height: 50,
        width:340,
    },
   
    buttontext: {
        fontSize: 16,
        color: Colors.white
    },
    forgottext: {
        fontSize: 22,
        color: Colors.red,
        alignSelf: 'center',
    },
})