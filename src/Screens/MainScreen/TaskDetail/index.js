import React from 'react';
import Colors from '../../../Config/Colors';
import { createMaterialTopTabNavigator } from 'react-navigation';

import DetailScreen from '../Detail';
import CommentScreen from '../Comment';
import FileScreen from '../File';
import Home from '../Home';

  export default createMaterialTopTabNavigator({
    Details: DetailScreen,
    Activity: CommentScreen,
    Files: FileScreen
  },{
    initialRouteName: 'Details',
    tabBarOptions: {
      indicatorStyle: { backgroundColor: '#fff'},
      labelStyle: { textTransform: 'capitalize',color:'#fff',fontSize: 16, fontFamily:'Avenir-Book',},
      style: {backgroundColor: '#E12F5B',},
    },
    activeBackgroundColor :'green',
  },
);