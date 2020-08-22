import { StyleSheet } from 'react-native';
import Colors from '../../../Config/Colors';
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
    },
    heading: {
        fontSize: 16,
        color: '#6f7c80',
        fontFamily:'Avenir-Book',
    },
    headingMob: {
        fontSize: 17,
        fontWeight: "bold",
        color: '#6f7c80',
        fontFamily:'Avenir-Book',
    },
    headingText: {
        fontSize: 18,
        color: '#6f7c80',
        fontFamily:'Avenir-Book',
        marginBottom:10,
    },
    mainview:{
        flex: 1,
        justifyContent: 'center',
    },
    textinput: {
    fontSize: 16,
    color: '#6F7C80',
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#BED8D4',
    padding: 10,
    marginVertical: 10
    },
    button: {
        borderRadius: 4, 
        paddingHorizontal: 12,
        paddingVertical: 6,
        alignItems: 'center',
        backgroundColor: Colors.skyblue,
        marginHorizontal: 5,
        marginVertical: 20
    },
    buttonview: {
       flexDirection: "row",
       alignSelf: 'flex-end',
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
    logo: {
        width: 270,
        height: 60,
        alignSelf: 'center',
        marginBottom: 60
        },
})