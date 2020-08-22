import React from "react";
import {
  View,
  Text,
  AsyncStorage,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./Styles";
import axios from "axios";
import { SERVER_URL } from "../../../Config/Constants";
import Toast from "react-native-simple-toast";

import Colors from "../../../Config/Colors";
const commonHtml = `${"Enter your"} ${" "}`;
export default class Forgot extends React.Component {
    state = {
        jobheading: "",
    }
  getLogin = () => {
    this.props.navigation.navigate("Login");
  };

  sentMail = async () => {
    this.setState({ isFetching: true });
    const url = SERVER_URL;
    const data = await axios({
      method: "POST",
      url,
      headers: { "Content-Type": "application/json" },
      data: {
        action: "forgotPassword",
        detail: this.state.jobheading,
      },
    });
    Toast.show(data.data.message);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainview}>
          <Image
            style={styles.logo}
            source={require("../../../Images/wobot-logo.png")}
          ></Image>
          <Text style={styles.headingText}>Forgot Password ? </Text>
          {/* <Text style={styles.heading}>Enter your Username/Emil/Mobile</Text> */}
          <Text style={styles.heading}>
            <Text style={styles.headingMob}>Username / Email / Mobile</Text>
          </Text>
          <Text style={styles.heading}>
            detail below to reset your password.{" "}
          </Text>

          <TextInput
            placeholder="Username / Email / Mobile"
            placeholderTextColor={Colors.textcolor}
            onChangeText={(text) => this.setState({ jobheading: text })}
            style={styles.textinput}
          ></TextInput>
          <View style={styles.buttonview}>
            <TouchableOpacity onPress={this.getLogin}>
              <View style={styles.button}>
                <Text style={styles.buttontext}>Cancel</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.sentMail}>
              <View style={styles.button}>
                <Text style={styles.buttontext}>Update</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
