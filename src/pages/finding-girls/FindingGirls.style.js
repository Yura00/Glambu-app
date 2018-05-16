import { StyleSheet } from "react-native";
import { Colors } from "@theme";

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
  linearGradient: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
  },
  masonryHeader: {
    position: "absolute",
    right: 0,
    zIndex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  masonryFooter: {
    position: "absolute",
    bottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    left: 0,
  },
});
