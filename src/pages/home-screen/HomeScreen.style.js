import { StyleSheet, Dimensions } from "react-native";
import { Fonts, Colors } from "@theme";
const { width } = Dimensions.get("screen");

export default StyleSheet.create({
  description: {
    ...Fonts.description,
    textAlign: "center",
    paddingVertical: 20,
    lineHeight: 25,
    color: "rgba(0, 0, 0, 0.38)",
  },
  switchBtn: {
    paddingVertical: 20,
    backgroundColor: Colors.secondary,
    width: width - 100,
    alignItems: "center",
    borderRadius: 4,
  },
  btnText: {
    color: Colors.white,
    fontSize: Fonts.size.h3,
  },
});
