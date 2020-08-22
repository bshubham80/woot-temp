import React from 'react';
import { View, Text, TouchableOpacity, AsyncStorage, ScrollView, Image,Linking } from 'react-native';
import Styles from './Styles';
import Colors from '../Config/Colors';
import Toast from 'react-native-simple-toast';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import Modal from "react-native-modal";

const appurl = 'https://appstoreconnect.apple.com/WebObjects/iTunesConnect.woa/ra/ng/app/1514735052';

export default class Drawer extends React.Component {

    state={
        username:'',
        name: '',
        isModalVisible: false,
        ModalVisible: false,
    }

    _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });
  
    _toggleModallogout = () =>{
    this.setState({ 
      ModalVisible: !this.state.ModalVisible,
      isModalVisible: false
     });
     }
     getlogout = () => {
        this.setState({ 
          ModalVisible: !this.state.ModalVisible,
         });
        setTimeout(() => {
          AsyncStorage.clear();
          this.props.navigation.navigate('Login')  
        }, 100);
       
      }
    componentWillMount = async() =>{
      const email= await  AsyncStorage.getItem('WTUsername')
      const name= await  AsyncStorage.getItem('WTUname')
           this.setState({
               username: email,
               name: name
            })
    }

    render(){
        const { username, name } = this.state;
        return(
            <View style={Styles.container}>
            <View style={Styles.headview}> 
            <Image  style={Styles.logo}
            source={require('..//Images/wobot-logo.png')}></Image>
             <Text style={{ fontSize: 35,marginTop:-20,
          color: '#98A9AE',alignItems: 'center',textAlign:'center'}}>WHITELABEL</Text>
                       <View style={{  width: '100%',  height: 50,marginTop:1,alignItems: 'center',flexDirection: 'row',}}>
                       <View style={{  width: '35%',  height: 50,alignItems: 'flex-end'}}>
                       <Text style={{ fontSize: 11,
          color: '#98A9AE',marginTop:15}}>powered by</Text>
                       </View>
                       <View style={{  width: '65%',  height: 50,alignItems: 'flex-start'}}>
                       <Image  style={{alignSelf: 'flex-start',alignItems: 'flex-start', justifyContent: 'flex-start',alignContent:'flex-start',marginTop:17,}}
             source={require('..//Images/sliderlogo.png')}></Image>
                       </View>

                       </View>

             {/* change Password */}
             <View style={{  width: '100%',  height: 50,marginTop:1,alignItems: 'center',flexDirection: 'row',}}>
             <View style={{  width: '20%',  height: 50,alignItems: 'center',}}>
             <Image  style={{width: 30,
            height: 30, alignSelf: 'center',alignItems: 'center', justifyContent: 'center',alignContent:'center',margin:10,}}
             source={require('..//Images/ic_user_gray.png')}></Image>
             </View>
             {/* <TouchableOpacity onPress={()=>  this.props.navigation.navigate('Home')}> */}
             <View style={{  width: '150%',  height: 50,alignItems: 'flex-start',}}>
             <Text style={{ fontSize: 15,
          color: 'black',marginTop:15}}>{name}({username})</Text>
             </View>
             {/* </TouchableOpacity> */}
             </View>
            </View>
             <View style={{  width: '100%',  height: 0.5,marginTop:1,alignItems: 'center',flexDirection: 'row',backgroundColor:'gray',marginBottom:20,}}>
             </View>
             {/* Report Section */}
             {username === 'cmp828' ? ( <View style={{  width: '100%',  height: 50,marginTop:1,alignItems: 'center',flexDirection: 'row',}}>
             <View style={{  width: '20%',  height: 50,alignItems: 'center',}}>
             <Image  style={{width: 30,
            height: 30, alignSelf: 'center',alignItems: 'center', justifyContent: 'center',alignContent:'center',margin:10,}}
             source={require('..//Images/file-icon.png')}></Image>
             </View>
             <TouchableOpacity onPress={()=> this.props.navigation.navigate('reportView')}>
             <View style={{  width: '150%',  height: 50,alignItems: 'flex-start',}}>
             <Text style={{ fontSize: 16,
          color: 'black',marginTop:15}}>Report</Text>
             </View>
             </TouchableOpacity>
             </View> ) : null}

             {/* change Password */}
             <View style={{  width: '100%',  height: 50,marginTop:1,alignItems: 'center',flexDirection: 'row',}}>
             <View style={{  width: '20%',  height: 50,alignItems: 'center',}}>
             <Image  style={{width: 30,
            height: 30, alignSelf: 'center',alignItems: 'center', justifyContent: 'center',alignContent:'center',margin:10,}}
             source={require('..//Images/ic_change_password.png')}></Image>
             </View>
             <TouchableOpacity onPress={()=> this.props.navigation.navigate('ChangePassword')}>
             <View style={{  width: '150%',  height: 50,alignItems: 'flex-start',}}>
             <Text style={{ fontSize: 16,
          color: 'black',marginTop:15}}>Change Password</Text>
             </View>
             </TouchableOpacity>
             </View>
             {/* Rate Us */}
             <View style={{  width: '100%',  height: 50,marginTop:1,alignItems: 'center',flexDirection: 'row',}}>
             <View style={{  width: '20%',  height: 50,alignItems: 'center',}}>
             <Image  style={{width: 30,
            height: 30, alignSelf: 'center',alignItems: 'center', justifyContent: 'center',alignContent:'center',margin:10,}}
             source={require('..//Images/ic_rate_us.png')}></Image>
             </View>
             <TouchableOpacity onPress={()=> Linking.openURL(appurl)}>
             <View style={{  width: '150%',  height: 50,alignItems: 'flex-start',}}>
             <Text style={{ fontSize: 16,
          color: '#black',marginTop:15}}>Rate us</Text>
             </View>
             </TouchableOpacity>
             </View>

             {/* Log Out */}
             <View style={{  width: '100%', height: 50,marginTop:1,alignItems: 'center',flexDirection: 'row',}}>
             <View style={{  width: '20%' , height: 50,alignItems: 'center',}}>
             <Image  style={{width: 30,
            height: 30, alignSelf: 'center',alignItems: 'center', justifyContent: 'center',alignContent:'center',margin:10,}}
             source={require('..//Images/ic_logout.png')}></Image>
             </View>
             <TouchableOpacity  onPress={this._toggleModallogout}>
             <View style={{  width: '150%',  height: 50,alignItems: 'flex-start',}}>
             <Text style={{ fontSize: 16,
          color: 'black',marginTop:15}}>Logout</Text>
             </View>
             </TouchableOpacity>
             </View>

             <Dialog visible={this.state.ModalVisible} 
       dialogStyle={{borderRadius: 2, padding: 10,}}>
        <View>
        <Text style={{
        fontSize: 16,
        color: '#6f7c80',
    }}>Do you want to logout?</Text>
        <View style={[{
        flexDirection: 'row',
        width: '100%',
      },{marginTop: 10,marginLeft: 200}]}>
        <TouchableOpacity onPress={this._toggleModallogout}>
              <Text style={{
        fontSize: 16,
        color: '#6f7c80',
        margin: 5
    }}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getlogout}>
            <Text style={[{
        fontSize: 16,
        color: '#6f7c80',
        margin: 5
    },{marginLeft: 10}]}>Yes</Text>
          </TouchableOpacity>
          </View>
        </View>
      </Dialog>
             

            </View>
        )
    }

}