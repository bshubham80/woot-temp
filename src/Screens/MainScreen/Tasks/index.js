import React from "react";
import {
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  NetInfo,
  SafeAreaView,
  Keyboard,
} from "react-native";
import styles from "./Styles";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../../../Config/Colors";
import { getJobs } from "../../../Redux/Actions/Job";
import { connect } from "react-redux";
import propTypes from "prop-types";
import Loader from "../../../Components/Loader";
import Toast from "react-native-simple-toast";
import CompleteFlatList from "react-native-complete-flatlist";
import { RecyclerListView, DataProvider } from "recyclerlistview";
import DatePicker from "react-native-datepicker";
import moment from "moment/min/moment-with-locales";
import axios from "axios";
import { SERVER_URL } from "../../../Config/Constants";

var tasktype = "";
class Tasks extends React.Component {
  state = {
    usertype: "",
    Jobs: [],
    searchTerm: "",
    currentpage: 1,
    nojobs: 1,
    inProgressNetworkReq: false,
    dateStart: "",
    dateEnd: "",
    headerName:"",
  };

  constructor(props) {
    super(props);
    const {
      navigation: { getParam },
    } = props;
  }
  componentDidMount(){
    setTimeout(() => {
    Keyboard.dismiss();
    }, 1000);
    }

  componentWillMount = async () => {
     Keyboard.dismiss();
    tasktype = await AsyncStorage.getItem("TaskType");
    var finalHeader = tasktype.concat(" " , 'Tickets');
    this.setState({headerName : finalHeader});
    this.getAllJobs();
  };
  refreshPage = async () => {
    const {
      navigation: { getParam },
    } = this.props;
    this.setState({
      usertype: "",
      Jobs: [],
      searchTerm: "",
      currentpage: 1,
      nojobs: 1,
    });
    if (NetInfo.isConnected) {
      tasktype = await AsyncStorage.getItem("TaskType");
      this.getAllJobs();
    } else {
      Toast.show("Please check your connectivity");
    }
  };
  clearDataPage = async () => {
    const { dateStart, dateEnd } = this.state;
    this.setState({
      dateStart: "",
      dateEnd: "",
    });
    this.refreshPage();
  };

  refreshDatePage = async () => {
    
    const {
      navigation: { getParam },
    } = this.props;
    const { dateStart, dateEnd } = this.state;

    if (dateStart && !dateEnd) {
      this.setState({
        usertype: "",
        Jobs: [],
        searchTerm: "",
        currentpage: 1,
        nojobs: 1,
        start_date: dateStart,
        end_date: "",
      });

      if (NetInfo.isConnected) {
        tasktype = await AsyncStorage.getItem("TaskType");
        this.getAllJobs();
      } else {
        Toast.show("Please check your connectivity");
      }
    } else if (!dateStart && dateEnd) {
      this.setState({
        usertype: "",
        Jobs: [],
        searchTerm: "",
        currentpage: 1,
        nojobs: 1,
        start_date: "",
        end_date: dateEnd,
      });

      if (NetInfo.isConnected) {
        tasktype = await AsyncStorage.getItem("TaskType");
        this.getAllJobs();
      } else {
        Toast.show("Please check your connectivity");
      }
    } else {
      var myArrayStart = dateStart.split("-");
      var String_Start = myArrayStart[1].concat("/", myArrayStart[0]);
      var String_StartDate = String_Start.concat("/", myArrayStart[2]);

      var myArrayend = dateEnd.split("-");
      var String_End = myArrayend[1].concat("/", myArrayend[0]);
      var String_EndDate = String_End.concat("/", myArrayend[2]);

      date1 = new Date(String_StartDate);
      date2 = new Date(String_EndDate);
      if (date1 <= date2) {
        this.setState({
          usertype: "",
          Jobs: [],
          searchTerm: "",
          currentpage: 1,
          nojobs: 1,
          start_date: dateStart,
          end_date: dateEnd,
        });

        if (NetInfo.isConnected) {
          tasktype = await AsyncStorage.getItem("TaskType");
          this.getAllJobs();
        } else {
          Toast.show("Please check your connectivity");
        }
      } else {
        Toast.show("End date must be greater than start date");
      }
    }
  };

  getAllJobs = () => {
    const {
      navigation: { getParam },
    } = this.props;
    if (NetInfo.isConnected) {
      this.fetchData(1, getParam("taskType"));
    } else {
      Toast.show("Please check your connectivity");
    }
  };

  fetchData = async (page, tasktype) => {
    console.warn('tasktype___',tasktype);
    if (!this.state.inProgressNetworkReq) {
      const WTappId = await AsyncStorage.getItem("WTappId");
      const WTauthKey = await AsyncStorage.getItem("WTauthKey");
      const url = SERVER_URL;
      console.warn('url____',url);

      this.setState({ inProgressNetworkReq: true });
      const response = await axios({
        method: "POST",
        url,
        headers: { "Content-Type": "application/json" },
        data: {
          action: "fetchTicketingJobsData",
          appId: WTappId,
          authKey: WTauthKey,
          page: page,
          status_type: tasktype,
          start_date: this.state.dateStart,
          end_date: this.state.dateEnd,
        },
      });
      this.setState({ inProgressNetworkReq: false });
      const { jobs, status } = response.data;
      console.warn('Value__',response.data);

      if (jobs) {
        this.setState((prevState) => {
          let fd = jobs.filter((item) => item.status_type === `${tasktype}`);

          return {
            Jobs: prevState.Jobs.length === 1 ? fd : prevState.Jobs.concat(fd),
            nojobs: status,
          };
        });
      } else {
        Toast.show(nextprops.Response.Job.jobs.data.message);
        this.setState({ nojobs: status });
      }
    }
  };

  fetchDataSearch = async (Search, tasktype) => {
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
          action: "fetchTicketingJobsData",
          appId: WTappId,
          authKey: WTauthKey,
          page: page,
          job_status_type: tasktype,
          start_date: this.state.dateStart,
          end_date: this.state.dateEnd,
          search:Search,
        },
      });
      this.setState({ inProgressNetworkReq: false });
      const { jobs, status } = response.data;

      if (jobs) {
        this.setState((prevState) => {
          let fd = jobs.filter((item) => item.status_type === `${tasktype}`);

          return {
            Jobs: prevState.Jobs.length === 1 ? fd : prevState.Jobs.concat(fd),
            nojobs: status,
          };
        });
      } else {
        Toast.show(nextprops.Response.Job.jobs.data.message);
        this.setState({ nojobs: status });
      }
    }
  };

  getTasks = (item) => {
    const {
      id,
      status,
      color,
      time_status_text,
      title,
      region,
      city,
      issue,
      sub_issue,
      tag,
      start_date,
      remarks,
      executives,
      image_url,
      video_url,
      is_assigned,
      creater_change_status,
      created_by,
    } = item;

    console.log(id + " : " + status);
    AsyncStorage.setItem("jobID", id);
    AsyncStorage.setItem("jobstatus", status);
    AsyncStorage.setItem("jobcolor", color);
    AsyncStorage.setItem("jobtime_status_text", time_status_text);
    AsyncStorage.setItem("jobtitle", title);

    AsyncStorage.setItem("jobregion", region);
    AsyncStorage.setItem("jobcity", city);
    AsyncStorage.setItem("jobissue", issue);
    AsyncStorage.setItem("jobsubissue", sub_issue);
    AsyncStorage.setItem("jobtag", tag);
    AsyncStorage.setItem("jobstart_date", start_date);
    AsyncStorage.setItem("jobremarks", remarks);
    AsyncStorage.setItem("jobname", executives.names.join(","));
    AsyncStorage.setItem("image_url", image_url);
    AsyncStorage.setItem("video_url", video_url);
    AsyncStorage.setItem("is_assigned", is_assigned.toString());
    AsyncStorage.setItem("creater_change_status", creater_change_status);
    AsyncStorage.setItem("created_by", created_by);
    this.props.navigation.navigate("TaskDetail");
  };
  backHome = () => {
    this.props.navigation.navigate("Home");
  };
  cell = (data, index) => {
    const item = data.cleanData ? data.cleanData : data;
    return (
      // <TouchableOpacity onPress={() => this.getTasks(item)}>
        <View style={styles.itemview}>
          <View style={styles.itemsubview}>
            <View style={styles.whiteview}>
              <View
                style={{
                  width: "100%",
                  height: 150,
                  marginTop: 1,
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    width: "85%",
                    height: 150,
                    alignItems: "flex-start",
                  }}
                >
                  
                  <Text style={[styles.itemheader, { marginTop: 5 }]}>
                    {item.title}
                  </Text>
                  <Text style={[styles.itemsubheader, { marginTop: 5 }]}>
                    {item.issue}
                  </Text>
                  <Text style={[styles.itemsubheader, { marginTop: 5 }]}>
                    {item.sub_issue}
                  </Text>

                  <View
                    style={[
                      styles.itemsubview,
                      { marginTop: 6, marginLeft: 0 },
                    ]}
                  >
                    <Image
                      style={styles.sidebaricon}
                      source={require("../../../Images/calender-icon.png")}
                    />
                    <Text style={[styles.itemsubheader, { marginLeft: 5 }]}>
                      {item.start_date}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.itemsubview,
                      { marginTop: 6, marginLeft: 0 },
                    ]}
                  >
                    <Image
                      style={styles.sidebaricon}
                      source={require("../../../Images/ic_unselected.png")}
                    />
                    <Text style={[styles.itemsubheader, { marginLeft: 5 }]}>
                      {item.status}
                    </Text>
                  </View>

                </View>
                <TouchableOpacity  style={{
                    width: "16%",
                    height: 30,
                    alignItems: "flex-start",
                    alignSelf: "flex-start",
                    justifyContent: "flex-start",
                  }} onPress={() => this.getTasks(item)}>
                <View
                  style={{
                    width: "16%",
                    height: 30,
                    alignItems: "flex-start",
                    alignSelf: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <Image
                    style={{ width: 20, height: 20, marginLeft:30 }}
                    source={require("../../../Images/ic_arrow_close.png")}
                  ></Image>
                </View>
                </TouchableOpacity>

              </View>
            </View>
          </View>
        </View>
    );
  };

  renderPagination = () => {
    const { currentpage } = this.state;
    return (
      <TouchableOpacity
        style={styles.bottomview}
        onPress={() => this.getPage(currentpage + 1)}
      >
        <Text style={styles.buttontext}>Load more</Text>
      </TouchableOpacity>
    );
  };
  _handleRef = (input) => {
    this.textInput = input;
  };
  // _updateSearchText = text => {
  //   const {
  //     navigation: { getParam },
  //   } = this.props;

  //   const { Search } = this.state;
  //   this.setState({ Search: text }, () => {
  //     if (text.match(/[`~,.<>;':"/[\]|{}()=_+-]/)) {
  //       Alert.alert('', 'Special characters not allowed');
  //     } else if (text.length > 2) {
  //        this.fetchDataSearch(Search, getParam("taskType"));

  //     }
  //   });
  // };
  getPage = (page) => {
    const {
      navigation: { getParam },
    } = this.props;
    if (this.state.nojobs === 0) {
      Toast.show("No jobs to show.");
    } else {
      this.setState({ currentpage: page });
      if (NetInfo.isConnected) {
        this.fetchData(page, getParam("taskType"));
      } else {
        Toast.show("Please check your connectivity");
      }
    }
  };

  render() {
    if (this.state.inProgressNetworkReq && this.state.Jobs.length <= 1) {
      return <Loader />;
    }
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View style={styles.container}>
          <View style={styles.toolbar}>
            <View style={styles.sidebarview}>
              <TouchableOpacity onPress={this.backHome}>
                <Image
                  style={styles.sidebaricon}
                  source={require("../../../Images/backwhitearrow.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.tooltextview}>
      <Text style={styles.tooltext}>{this.state.headerName}</Text>
            </View>
            <TouchableOpacity onPress={this.refreshPage}>
              <Image
                style={styles.refreshicon}
                source={require("../../../Images/loader-btn.png")}
              />
            </TouchableOpacity>
          </View>

          {/* <View style={{ flex: 1,}}> */}
          <View
            style={{
              width: "100%",
              height: 40,
              alignSelf: "stretch",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "red",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 40,
                alignSelf: "stretch",
                justifyContent: "center",
                flex: 4,
                backgroundColor: "#EF476F",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  marginTop: 2,
                  flex: 1.5,
                  height: 38,
                  marginLeft: 5,
                  alignSelf: "stretch",
                  flexDirection: "row",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "lightgray",
                  backgroundColor: "#EF476F",
                }}
              >
                <DatePicker
                  style={{ width: 150, height: 40, marginLeft: 15 }}
                  date={this.state.dateStart}
                  mode="date"
                  placeholder="Start Date"
                  format="DD-MM-YYYY"
                  maxDate="01-04-2030"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      width: 0,
                      height: 0,
                    },
                    dateInput: {
                      marginLeft: 20,
                      borderWidth: 0,
                      alignItems: "flex-start",
                    },
                    btnTextConfirm: {
                      color: "gray",
                    },
                  }}
                  onDateChange={(date) => {
                    this.setState({ dateStart: date });
                  }}
                />
              </View>

              <View
                style={{
                  marginTop: 2,
                  flex: 1.5,
                  height: 38,
                  marginLeft: 5,
                  alignSelf: "stretch",
                  flexDirection: "row",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "lightgray",
                  backgroundColor: "#EF476F",
                }}
              >
                <DatePicker
                  style={{ width: 150, height: 40, marginLeft: 15 }}
                  date={this.state.dateEnd}
                  mode="date"
                  placeholder="End Date"
                  format="DD-MM-YYYY"
                  maxDate="01-04-2030"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      width: 0,
                      height: 0,
                    },
                    dateInput: {
                      marginLeft: 20,
                      borderWidth: 0,
                      alignItems: "flex-start",
                    },
                    btnTextConfirm: {
                      color: "gray",
                    },
                  }}
                  onDateChange={(date) => {
                    this.setState({ dateEnd: date });
                  }}
                />
              </View>
              <View
                style={{
                  marginTop: 2,
                  flex: 0.7,
                  height: 38,
                  marginLeft: 5,
                  marginRight: 5,
                  alignSelf: "stretch",
                  flexDirection: "row",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "lightgray",
                  backgroundColor: "#EF476F",
                }}
              >
                <TouchableOpacity onPress={this.refreshDatePage}>
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                      marginTop: 5,
                      alignItems: "center",
                      alignContent: "center",
                    }}
                    source={require("../../../Images/searchfiltericon.png")}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginTop: 2,
                  flex: 0.7,
                  height: 38,
                  marginRight: 5,
                  alignSelf: "stretch",
                  flexDirection: "row",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "lightgray",
                  backgroundColor: "#EF476F",
                }}
              >
                <TouchableOpacity onPress={this.clearDataPage}>
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                      marginTop: 5,
                      alignItems: "center",
                      alignContent: "center",
                    }}
                    source={require("../../../Images/clearsearch.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* <View
            style={{
              marginLeft: 5,
              marginTop: 10,
              marginRight: 5,
              alignSelf: "stretch",
              flexDirection: "row",
              justifyContent: "center",
              height: 50,
              borderWidth: 1,
              width: "97%",
              borderColor: "lightgray",
            }}
          > */}
            {/* <View
              style={{
                marginLeft: 10,
                alignSelf: "stretch",
                justifyContent: "center",
                height: 50,
                width: "10%",
              }}
            >
              <Image
                style={{
                  width: 25,
                  height: 25,
                  marginTop: 5,
                  alignItems: "center",
                  alignContent: "center",
                }}
                source={require("../../../Images/searchfiltericon.png")}
              />
            </View> */}

            {/* <View
              style={{
                alignSelf: "stretch",
                justifyContent: "center",
                height: 50,
                width: "80%",
              }}
            >
              <TextInput
                // autoFocus
                style={{color:'#fff'}}
                placeholder="Search"
                placeholderTextColor = "#fff"
                ref={this._handleRef}
                autoFocus={true}
                onChangeText={this._updateSearchText}
              />
            </View> */}
          {/* </View> */}
          <View
            style={{
              marginTop: 30,
              flex: 1,
              backgroundColor: "#F7F9F9",
              alignItems: "center",
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}
          >
            <CompleteFlatList
              searchKey={["title"]}
              data={this.state.Jobs}
              keyExtractor={(item) => item.id}
              renderItem={this.cell}
              searchBarBackgroundStyles={styles.textinput}
              backgroundStyles={{
                 backgroundColor: "#F7F9F9",
                marginLeft: 50,
                marginRight: 50,
                marginTop: 25,
              }}
            />
          </View>

          {/* <View style={{ height: 42 }} /> */}
          {this.renderPagination()}
        </View>
      </SafeAreaView>
    );
  }
}

// Tasks.propTypes = {
//   getJobs: propTypes.func.isRequired,
//   Response: propTypes.object.isRequired
// };

// const mapStateToProps = state => {
//   return {
//     Response: state,
//     Job: state.Job
//   };
// };

// const dispatchStateToProps = { getJobs };

export default connect(null, null)(Tasks);
