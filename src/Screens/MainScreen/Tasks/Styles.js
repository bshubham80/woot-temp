import { StyleSheet } from 'react-native';
import Colors from '../../../Config/Colors';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#EF476F',
    },
   itemview: {
       marginHorizontal: 6,
       marginVertical: 5,
       borderRadius: 8,
       backgroundColor:'#fff',
       marginLeft:20,
       marginRight:20,
       shadowColor: Colors.black,
       borderWidth: 0.1,
       borderColor: Colors.black,
       shadowOpacity: 0.5,
       shadowRadius: 2,
       shadowOffset: {
         height: 1,
         width: 0,
       }
   },
   itemsubview: {
    flexDirection: 'row',
    width: '100%',
  },
  orangeview: {
   width: '2%',
   borderRadius: 5
  },
  whiteview: {
    width: '96%',
    paddingVertical: 8,
    paddingHorizontal: 10,
    // backgroundColor:'#fff',
     margin:10,
   },
   itemheader: {
       fontSize: 15,
        fontWeight: 'bold',
       color: '#073B4C',
       //marginLeft:10,
        marginBottom:5,
       fontFamily:'Avenir-Book',
   },
   itemsubheader: {
    fontSize: 14,
    color: '#6F7C80',
    // marginLeft:10,
    marginBottom:10,
    fontFamily:'Avenir-Book',
   },
   itemsubheaderTitle: {
    fontSize: 15,
//    itemsubheader: {
//     fontSize: 16,
//     width: '60%',
//     color: Colors.black
//    }, 
    color: Colors.black
   },
   button: {
    borderRadius: 4, 
    paddingHorizontal: 12,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10
},
buttontext: {
    fontSize: 16,
    color: Colors.white
},
toolbar: {
    backgroundColor:'#EF476F',   
     height: 70,
    paddingHorizontal: 16,
    paddingTop: 28,
    flexDirection: 'row',
    width:'100%'
   },
   sidebarview: {
    width: '35%'
  },
   sidebaricon: {
       width: 22,
       height: 22
   },
   tooltextview: {
       width: '75%',
       marginLeft:-70,
   },
   tooltext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white
    },  
   refreshicon: {
       width: 26,
       height: 26,
       marginLeft: 10,
   },
   textinput: {
       borderWidth: 1,
       borderColor: 'lightgray',
       marginTop: 10,
       marginBottom: 5,
        borderRadius: 25,
       width: '90%',
       height: 50,
        backgroundColor:'#fff',
      },
    todoview: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: Colors.lightgrey,
        borderRadius: 20
    },
    overdue: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginLeft: 15,
        borderRadius: 20
    },
    overduetext: {
        fontSize: 16,
        color: Colors.white
       },
    bottomview: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 42,
        backgroundColor: Colors.skyblue,
        justifyContent: 'center',
        alignItems: 'center'
    },  
})
