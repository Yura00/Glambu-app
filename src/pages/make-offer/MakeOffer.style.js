import { StyleSheet } from "react-native";
import { Colors, Fonts } from "@theme";

export default StyleSheet.create({
  overlayView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.bkColor,
  },
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
});
