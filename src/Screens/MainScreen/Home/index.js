import React from "react";
import {
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  Image,
  Dimensions,
  NetInfo,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import styles from "./Styles";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../../../Config/Colors";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import { jobCount } from "../../../Redux/Actions/Job";
import { connect } from "react-redux";
import propTypes from "prop-types";
import Loader from "../../../Components/Loader";
import Toast from "react-native-simple-toast";
import Modal from "react-native-modal";
import axios from "axios";
import { SERVER_URL } from "../../../Config/Constants";

class Home extends React.Component {
  state = {
    usertype: "",
    isModalVisible: false,
    ModalVisible: false,
    totaljob: "",
    openjob: "",
    closedjob: "",
    overdue: "",
    refreshing: false,
    Jobs: [],
    title1:"",
    issue1:"",
    subissue1:"",
    id1:"",
    status1:"",
    color1:"",
    time_status_text1:"",
    region1:"",
    city1:"",
    tag1:"",
    start_date1:"",
    remarks1:"",
    image_url1:"",
    video_url1:"",
    creater_change_status1:"",
    created_by1:"",
    is_assigned1:"",
    executives1:"",
    title2:"",
    issue2:"",
    subissue2:"",
    id2:"",
    status2:"",
    color2:"",
    time_status_text2:"",
    region2:"",
    city2:"",
    tag2:"",
    start_date2:"",
    remarks2:"",
    image_url2:"",
    video_url2:"",
    creater_change_status2:"",
    created_by2:"",
    is_assigned2:"",
    executives2:"",
    inProgressNetworkReq: false,
  };

  componentWillMount = () => {
    if (NetInfo.isConnected) {
      this.props.jobCount();
      this.getAllJobs();
    } else {
      Toast.show("Please check your connectivity");
    }
  };
  componentDidMount() {
    if (NetInfo.isConnected) {
      this.props.jobCount();
    } else {
      Toast.show("Please check your connectivity");
    }
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.props.jobCount();
    this.setState({ refreshing: false });
  };
  componentWillReceiveProps = (nextprops) => {
    console.log(nextprops);

    try {
      if (nextprops.Response.Job.isFetching == false) {
        if (nextprops.Response.Job.response.data.status == 1) {
          this.setState({
            totaljob: nextprops.Response.Job.response.data.counts.total,
            openjob: nextprops.Response.Job.response.data.counts.open,
            closedjob: nextprops.Response.Job.response.data.counts.closed,
            overdue: nextprops.Response.Job.response.data.counts.overdue,
          });
        } else {
          Toast.show(nextprops.Response.Job.response.data.message);
        }
      }
    } catch (error) {
      Toast.show("Error " + error);
    }
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  _toggleModallogout = () => {
    this.setState({
      ModalVisible: !this.state.ModalVisible,
      isModalVisible: false,
    });
  };

  addTicket = () => {
    this.props.navigation.navigate("AddTicket");
  };
  getnotification = () => {
    this.props.navigation.navigate("Notification");
  };
  getOpendTask = () => {
    this.props.navigation.navigate("Task", { taskType: 0 });
    AsyncStorage.setItem("TaskType", "Open");
  };
  getOverdueTask = () => {
    this.props.navigation.navigate("Task", { taskType: 2 });
    AsyncStorage.setItem("TaskType", "Overdue");
  };
  getClosedTask = () => {
    this.props.navigation.navigate("Task", { taskType: 1 });
    AsyncStorage.setItem("TaskType", "Closed");
  };
  getAllJobs = () => {
    const {
      navigation: { getParam },
    } = this.props;
    tasktype = 0;
    if (NetInfo.isConnected) {
      this.fetchData(1, getParam("taskType"));
    } else {
      Toast.show("Please check your connectivity");
    }
  };

  fetchData = async () => {
    if (!this.state.inProgressNetworkReq) {
      const WTappId = await AsyncStorage.getItem("WTappId");
      const WTauthKey = await AsyncStorage.getItem("WTauthKey");

      const url = SERVER_URL;

      this.setState({ inProgressNetworkReq: true });
      const response = await axios({
        method: "POST",
        url,
        headers: { "Content-Type": "application/json" },
        data: {
          action: "fetchAllTicketingJobs",
          appId: WTappId,
          authKey: WTauthKey,
          page: 1,
          job_status_type: 0,
        },
      });
      this.setState({ inProgressNetworkReq: false });
      const { jobs, status } = response.data;
      if (jobs) {
        this.setState((prevState) => {
          let fd = jobs.filter((item) => item.status_type === "0");
          this.setState({ title1: fd[0].title.split("(")[0].trim() ,issue1: fd[0].issue ,subissue1: fd[0].sub_issue ,title2: fd[1].title.split("(")[0].trim() ,issue2: fd[1].issue ,subissue2: fd[1].sub_issue});
        //  First Box
          this.setState({ id1: fd[0].id,
            status1: fd[0].status,
            color1 : fd[0].color,
            time_status_text1:fd[0].time_status_text,
            region1:fd[0].region,
            city1:fd[0].city,
            tag1:fd[0].tag,
            start_date1:fd[0].start_date,
            remarks1:fd[0].remarks,
            image_url1:fd[0].image_url,
            video_url1:fd[0].video_url,
            creater_change_status1:fd[0].creater_change_status,
            created_by1:fd[0].created_by,
            is_assigned1:fd[0].is_assigned,
            executives1:fd[0].executives,
          });
          // second Box
          this.setState({ id2: fd[1].id,
            status2: fd[1].status,
            color2 : fd[1].color,
            time_status_text2:fd[1].time_status_text,
            region2:fd[1].region,
            city2:fd[1].city,
            tag2:fd[1].tag,
            start_date2:fd[1].start_date,
            remarks2:fd[1].remarks,
            image_url2:fd[1].image_url,
            video_url2:fd[1].video_url,
            creater_change_status2:fd[1].creater_change_status,
            created_by2:fd[1].created_by,
            is_assigned2:fd[1].is_assigned,
            executives2:fd[1].executives,
          });

          return {
            Jobs: fd,
            nojobs: status,
          };
          

        });
      } else {
        Toast.show(nextprops.Response.Job.jobs.data.message);
        this.setState({ nojobs: status });
      }
    }
  };

  getTasks = item => {
    AsyncStorage.setItem("jobID", this.state.id1);
    AsyncStorage.setItem("jobstatus", this.state.status1);
    AsyncStorage.setItem("jobcolor", this.state.color1);
    AsyncStorage.setItem("jobtime_status_text", this.state.time_status_text1);
    AsyncStorage.setItem("jobtitle", this.state.title1);
    AsyncStorage.setItem("jobregion", this.state.region1);
    AsyncStorage.setItem("jobcity", this.state.city1);
    AsyncStorage.setItem("jobissue", this.state.issue1);
    AsyncStorage.setItem("jobsubissue", this.state.subissue1);
    AsyncStorage.setItem("jobtag", this.state.tag1);
    AsyncStorage.setItem("jobstart_date", this.state.start_date1);
    AsyncStorage.setItem("jobremarks", this.state.remarks1);
    AsyncStorage.setItem("jobname", this.state.executives1.names.join(","));
    AsyncStorage.setItem("image_url", this.state.image_url1);
    AsyncStorage.setItem("video_url", this.state.video_url1);
    AsyncStorage.setItem("is_assigned", this.state.is_assigned1.toString());
    AsyncStorage.setItem("creater_change_status", this.state.creater_change_status1);
    AsyncStorage.setItem("created_by", this.state.created_by1);
    AsyncStorage.setItem("back_by_home", "return_home");
     this.props.navigation.navigate("DetailNewScreen");
  };

  getTasks1 = item => {
    AsyncStorage.setItem("jobID", this.state.id2);
    AsyncStorage.setItem("jobstatus", this.state.status2);
    AsyncStorage.setItem("jobcolor", this.state.color2);
    AsyncStorage.setItem("jobtime_status_text", this.state.time_status_text2);
    AsyncStorage.setItem("jobtitle", this.state.title2);
    AsyncStorage.setItem("jobregion", this.state.region2);
    AsyncStorage.setItem("jobcity", this.state.city2);
    AsyncStorage.setItem("jobissue", this.state.issue2);
    AsyncStorage.setItem("jobsubissue", this.state.subissue2);
    AsyncStorage.setItem("jobtag", this.state.tag2);
    AsyncStorage.setItem("jobstart_date", this.state.start_date2);
    AsyncStorage.setItem("jobremarks", this.state.remarks2);
    AsyncStorage.setItem("jobname", this.state.executives2.names.join(","));
    AsyncStorage.setItem("image_url", this.state.image_url2);
    AsyncStorage.setItem("video_url", this.state.video_url2);
    AsyncStorage.setItem("is_assigned", this.state.is_assigned2.toString());
    AsyncStorage.setItem("creater_change_status", this.state.creater_change_status2);
    AsyncStorage.setItem("created_by", this.state.created_by2);
    AsyncStorage.setItem("back_by_home", "return_home");

     this.props.navigation.navigate("DetailNewScreen");
  };

  getlogout = () => {
    this.setState({
      ModalVisible: !this.state.ModalVisible,
    });
    setTimeout(() => {
      AsyncStorage.clear();
      this.props.navigation.navigate("Login");
    }, 100);
  };
  render() {
    const { openjob, closedjob, overdue, Jobs } = this.state;
    // jobs.map((item, index);
    // const item = data.cleanData ? data.cleanData : data;

    if (this.props.Response.Job.isFetching) {
      return <Loader />;
    }
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <ScrollView style = {{backgroundColor:'#FDFDFD'}}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          <View style={styles.container}>
            <View style={styles.toolbar}>
              <View style={styles.sidebarview}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.toggleDrawer()}
                >
                  <Image
                    style={styles.sidebaricon}
                    source={require("../../../Images/sidebar.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <Image
                style={styles.smalllogo}
                source={require("../../../Images/logo.png")}
              ></Image>
              <TouchableOpacity
                style={styles.bellview}
                onPress={this.getnotification}
              >
                <Image
                  style={styles.bellicon}
                  source={require("../../../Images/bell.png")}
                ></Image>
              </TouchableOpacity>
            </View>
            <Modal
              isVisible={this.state.isModalVisible}
              onBackdropPress={() => this.setState({ isModalVisible: false })}
              backdropOpacity={0}
              style={styles.modal}
            >
              <View>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("ChangePassword")
                  }
                >
                  <View style={styles.itemsubview}>
                    <Image source={require("../../../Images/key.png")}></Image>
                    <Text style={styles.modaltext}>Change Password</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._toggleModallogout}>
                  <View style={[styles.itemsubview, { marginTop: 20 }]}>
                    <Image
                      source={require("../../../Images/logout.png")}
                    ></Image>
                    <Text style={styles.modaltext}>Logout</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Modal>
            <View style={styles.backView}>
              <View style={styles.backtext}>
                <Text>
                  <Text style={styles.backtex}> Tasks </Text>
                  <Text style={styles.testxTodo}>To-do</Text>
                </Text>
              </View>

              <TouchableOpacity onPress={() => this.getTasks()}>
                <View style={styles.openView}>
                  <View style={styles.view1}>
                    <View style={styles.view2}>
                      <Image
                        style={styles.image1}
                        source={require("../../../Images/ic_unselected.png")}
                      ></Image>
                    </View>
                    <View style={styles.view3}>
                        <Text style={styles.text3}>{this.state.title1}</Text>
                      <Text style={styles.textHeader}>{this.state.issue1}</Text>
                      <Text style={styles.textHeader}>{this.state.subissue1}</Text>
                    </View>
                  </View>
                </View>
                </TouchableOpacity>
                 <TouchableOpacity onPress={() => this.getTasks1()}>
                <View style={styles.mainView}>
                  <View style={styles.view1}>
                    <View style={styles.view2}>
                      <Image
                        style={styles.image1}
                        source={require("../../../Images/ic_unselected.png")}
                      ></Image>
                    </View>
                    <View style={styles.view3}>
                        <Text style={styles.text3}>{this.state.title2}</Text>
                      <Text style={styles.textHeader}>{this.state.issue2}</Text>
                      <Text style={styles.textHeader}>{this.state.subissue2}</Text>
                    </View>
                  </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.getOpendTask}>
                  <Text style={styles.viewMore}>View more</Text>
                </TouchableOpacity>
              <View style={styles.view6}>
                <TouchableOpacity
                  onPress={this.getOverdueTask}
                  style={styles.view7}
                >
                  <Image
                        style={{width: 50,
                        height: 150,
                          position: "absolute",
                          alignSelf: "flex-end",
                          // marginLeft: 110,
                        }}
                        source={require("../../../Images/overdue_card_bg.png")}
                      >

                      </Image>
                  <View style={styles.view8}>
                  <View style={{backgroundColor:'#FDF8E3',width: 35, height: 35,position: "absolute", marginLeft: 20,marginTop: 20,borderRadius:50,}}>

                    <Image
                      style={styles.image2}
                      source={require("../../../Images/ic_overdue_orange.png")}
                    ></Image>
                  </View>

                    <Text style={styles.text4}>{overdue}</Text>
                    <Text style={styles.text5}>Overdue</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={this.getClosedTask}
                  style={styles.view9}
                >
                  <Image
                        style={{width: 50,
                        height: 150,
                          position: "absolute",
                          alignSelf: "flex-end",
                        }}
                        source={require("../../../Images/closed_card_bg.png")}
                      ></Image>
                  <View style={styles.view10}>
                  <View style={{backgroundColor:'#E6F5F5',width: 35, height: 35,position: "absolute", marginLeft: 20,marginTop: 20,borderRadius:50,}}>

                    <Image
                      style={styles.image3}
                      source={require("../../../Images/ic_closed_blue.png")}
                    ></Image>
                  </View>

                    <Text style={styles.text6}>{closedjob}</Text>
                    <Text style={styles.text7}>Submitted/Closed</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <Dialog
              visible={this.state.ModalVisible}
              dialogStyle={styles.doView1}
            >
              <View>
                <Text style={styles.logoutmodaltext}>
                  Do you want to logout?
                </Text>
                <View
                  style={[
                    styles.itemsubview,
                    { marginTop: 10, marginLeft: 130 },
                  ]}
                >
                  <TouchableOpacity onPress={this._toggleModallogout}>
                    <Text style={styles.modallogouttext}>No</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.getlogout}>
                    <Text style={[styles.modallogouttext, { marginLeft: 10 }]}>
                      Yes
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Dialog>
          </View>
        </ScrollView>
        <View style={{width:'100%',height:100,backgroundColor:'#FDFDFD'}}/>
        <View style={{ width: "100%", backgroundColor: "#F7F9F9" }}>
          <TouchableOpacity style={styles.addiconview} onPress={this.addTicket}>
            <Image source={require("../../../Images/add.png")}></Image>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

Home.propTypes = {
  jobCount: propTypes.func.isRequired,
  Response: propTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    Response: state,
  };
};

const dispatchStateToProps = { jobCount };

export default connect(mapStateToProps, dispatchStateToProps)(Home);
