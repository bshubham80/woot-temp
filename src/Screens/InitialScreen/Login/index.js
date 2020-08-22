import React from 'react';
import { View, Text, AsyncStorage, TextInput, TouchableOpacity, Image, NetInfo ,Platform,Linking} from 'react-native';
import styles from './Styles';
import Colors from '../../../Config/Colors';
import Toast from 'react-native-simple-toast';
import Loader from '../../../Components/Loader';
// import test from '../../../Config/WobotButton/RBButton';

import { connect } from 'react-redux';
import { userLogin } from '../../../Redux/Actions/Auth';
import propTypes from 'prop-types';
const appurl = 'http://wobot.ai/Wobot-Privacy-Policy-28th-March-2019.pdf';
class Login extends React.Component{
    state={
        username: '',
        password: '',
        hidePassword: true,
    }
    getSignin = () => {
        const { username, password } = this.state;
        if (username == '' || password == '') {
            Toast.show('Please enter credentials')
        } else {
           if (NetInfo.isConnected) {
            this.props.userLogin(username,password) 
           } else {
            Toast.show('Please check your connectivity') 
           }
            
        }
       
    }
    managePasswordVisibility = () =>
    {
      this.setState({ hidePassword: !this.state.hidePassword });
    }
    componentWillReceiveProps = (nextprops)=>{
     console.log(nextprops)
     try {

        if(nextprops.Response.Auth.isFetching == false){
            if (nextprops.Response.Auth.response.data.status == 1) {
               
               AsyncStorage.setItem('WTUsername',nextprops.Response.Auth.response.data.user[0].username)
               AsyncStorage.setItem('WTappId',nextprops.Response.Auth.response.data.user[0].appId)
               AsyncStorage.setItem('WTauthKey',nextprops.Response.Auth.response.data.user[0].authKey)
               AsyncStorage.setItem('WTUroleid',nextprops.Response.Auth.response.data.user[0].role_id)
               AsyncStorage.setItem('WTUname',nextprops.Response.Auth.response.data.user[0].name)
               Toast.show(nextprops.Response.Auth.response.data.message)
               this.props.navigation.navigate('Home')
            } else {
               Toast.show(nextprops.Response.Auth.response.data.message)
            }
            }
         
     } catch (error) {
        Toast.show('Error '+error) 
     }
    }
  
    getForgot = () => {
        this.props.navigation.navigate('Forgot')
    }
render(){
     if(this.props.Response.Auth.isFetching){
         return(
             <Loader/>
         )
     }
    return(
        <View style={styles.container}>
        <View style={styles.mainview}>
        <Text style={styles.buttontextlogo}>Login</Text>
        <TextInput 
         placeholder='Employee ID' 
         inlineImageLeft='user'
         inlineImagePadding= {50}
         placeholderTextColor= '#6F7C80'
         onChangeText={text=> this.setState({username: text})}
         style={styles.textinput}></TextInput>

      {/* <View style = { {
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0 } }> */}
        <View style = { {
    flex: 1,}}>
        <View style = { { position: 'relative', alignSelf: 'stretch', justifyContent: 'center'} }>
          <TextInput underlineColorAndroid = "transparent"  placeholderTextColor= '#6F7C80' placeholder='Password' onChangeText={text=> this.setState({password: text})}  placeholderTextColor= '#6F7C80'  secureTextEntry = { this.state.hidePassword } style = { {fontSize: 16,padding: 15, backgroundColor: '#fff', marginBottom:1,
  } }/>
          <TouchableOpacity activeOpacity = { 0.8 } style = { { position: 'absolute',right: 3,height: 40,width: 35,padding: 5,} } onPress = { this.managePasswordVisibility }>
          <Image source = { ( this.state.hidePassword ) ? require('../../../Images/ic_eye_open.png') : require('../../../Images/ic_eye_close.png') } style = { {
    resizeMode: 'contain',height: '100%',width: '100%'} } />
          </TouchableOpacity>
        </View>
      </View>

        <TouchableOpacity onPress={this.getSignin}>
        <View style={styles.button}>
        <Text style={styles.buttontext}>Login</Text>
        </View>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={this.getForgot}>
        <Text style={styles.forgottext}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> Linking.openURL(appurl)}>
        <Text style={styles.privacyPolicytext}>Privacy Policy</Text>
        </TouchableOpacity>
        </View>
        </View>
    )
}
}

Login.propTypes ={
    userLogin: propTypes.func.isRequired,
    Response: propTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return{
    Response: state
   }
}

const dispatchStateToProps = {userLogin}

export default connect(mapStateToProps,dispatchStateToProps)(Login)