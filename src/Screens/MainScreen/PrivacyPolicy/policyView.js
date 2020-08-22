import React, { Component } from 'react';
import styles from './Styles';
import { View, Text, TouchableOpacity, Image ,ActivityIndicator,SafeAreaView} from 'react-native';
import WKWebView from 'react-native-wkwebview-reborn';

import { Toolbar } from 'react-native-material-ui';
import { withNavigation } from 'react-navigation';

 export default class PrivacyPolicy extends Component {
  constructor(props){
    super(props);
}


  backHome=()=> {
     this.props.navigation.navigate('Login');
   }
   
  _loadingView = () => <ActivityIndicator size="large" style={{ flex: 1 }} />;

  render() {
     
    return (
      <SafeAreaView style={{
        flex: 1,
      }}>
      <View style={styles.container}>
      <View style={styles.toolbar}>
      <View style={styles.sidebarview}>
      <TouchableOpacity onPress={this.backHome}>
      <Image style={styles.sidebaricon} source={require('../../../Images/back.png')}></Image>
      </TouchableOpacity>
      </View>
      <View style={styles.tooltextview}>
      <Text style={styles.tooltext}>Privacy Policy</Text>
      </View>
    </View>
      <WKWebView
source={{
  uri: 'http://wobot.ai/Wobot-Privacy-Policy-28th-March-2019.pdf',
}}        style={{ backgroundColor: '#fff', flex: 1 }}
        renderLoading={() => this._loadingView()}
        startInLoadingState
        bounces={true}
            useWebKit={true}
            scrollEnabled={true}
      />
      </View>
      </SafeAreaView>
    );
  }
}
