import React, { Component } from 'react';
import styles from './Styles';
import { View, Text, AsyncStorage, TouchableOpacity, FlatList, Image, NetInfo ,ActivityIndicator,SafeAreaView} from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import { withNavigation } from 'react-navigation';
import WKWebView from 'react-native-wkwebview-reborn';

 export default class TickitingScreen extends Component {
  //  class TickitingScreen extends Component {
  state={
    userId: '',
    weblink:'',
  }
  constructor(props){
    super(props);
}
componentWillMount = async() =>{
  const video_url=await AsyncStorage.getItem('video_url')
  this.setState({
       video_url:video_url,
     })
}

  backHome=()=> {
     this.props.navigation.navigate('TaskDetail');
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
      <Text style={styles.tooltext}>Wobot</Text>
      </View>
    </View>
    <WKWebView
                 javaScriptEnabled={true}
                 domStorageEnabled={true}
                 fullscreen={true}
                 paused={true}
                 useWebKit={true}
                 bounces={false}
                 scrollEnable={false}
                 allowsInlineMediaPlayback={false}
                 source={{ uri: this.state.video_url }}
                 
        /> 

      </View>
      </SafeAreaView>
    );
  }
}
