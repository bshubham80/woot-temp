import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../Config/Colors';

export default StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor:'#F7F9F9'
    },
    headview: {
    backgroundColor: '#F7F9F9'
    },
    menuview:{ 
        flexDirection: 'row',
        padding: 10,
        marginLeft: 10,
        marginTop:10
    },
    menutext: { 
        marginLeft: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.primary
     },
     header:{
         marginLeft: 20,
         marginVertical: 30,
         color: Colors.black,
         fontSize: 20,
         fontWeight: 'bold'
     },
     modallogouttext: {
        fontSize: 16,
        color: Colors.skyblue,
    },
    itemsubview: {
        flexDirection: 'row',
        width: '100%',
      },
      logoutmodaltext: {
        fontSize: 16,
        color: Colors.primary,
    },
     logo: {
        width: 180,
        height: 50,
        marginTop: 50,
        marginLeft: 20,
        marginBottom:20
        },
        smalllogo: {
            width: 60,
            height: 25,
            },   
})