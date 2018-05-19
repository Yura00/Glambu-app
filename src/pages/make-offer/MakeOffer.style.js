import { StyleSheet, Dimensions } from "react-native";
import { Fonts } from "@theme";
const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
  name: {
    ...Fonts.style.profileName,
  },
  age: {
    ...Fonts.style.profileAge,
  },
  subTitle: {
    ...Fonts.style.subTitle,
  },
  bioText: {
    paddingVertical: 15,
    ...Fonts.style.comments,
  },
  modalView: {
    width: width - 40,
    height: height / 2,
    backgroundColor: "#fff",
    padding: 20,
  },
  linearGradient: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  maxLength: {
    ...Fonts.style.comments,
    textAlign: "right",
  },
  btnGroup: {
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 20,
  },
  submitBtn: {
    paddingLeft: 20,
  },
});
