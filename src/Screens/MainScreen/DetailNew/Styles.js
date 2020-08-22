import { StyleSheet } from 'react-native';
import Colors from '../../../Config/Colors';
export default StyleSheet.create({
    container: {
        flex: 1,
          backgroundColor: '#E12F5B',
    },
    imagestyle: {
        width: 128,
        height: 128,
        borderRadius: 80,
        marginBottom:20
    },
    header: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#073B4C',
        marginLeft:25,
        marginRight:10,
        fontFamily:'Avenir-Book',
    },
    subheader: {
     fontSize: 14,
     marginLeft:25,
     color:'#6f7c80',
     fontFamily:'Avenir-Book',
    },
    subheaderNew: {
        fontSize: 14,
        marginLeft:25,
        marginRight:50,
        color:'#6F7C80',
        fontFamily:'Avenir-Book',
       },
    subheaderClick: {
        fontSize: 16,
        color: 'blue'
   
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
        backgroundColor: Colors.lightsky,
        padding: 10
    },
    itemsubview: {
        flexDirection: 'row',
         width: '100%',
         marginLeft:25,
         marginTop:10,
         marginBottom:5,
      },
      itemsubviewImage: {
        flexDirection: 'row',
         width: '100%',
         marginLeft:25,
         marginTop:10,
         marginBottom:5,
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
        marginTop:5,
        fontSize: 16,
        color: Colors.white
       },
    sidebaricon: {
        width: 25,
        height: 25,
         resizeMode:'contain',
         alignItems: "center", 
         justifyContent: "center",
    },
    bottomline: {
        height: 1,
        backgroundColor: '#BED8D4',
        marginTop: 15,
        marginBottom: 15,
        marginLeft:25,
        // opacity:0.5,
    },
    button: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: '#63D2FF',
        marginVertical: 20,
        borderRadius:40,
        marginLeft:10,
        marginRight:10,
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
       backgroundColor: Colors.white,
       position: 'absolute',
       bottom: 1,
       left: 1,
       right: 1
        }, 
      inputView: {
        flexDirection: 'row',
        width: '90%',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: Colors.grey
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
      } ,
      pickerViewText:{
        width: "100%",
        marginTop:10,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#BED8D4",
      },
      imageComment:{
        width: 20,
        height: 20,
        marginTop: 15,
      },
      imageView:{
        width: "93%",
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#BED8D4",
      },
      viewPicker1:{
        width: "93%",
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#BED8D4",
      },
      subView:{ width: "92%",},
      viewPicker2:{
        width: "93%",
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#BED8D4",
      }, 
  
})
