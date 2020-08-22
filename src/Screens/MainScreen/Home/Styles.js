import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Config/Colors';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#E12F5B',
    },
   itemview: {
       marginHorizontal: 20,
       marginVertical: 10,
       flexDirection: 'row',
       borderRadius: 4,
       backgroundColor:'blue',
   },
   openview: {
       width: '25%',
       height: 180,
       backgroundColor: Colors.royalblue,
       alignItems: 'center'
   },
   backView:
   {
    marginTop:20,
    width: '100%',
    height: 600,
    backgroundColor: '#FDFDFD',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius :30,
   },
   backtext:{
    width: "100%",
    height: 30,
    marginLeft: 50,
    marginTop: 20,
  },
  backtex:{ fontSize: 25, marginLeft: -50, color: "#073B4C",fontFamily:'Avenir-Book', },
   openviewno: {
    width: '75%',
    height: 180,
    backgroundColor: Colors.lightgrey,
    alignItems: 'center',
    justifyContent: 'center'
},
testxTodo:{ fontSize: 15, color: "#6F7C80" ,fontFamily:'Avenir-Book',},
    closedview: {
        width: '25%',
        height: 180,
        backgroundColor: Colors.grey,
        alignItems: 'center'
    },
    closedviewno: {
    width: '75%',
    height: 180,
    backgroundColor: Colors.lightgrey,
    alignItems: 'center',
    justifyContent: 'center'
    },
   itemheader: {
       fontSize: 18,
       fontWeight: 'bold',
       color: Colors.black
   },
   openView:{
    width: "95%",
    height: 110,
    margin: 20,
    backgroundColor: "white",
    shadowColor: Colors.black,
    borderWidth: 0.1,
    borderRadius:5,
    borderColor: Colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    alignItems: "center",
    flexDirection: "row",
  },
  view1:{
    width: "95%",
    height: 110,
    flexDirection: "row",
    alignItems: "center",
    borderRadius:5,
  },
  view2:{
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "20%",
    height: 110,
  },
  view3:{
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "80%",
    height: 110,
    borderRadius:5,
  },
  image1:{
    width: 25,
    height: 25,
    position: "absolute",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 20,
  },
   itemsubheader: {
    fontSize: 18,
    color: Colors.white,
    marginTop: 25
   },
   text3:{
    fontSize: 18,
    color: "#073B4C",
    marginTop: 20,
    fontFamily:'Avenir-Book',
  },
  mainView:{
    width: "95%",
    height: 110,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "white",
    shadowColor: Colors.black,
    borderWidth: 0.1,
    borderColor: Colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderRadius:5,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    alignItems: "center",
    flexDirection: "row",
  },
  ineerView:{
    width: "95%",
    height: 110,
    flexDirection: "row",
    alignItems: "center",
    borderRadius:5,
  },
  textView:{
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "20%",
    height: 110,
  },
  view4:{
    width: 25,
    height: 25,
    position: "absolute",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 20,
  },
  view5:{
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "80%",
    height: 110,
    borderRadius:5,
  },
  view6:{
    width: "95%",
    height: 150,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#F7F9F9",
    alignItems: "center",
    flexDirection: "row",
    borderRadius:5,
  },
  view7:{
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "45%",
    height: 150,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: "#fff",
    shadowColor: Colors.black,
    borderWidth: 0.1,
    borderColor: Colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    borderRadius:5,
  },
  view8:{
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "45%",
    height: 150,
    borderRadius:5,
  },
  image2:{
    width: 25,
    height: 25,
    position: "absolute",
    alignSelf: "center",
    marginTop:5,
  },
  text4:{
    fontSize: 18,
    color: "#073B4C",
    marginTop: 90,
    textAlign: "left",
    marginLeft: 20,
    fontFamily:'Avenir-Book',
  },
  text5:{
    fontSize: 15,
    color: "#6F7C80",
    marginTop: 5,
    textAlign: "left",
    marginLeft: 20,
    marginBottom: 10,
    width:70,
    fontFamily:'Avenir-Book',
  },
  view9:{
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "47%",
    height: 150,
    backgroundColor: "white",
    shadowColor: Colors.black,
    borderWidth: 0.1,
    borderColor: Colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    borderRadius:5,
  },
  text6:{
    fontSize: 18,
    color: "#073B4C",
    marginTop: 90,
    textAlign: "left",
    marginLeft: 20,
    fontFamily:'Avenir-Book',
  },
  doView1:{
    borderRadius: 2,
    marginHorizontal: 30,
    padding: 10,
  },
  text7:{
    fontSize: 15,
    color: "#6F7C80",
    marginTop: 5,
    textAlign: "left",
    width: 130,
    marginLeft: 20,
    fontFamily:'Avenir-Book',
  },
  image3:{
    width: 25,
    height: 25,
    position: "absolute",
    alignSelf: "center",
    marginTop:5,
  },
  view10:{
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "47%",
    height: 150,
    borderRadius:5,
  },
  viewMore:{
     fontSize: 15,
     color: "#073B4C",
     marginTop: 10,
     textAlign: "right",
     marginBottom: 10,
     marginLeft:265,
     fontFamily:'Avenir-Book',
  },
  textHeader:{ fontSize: 14, color: "#6F7C80", marginTop: 5 ,fontFamily:'Avenir-Book',},
   toolbar: {
    backgroundColor: '#E12F5B',
    height: 70,
    paddingHorizontal: 16,
    paddingVertical: 28,
    flexDirection: 'row',
    width:'100%',
    marginBottom: 10
   },
   sidebarview: {
    width: '42%',
  },
   sidebaricon: {
       width: 26,
       height: 26
   },
  
   smalllogo: {
    width: 50,
    height: 20,
    alignSelf: 'center',
    marginTop: 8,
    tintColor:'white'
    },  
   bellicon: {
       width: 30,
       height: 30,
      
   },
   dots: {
    width: 12,
    height: 26,
  
},
dotview: {
    position: 'absolute',
    right: 15,
    top: 26
},
nocircle: {
  width: 70,
  height: 70,
  borderRadius: 70,
  backgroundColor: Colors.grey,
  alignItems: 'center',
  justifyContent: 'center'
},
nocirclewhite: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: Colors.lightgrey,
    alignItems: 'center',
  justifyContent: 'center'
  },
  lockicon: {
      width: 36,
      height: 36,
      position: 'absolute',
      bottom: 20
  },
  bellview: {
    position: 'absolute',
    right: 10,
    top: 25
  },
  addiconview: {
    position: 'absolute',
    right: 20,
    bottom: 20
  },
  modal: {
      width: 210,
      height: 100, 
      backgroundColor: Colors.white, 
      position: 'absolute', 
      right: 0, 
      top: 40,
      paddingHorizontal: 15,
      paddingVertical: 10
    },
    itemsubview: {
        flexDirection: 'row',
        width: '100%',
      },
      modaltext: {
          fontSize: 16,
          color: Colors.black,
          marginLeft: 20
      },
      modallogouttext: {
        fontSize: 16,
        color: Colors.skyblue,
        margin: 5
    },
    logoutmodal: {
        width: 240,
        height: 100, 
        backgroundColor: Colors.white, 
        position: 'absolute', 
        right: Dimensions.get('window').width/5, 
        top: Dimensions.get('window').height/3,
        paddingHorizontal: 15,
      },
      logoutmodaltext: {
        fontSize: 16,
        color: Colors.primary,
    },
})

