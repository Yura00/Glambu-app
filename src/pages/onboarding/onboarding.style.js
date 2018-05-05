import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "@theme";
const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
  topBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    resizeMode: "stretch",
  },
  title: {
    fontSize: Fonts.size.h2,
    color: Colors.white,
    textAlign: "center",
  },
  signinBtn: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  slide: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  slide1Img: {
    height: height * 0.65,
    width: width,
  },
  slide2Img: {
    height: height * 0.6,
    width: width,
  },
  desc: {
    color: "#ffffff80",
    fontSize: Fonts.size.h6,
    paddingHorizontal: 30,
    paddingBottom: 15,
    textAlign: "center",
  },
});
