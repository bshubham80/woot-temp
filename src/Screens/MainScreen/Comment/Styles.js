import { StyleSheet } from 'react-native';
import Colors from '../../../Config/Colors';
export default StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        marginTop:30,
    borderTopLeftRadius: 30,
    borderTopRightRadius :30,
    backgroundColor:'#fff'
    },
    imagestyle: {
        width: 128,
        height: 128,
        borderRadius: 80,
        marginBottom:20
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.black
    },
    subheader: {
     fontSize: 16,
    },
    textView: {
        flexDirection: 'row',
        marginTop:5,
    },
    checkinoutView: {
        flexDirection: 'row',
        marginTop:10,
        justifyContent: 'space-between'
    },
    itemview: {
        marginVertical: 0.3,
        padding: 10
    },
    itemsubview: {
        flexDirection: 'row',
        width: '100%',
      },
      todoview: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        backgroundColor: Colors.lightgrey,
        borderRadius: 20
    },
    overdue: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginLeft: 15,
    },
    overduetext: {
        fontSize: 16,
        color: Colors.white
       },
    sidebaricon: {
        width: 22,
        height: 22
    },
    sidebariconMen: {
        width: 30,
        height: 30
    },
    bottomline: {
        height: 1,
        backgroundColor: Colors.lightgrey,
        marginTop: 6,
        marginBottom: 2
    },
    button: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: Colors.skyblue,
        marginVertical: 10,
    },
    buttontext: {
        fontSize: 18,
        color: Colors.white
    },
    textinput: {
        fontSize: 16,
        padding: 10,
        width: '80%'
        },
     bottomview: {
       backgroundColor: Colors.lightsky,
       position: 'absolute',
       bottom: 6,
       left: 5,
       right: 0
        }, 
      inputView: {
        flexDirection: 'row',
        width: '90%',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: Colors.royalblue
      },
     fileimage: {
         width: 160,
         height: 160,
         alignSelf: 'center',
         borderWidth: 1 ,
         borderColor: Colors.black,
         borderRadius: 6
        },
      liststyle:{
          padding: 10,
      },
      rowview:{
          flexDirection: 'row',
      },
      img:{
          width: 48,
          height: 48,
      },
      iname:{
          fontSize: 16,
          fontWeight: 'bold',
      },
      verticalview:{
          marginLeft: 10
      },
      chattitletext: {
        fontSize: 18,
        color: Colors.white
    },  
    chattitleview: {
        width: 32,
        height: 32,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    chatname: {
        fontSize: 15,
        color: "#073B4C",
        fontFamily:'Avenir-Book'
    },
    chatmsg: {
        // color: Colors.black
        fontSize: 14,
        color: "#6f7c80",
        top:-20,
        marginLeft:10,
        fontFamily:'Avenir-Book'
    },
})