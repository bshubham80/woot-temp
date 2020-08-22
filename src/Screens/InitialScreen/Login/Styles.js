import { StyleSheet } from 'react-native';
import Colors from '../../../Config/Colors';
export default StyleSheet.create({
    container: {
        flex: 1,
         padding: 10,
         backgroundColor:'#F7F9F9',
    },
    heading: {
        fontSize: 20,
        color: Colors.primary,
        alignSelf: 'center'
    },
    mainview:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'#F7F9F9',
    },
    textinput: {
    fontSize: 16,
    padding: 15,
    backgroundColor: '#fff',
    marginBottom:1,
    },
    button: {
        marginTop:-250,
        paddingHorizontal: 12,
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: Colors.skyblue,
        marginVertical: 12,
        borderRadius: 50,
        height: 50,
    },
    buttontextlogo: {
        fontSize: 25,
        color: '#073B4C',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop:200,
        marginBottom:30,
    },
    buttontext: {
        fontSize: 18,
        color: Colors.white
    },
    forgottext: {
        marginTop:-180,
        fontSize: 14,
        color: Colors.skyblue,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom:25,
    },
    privacyPolicytext: {
        marginTop:-150,
        fontSize: 14,
        color: Colors.skyblue,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom:25,
    },
    logo: {
        width: 270,
        height: 60,
        alignSelf: 'center',
        marginBottom: 60
        },
})