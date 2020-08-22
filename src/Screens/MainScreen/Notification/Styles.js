import { StyleSheet } from "react-native";
import Colors from "../../../Config/Colors";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E12F5B",
  },
  itemview: {
    marginTop: 20,
    marginBottom: 5,
    width: "80%",
    marginLeft:20,
  },
  itemheader: {
    fontSize: 11,
    // fontWeight: "bold",
    color: Colors.primary,
  },
  itemsubheader: {
    fontSize: 12,
    color: Colors.primary,
    alignSelf: "flex-end",
  },
  toolbar: {
    backgroundColor: "#E12F5B",
    height: 70,
    paddingHorizontal: 16,
    paddingTop: 28,
    flexDirection: "row",
    width: "100%",
  },
  sidebarview: {
    width: "20%",
  },
  sidebaricon: {
    width: 22,
    height: 22,
  },
  tooltextview: {
    width: "40%",
    marginLeft:-20,
  },
  tooltext: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white,
  },
  refreshicon: {
    width: 26,
    height: 26,
    marginLeft: 10,
  },
  bottomline: {
    height: 1,
    width: "100%",
    backgroundColor: "#6F7C80",
  },
  marktext: {
    fontSize: 15,
    color: Colors.white,
  },
  markview: {
    position: "absolute",
    right: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    // backgroundColor: Colors.skyblue,
    top: 24,
  },
});
