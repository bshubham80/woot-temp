import React from "react";
import {
  View,
  Text,
  Image,
  AsyncStorage,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  NetInfo,
  SafeAreaView,
} from "react-native";
import styles from "./Styles";
import Colors from "../../../Config/Colors";
import Toast from "react-native-simple-toast";
import Icon from "react-native-vector-icons/Ionicons";
import { changePassword } from "../../../Redux/Actions/Password";
import { connect } from "react-redux";
import propTypes from "prop-types";
import Loader from "../../../Components/Loader";

class ChangePassword extends React.Component {
  state = {
    currentpassword: "",
    newpassword: "",
    confirmpassword: "",
    currentPasswordicon: true,
    newPasswordicon: true,
    confirlPasswordicon: true,
  };
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Change password",
    drawerLabel: "Change password",
    headerTintColor: Colors.white,
    headerTitleStyle: {
      marginLeft:-60,
    },
    headerStyle: {
       backgroundColor: Colors.skyblue,
       height:60,
       borderBottomColor: Colors.skyblue,
    },
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image
          style={{ width: 22, height: 22, marginLeft: 20 }}
          source={require("../../../Images/backwhitearrow.png")}
        ></Image>
      </TouchableOpacity>
    ),
  });
  goRegister = () => {
    const { currentpassword, newpassword, confirmpassword } = this.state;
    if (currentpassword == "" || newpassword == "" || confirmpassword == "") {
      Toast.show("All Field is mandatory", Toast.SHORT);
    } else if (newpassword != confirmpassword) {
      Toast.show("Password and confirm password must be same", Toast.SHORT);
    } else {
      if (NetInfo.isConnected) {
        this.props.changePassword(currentpassword, newpassword);
      } else {
        Toast.show("Please check your connectivity");
      }
    }
  };

  componentWillReceiveProps = (nextprops) => {
    console.log(nextprops);
    try {
      if (nextprops.Response.Password.isFetching == false) {
        if (nextprops.Response.Password.response.data.status == 1) {
          Toast.show(nextprops.Response.Password.response.data.message);
          AsyncStorage.clear();
          this.props.navigation.navigate("Login");
        } else {
          Toast.show(nextprops.Response.Password.response.data.message);
        }
      }
    } catch (error) {
      Toast.show("Error " + error);
    }
  };
  managePasswordVisibility = () => {
    this.setState({ currentPasswordicon: !this.state.currentPasswordicon });
  };
  managePasswordVisibility1 = () => {
    this.setState({ newPasswordicon: !this.state.newPasswordicon });
  };
  managePasswordVisibility2 = () => {
    this.setState({ confirlPasswordicon: !this.state.confirlPasswordicon });
  };
  render() {
    if (this.props.Response.Password.isFetching) {
      return <Loader />;
    }
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.skyblue,
        }}
      >
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.mainview}>
              <View
                style={{
                  marginTop: 20,
                  width: "100%",
                  height: 600,
                  backgroundColor: "#F7F9F9",
                  alignItems: "center",
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: "#6F7C80",
                    marginTop: 40,
                    marginLeft: 20,
                    marginRight: 20,
                    marginBottom: 30,
                    fontFamily:'Avenir-Book',

                  }}
                >
                  Choose a strong password that's memorable to you but nearly
                  impossible for someone else to  guess. Once you set it keep it
                  safe.
                </Text>

                <View
                  style={{
                    position: "relative",
                    alignSelf: "stretch",
                    justifyContent: "center",
                    marginLeft: 20,
                    marginRight: 20,
                    marginBottom: 10,
                    borderRadius:5,
                    borderWidth: 1,
                    borderColor: "#BED8D4",
                  }}
                >
                  <TextInput
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#6F7C80"
                    placeholder="Current password"
                    onChangeText={(text) =>
                      this.setState({ currentpassword: text })
                    }
                    placeholderTextColor="#6F7C80"
                    secureTextEntry={this.state.currentPasswordicon}
                    style={{
                      fontSize: 16,
                      padding: 15,
                      backgroundColor: "#fff",
                      marginBottom: 1,
                      borderRadius:5,
                    }}
                  />
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                      position: "absolute",
                      right: 3,
                      height: 50,
                      width: 35,
                      padding: 5,
                    }}
                    onPress={this.managePasswordVisibility}
                  >
                    <Image
                      source={
                        this.state.currentPasswordicon
                          ? require("../../../Images/ic_eye_open.png")
                          : require("../../../Images/ic_eye_close.png")
                      }
                      style={{
                        resizeMode: "contain",
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    position: "relative",
                    alignSelf: "stretch",
                    justifyContent: "center",
                    marginLeft: 20,
                    marginRight: 20,
                    borderWidth: 1,
                    borderColor: "#BED8D4",
                    marginBottom: 10,
                    borderRadius:5,
                  }}
                >
                  <TextInput
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#6F7C80"
                    placeholder="New password"
                    onChangeText={(text) =>
                      this.setState({ newpassword: text })
                    }
                    placeholderTextColor="#6F7C80"
                    secureTextEntry={this.state.newPasswordicon}
                    style={{
                      fontSize: 16,
                      padding: 15,
                      backgroundColor: "#fff",
                      marginBottom: 1,
                      borderRadius:5,
                    }}
                  />
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                      position: "absolute",
                      right: 3,
                      height: 50,
                      width: 35,
                      padding: 5,
                    }}
                    onPress={this.managePasswordVisibility1}
                  >
                    <Image
                      source={
                        this.state.newPasswordicon
                          ? require("../../../Images/ic_eye_open.png")
                          : require("../../../Images/ic_eye_close.png")
                      }
                      style={{
                        resizeMode: "contain",
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    position: "relative",
                    alignSelf: "stretch",
                    justifyContent: "center",
                    marginLeft: 20,
                    marginRight: 20,
                    borderWidth: 1,
                    borderColor: "#BED8D4",
                    marginBottom: 10,
                    borderRadius:5,
                  }}
                >
                  <TextInput
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#6F7C80"
                    placeholder="Confirm new password"
                    onChangeText={(text) =>
                      this.setState({ confirmpassword: text })
                    }
                    placeholderTextColor="#6F7C80"
                    secureTextEntry={this.state.confirlPasswordicon}
                    style={{
                      fontSize: 16,
                      padding: 15,
                      backgroundColor: "#fff",
                      marginBottom: 1,
                      borderRadius:5,
                    }}
                  />
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                      position: "absolute",
                      right: 3,
                      height: 50,
                      width: 35,
                      padding: 5,
                    }}
                    onPress={this.managePasswordVisibility2}
                  >
                    <Image
                      source={
                        this.state.confirlPasswordicon
                          ? require("../../../Images/ic_eye_open.png")
                          : require("../../../Images/ic_eye_close.png")
                      }
                      style={{
                        resizeMode: "contain",
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={this.goRegister}>
                  <View style={styles.button}>
                    <Text style={styles.buttontext}>Change password</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

ChangePassword.propTypes = {
  changePassword: propTypes.func.isRequired,
  Response: propTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    Response: state,
  };
};

const dispatchStateToProps = { changePassword };

export default connect(mapStateToProps, dispatchStateToProps)(ChangePassword);
