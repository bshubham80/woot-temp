import React from "react";
import {
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  Animated,
  ScrollView,
  PermissionsAndroid,
  Dimensions,
} from "react-native";
import WKWebView from 'react-native-wkwebview-reborn';
import Video from "react-native-video";
import DialogInput from "react-native-dialog-input";
import styles from "./Styles";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../../../Config/Colors";
import { createMaterialTopTabNavigator } from "react-navigation";
import ImagePicker from "react-native-image-picker";
import Toast from "react-native-simple-toast";
import moment from "moment";
import Styles from "./Styles";
import RNFS from "react-native-fs";
import axios from "axios";
import { SERVER_URL } from "../../../Config/Constants";
import {
  DocumentPicker,
  DocumentPickerUtil,
} from "react-native-document-picker";
import RNPickerSelect from "../../../Components/picker";
import FileViewer from "react-native-file-viewer";
import Moment from "moment";
import { connect } from "react-redux";
import propTypes from "prop-types";
import Hyperlink from "react-native-hyperlink";

const windowHeight = Dimensions.get("window").height;
// console.warn('iphqone___',windowHeight);
var id = 0;
var messagesarray = [];

const options = {
  title: "Capture Image",
};
var path = RNFS.ExternalStorageDirectoryPath + "/WobotTicketing";
export default class DetailScreen extends React.Component {
  state = {
    id: "",
    status: "",
    color: "",
    time_status_text: "",
    title: "",
    region: "",
    city: "",
    issue: "",
    subissue: "",
    tag: "",
    start_date: "",
    selectstatus: "",
    remarks: "",
    comment: "",
    executives: "",
    TaskType1: "",
    isDialogVisible: false,
    isAlertVisible: false,
    pickeritem: [
      {
        label: "To Do",
        value: "1",
      },
      {
        label: "Closed",
        value: "2",
      },
    ],
  };

  // componentWillMount = async () => {
  //   const {
  //     navigation: { getParam }
  //   } = this.props;

  //   console.warn('Hello_____', navigation);
  //   const Id = getParam("jobID");
  //   const status = getParam("jobstatus");
  //   const color = getParam("jobcolor");
  //   const jobtime_status_text = getParam("jobtime_status_text");
  //   const title = getParam("jobtitle");
  //   const region = getParam("jobregion");
  //   const city = getParam("jobcity");
  //   const issue = getParam("jobissue");
  //   const subissue = getParam("jobsubissue");
  //   const tag = getParam("jobtag");
  //   const jobstart_date = getParam("jobstart_date");
  //   const jobremarks = getParam("jobremarks");
  //   const jobname = getParam("jobname");

  //   let jobstatus = "";
  //   console.log(status);
  //   if (status == "To Do") {
  //     jobstatus = "1";
  //   }
  //   console.log("Id : " + Id);
  //   this.setState({
  //     id: Id,
  //     status: status,
  //     color: color,
  //     time_status_text: jobtime_status_text,
  //     title: title,
  //     region: region,
  //     city: city,
  //     issue: issue,
  //     subissue: subissue,
  //     tag: tag,
  //     start_date: jobstart_date,
  //     remarks: jobremarks,
  //     selectstatus: jobstatus,
  //     executives: jobname
  //   });
  // };
  componentWillMount = async () => {
    const Id = await AsyncStorage.getItem("jobID");
    const status = await AsyncStorage.getItem("jobstatus");
    const color = await AsyncStorage.getItem("jobcolor");
    const jobtime_status_text = await AsyncStorage.getItem(
      "jobtime_status_text"
    );
    const title = await AsyncStorage.getItem("jobtitle");
    const region = await AsyncStorage.getItem("jobregion");
    const city = await AsyncStorage.getItem("jobcity");
    const issue = await AsyncStorage.getItem("jobissue");
    const subissue = await AsyncStorage.getItem("jobsubissue");
    const tag = await AsyncStorage.getItem("jobtag");
    const jobstart_date = await AsyncStorage.getItem("jobstart_date");
    const jobremarks = await AsyncStorage.getItem("jobremarks");
    const jobname = await AsyncStorage.getItem("jobname");
    const image_url = await AsyncStorage.getItem("image_url");
    const video_url = await AsyncStorage.getItem("video_url");
    const is_assigned = await AsyncStorage.getItem("is_assigned");
    const TaskTypepress = await AsyncStorage.getItem("TaskType");
    console.warn("test data ", await AsyncStorage.getItem("TaskType"));
    const creater_change_status = await AsyncStorage.getItem(
      "creater_change_status"
    );
    const created_by = await AsyncStorage.getItem("created_by");
    const WTappId = await AsyncStorage.getItem("WTappId");

    let jobstatus = "";
    if (status == "To Do") {
      jobstatus = "1";
    }
    console.log("Id : " + Id);
    this.setState({
      id: Id,
      status: status,
      color: color,
      time_status_text: jobtime_status_text,
      title: title,
      region: region,
      city: city,
      issue: issue,
      subissue: subissue,
      tag: tag,
      start_date: jobstart_date,
      remarks: jobremarks,
      selectstatus: jobstatus,
      executives: jobname,
      image_url: image_url,
      video_url: video_url,
      is_assigned: is_assigned,
      creater_change_status: creater_change_status,
      created_by: created_by,
      AppId: WTappId,
      TaskType1: TaskTypepress,
    });
  };
  submit(inputText) {
    console.warn(inputText);
    this.setState({ isAlertVisible: false ,comment: inputText});
  }

  submitData(inputText) {
    console.warn(inputText);
    // this.changeStatus;
  }
  sendInput(inputText)
  {
    this.setState({ comment: inputText});

    if (inputText === "" )
    {
       Toast.show("Please Enter description of action taken");   

     }
     else
     {
      // this.setState({ comment: inputText});
      this.setState({comment: inputText}, function () {
        this.changeStatusOpenApi();
      });
      this.setState({ isDialogVisible: false});
      Toast.show("Status Changed Successfully");
      this.props.navigation.navigate("Home");
      
      // console.warn('NOOO_______',inputText);
     }
    // console.warn('sumbit data__',inputText,);
  }

  showDialog()
  {
   console.warn('Presss_______');
   this.setState({ popisVisial: false});
  }
  handlePassword = (text) => {
    this.setState({ comment: text.trim() });
  };
  changeStatus = async () => {
    // this.setState({ isDialogVisible: true});
    {this.state.TaskType1 === "Open" ||
    this.state.TaskType1 === "Overdue"
      ? this.setState({ isDialogVisible: true,})
      : this.setState({ isDialogVisible: false,})}

    const TaskType = await AsyncStorage.getItem("TaskType");
    this.setState({ isAlertVisible: true });
    const { selectstatus, id ,comment} = this.state;

    console.warn("selectstatus___ ", selectstatus,comment);

    if (this.state.TaskType1 === "Open" || this.state.TaskType1 === "Overdue" && this.state.comment === "" )
    {
      // Toast.show("Please Enter description of action taken");   

     }
     else if (this.state.TaskType1 === "Closed")
     {
      this.changeStatusCloseApi();
    }
    
    else {
      const WTappId = await AsyncStorage.getItem("WTappId");
      const WTauthKey = await AsyncStorage.getItem("WTauthKey");
      try {
        const url = SERVER_URL;
        const data = await axios({
          method: "POST",
          url,
          headers: { "Content-Type": "application/json" },
          data: {
            action: "changeStatus",
            job_id: id,
            job_template: "3",
            status: selectstatus,
            comment: this.state.comment,
            appId: WTappId,
            authKey: WTauthKey,
          },
        });

        if (data.data.status == 1) {
          // Toast.show(data.data.message);
          Toast.show("Status Changed Successfully");
          this.props.navigation.navigate("Task");
        } else {
          // Toast.show(data.data.message);
          Toast.show("Status Changed Successfully");
          this.props.navigation.navigate("Home");
        }
      } catch (error) {
        Toast.show("Error : " + error);
      }
    }
  };

  changeStatusOpenApi = async () => {
    console.warn("Data Ander A gaya hai");
    const { selectstatus, id ,comment} = this.state;
     console.warn('comment_____',comment);  
      const WTappId = await AsyncStorage.getItem("WTappId");
      const WTauthKey = await AsyncStorage.getItem("WTauthKey");
      try {
        const url = SERVER_URL;
        const data = await axios({
          method: "POST",
          url,
          headers: { "Content-Type": "application/json" },
          data: {
            action: "changeStatus",
            job_id: id,
            job_template: "3",
            status: "2",
            comment: this.state.comment,
            appId: WTappId,
            authKey: WTauthKey,
          },
        });
        // this.props.navigation.navigate("Task");

        console.warn('DataApi_____',data.data);
        if (data.data.status == 1) {
          // Toast.show(data.data.message);
          // Toast.show("Status Changed Successfully");
          this.props.navigation.navigate("Task");
        } else {
          // Toast.show(data.data.message);
          // Toast.show("Status Changed Successfully");
          this.props.navigation.navigate("Home");
        }
        this.props.navigation.navigate("Home");
      } catch (error) {
        Toast.show("Error : " + error);
      }
    
  };

  changeStatusCloseApi = async () => {
    console.warn("Close data___");
    const { selectstatus, id ,comment} = this.state;

      const WTappId = await AsyncStorage.getItem("WTappId");
      const WTauthKey = await AsyncStorage.getItem("WTauthKey");
      try {
        const url = SERVER_URL;
        const data = await axios({
          method: "POST",
          url,
          headers: { "Content-Type": "application/json" },
          data: {
            action: "changeStatus",
            job_id: id,
            job_template: "3",
            status: "1",
            comment: "",
            appId: WTappId,
            authKey: WTauthKey,
          },
        });
        this.props.navigation.navigate("Task");

        console.warn('DataApi_____',data.data);
        if (data.data.status == 1) {
          // Toast.show(data.data.message);
          Toast.show("Status Changed Successfully");
          this.props.navigation.navigate("Task");
        } else {
          // Toast.show(data.data.message);
          Toast.show("Status Changed Successfully");
          this.props.navigation.navigate("Home");
        }
        this.props.navigation.navigate("Home");
      } catch (error) {
        Toast.show("Error : " + error);
      }
    
  };

  playvide = () => {
    <WKWebView
      javaScriptEnabled={true}
      domStorageEnabled={true}
      fullscreen={false}
      paused={true}
      useWebKit={false}
      allowsInlineMediaPlayback={false}
      source={{ uri: this.state.video_url }}
    />;
  };
  renderButton = () => {
    // if (this.state.status == "Closed") {
    //   return null;
    // } else {
    return (
      <View style={{ marginLeft: 25, marginRight: 10 }}>
        {/* <View
          style={{
            width: "100%",
          }}
        >
          <View style={styles.pickerViewText}>
            <View style={styles.subView}>
              <RNPickerSelect
                placeholder={{
                  label: "Select Status",
                  value: null,
                }}
                hideIcon={true}
                items={this.state.pickeritem}
                underline={Colors.primary}
                onValueChange={(value) => {
                  this.setState({ selectstatus: value });
                }}
                placeholderTextColor={Colors.textcolor}
                onUpArrow={() => {
                  this.inputRefs.name.focus();
                }}
                onDownArrow={() => {
                  this.inputRefs.picker2.togglePicker();
                }}
                value={this.state.selectstatus}
              />
            </View>
            <View
              style={{
                width: "8%",
              }}
            >
              <Image
                style={styles.imageComment}
                source={require("../../../Images/ic_arrow_expand.png")}
              ></Image>
            </View>
          </View>
        </View> */}
        {this.state.selectstatus === "1" ? (
          // <TextInput
          //   style={{
          //     height: 55,
          //     marginTop: 10,
          //     borderColor: "#BED8D4",
          //     borderWidth: 1,
          //   }}
          //   underlineColorAndroid="transparent"
          //   placeholder="Enter description of action taken here..."
          //   placeholderTextColor="#6f7c80"
          //   value={this.state.comment}
          //   multiline={true}
          //   textAlignVertical="top"
          //   paddingRight={12}
          //   paddingLeft={12}
          //   numberOfLines={10}
          //   // style ={{textAlignVertical : "top"}}
          //   autoCapitalize="none"
          //   onChangeText={this.handlePassword}
          // />
          <DialogInput
            isDialogVisible={this.state.isDialogVisible}
            title={"Change Status"}
            // message={"Message for DialogInput #1"}
            hintInput={"Enter description of action taken here.."}
            submitInput={(inputText) => {
              this.sendInput(inputText);
            }}
            closeDialog={() => {
              //  this.showDialog(true);
              this.setState({ isDialogVisible: false});

            }}
          ></DialogInput>
          
        ) : null}
        <TouchableOpacity onPress={this.changeStatus}>
          <View style={styles.button}>
            <Text style={styles.buttontext}>
              {this.state.TaskType1 === "Open" ||
              this.state.TaskType1 === "Overdue"
                ? "Close Ticket"
                : "Open Ticket"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
    //}
  };

  render() {
    const {
      id,
      status,
      color,
      time_status_text,
      title,
      region,
      city,
      issue,
      subissue,
      tag,
      start_date,
      remarks,
      executives,
      image_url,
      video_url,
      is_assigned,
      creater_change_status,
      created_by,
      AppId,
      selectstatus,
    } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView
          style={{
            marginTop: 30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: "#fff",
          }}
        >
          <View style={{ marginHorizontal: 5, marginVertical: 5 }}>
            <Text style={[styles.header, { marginTop: 20 }]}>{title}</Text>
            <Text style={[styles.subheader, { marginTop: 5 }]}>{issue}</Text>
            <Text style={[styles.subheader, { marginTop: 5 }]}>{subissue}</Text>
            <View style={styles.bottomline} />
            <View style={[styles.itemsubview, { marginTop: 6 }]}>
              <Image
                style={styles.sidebaricon}
                source={require("../../../Images/calender-icon.png")}
              />
              <Text style={[styles.subheader, { marginLeft: 10 }]}>
                {start_date}
              </Text>
            </View>
            {/* <View style={styles.bottomline} /> */}
            <View style={[styles.itemsubview, { marginTop: 6 }]}>
              <Image
                style={styles.sidebaricon}
                source={require("../../../Images/ic_unselected.png")}
              />
              <Text style={[styles.subheader, { marginLeft: 10 }]}>
                {status}
              </Text>
            </View>
            <View style={[styles.itemsubview, { marginTop: 6 }]}>
              <Image
                style={styles.sidebaricon}
                source={require("../../../Images/ic_region.png")}
              />
              <Text style={[styles.subheader, { marginLeft: 10 }]}>
                {region}
              </Text>
            </View>
            <View style={[styles.itemsubview, { marginTop: 6 }]}>
              <Image
                style={styles.sidebaricon}
                source={require("../../../Images/city-icon.png")}
              />
              <Text style={[styles.subheader, { marginLeft: 10 }]}>{city}</Text>
            </View>
            {/* <View style={styles.bottomline} /> */}
            <View style={[styles.itemsubview, { marginTop: 6 }]}>
              <Image
                style={styles.sidebaricon}
                source={require("../../../Images/ic_user_gray.png")}
              />
              <Text style={[styles.subheaderNew, { marginLeft: 10 }]}>
                {executives}
              </Text>
            </View>

            <View style={[styles.itemsubview, { marginTop: 6 }]}>
              <Image
                style={styles.sidebaricon}
                source={require("../../../Images/ic_comment.png")}
              />
              <Hyperlink
                linkDefault
                linkStyle={{ color: "#2980b9", fontSize: 16 }}
              >
                <Text style={[styles.subheader, { marginLeft: 10 }]}>
                  {remarks}
                </Text>
              </Hyperlink>
            </View>
            {image_url ? (
              <View>
                <Text style={styles.subheader}>Image: </Text>
                <Image
                  style={{
                    with: "100%",
                    height: 160,
                    marginTop: 5,
                    resizeMode: "cover",
                    marginLeft: 25,
                    marginRight: 10,
                  }}
                  source={{ uri: image_url }}
                />
              </View>
            ) : null}

            {video_url ? (
              <View>
                <Text style={styles.subheader}>Video: </Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("playerView")}
                >
                  <View
                    style={{
                      with: 50,
                      height: 160,
                      marginTop: 5,
                      marginLeft: 25,
                      marginRight: 10,
                      // backgroundColor: "red",
                    }}
                  >
                    <Image
                      style={{ with: 50, height: 160, resizeMode: "cover" }}
                      source={require("../../../Images/videpoplay_image.png")}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            ) : null}
            {/* {this.renderButton()} */}
            {this.state.status === "Closed"
              ? this.renderButton()
              : is_assigned == 1 ||
                (creater_change_status == 1 && AppId == created_by)
              ? this.renderButton()
              : null}
          </View>
        </ScrollView>
      </View>
    );
  }
}
