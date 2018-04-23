import { StyleSheet } from "react-native";
import Colors from "./colors";

export default StyleSheet.create({
  pageTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
    color: Colors.bkColor,
    textAlign: "center", // center header title for Android
    alignSelf: "center", // center header title for Android,
  },
  fullPageContainer: {
    flex: 1,
    backgroundColor: Colors.bkColor,
  },
  pageContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  wrapper: {
    flexDirection: "row",
  },
});
