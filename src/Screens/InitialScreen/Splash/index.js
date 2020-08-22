import React from 'react';
import { View, Text, AsyncStorage, Image, ImageBackground} from 'react-native';
import styles from './Styles';
import Loader from '../../../Components/Loader';

export default class Splash extends React.Component{
   
    componentDidMount = async() =>{
          const WTauthKey= await AsyncStorage.getItem('WTauthKey')
        setTimeout(()=>{
            if (WTauthKey == '' || WTauthKey == null) {
                this.props.navigation.navigate('Login')
            } else {
                this.props.navigation.navigate('Home')
            }
       
        },1500)
    }
render(){
    return(
        <View style={styles.container}>
        <Image   style={styles.logo}
         source={require('../../../Images/new_splash.png')}></Image>
        </View>
    )
}
}