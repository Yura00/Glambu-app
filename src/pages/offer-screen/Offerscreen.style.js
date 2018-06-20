import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "@theme";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  emptyOfferDescription: {
    color: "#00000061",
    textAlign: "center",
  },
  emptyIcon: {
    width: 75,
    height: 50,
    marginVertical: 20,
  },
  actionsheet: {
    position: "absolute",
    bottom: 0,
    width: width,
    backgroundColor: Colors.bkColor,
  },
  actionBtn: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  acceptedModal: {
    width: width - 40,
    height: height - 80,
    backgroundColor: "#fff",
    borderRadius: 3,
  },
  acceptedModalHeader: {
    position: "relative",
    alignSelf: "stretch",
    height: height / 6,
  },
  modalHeaderImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  acceptedHeadertText: {
    position: "absolute",
    left: 0,
    bottom: 0,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 24,
    color: "#fff",
  },
  acceptedModalBody: {
    flex: 1,
    padding: 20,
  },
  subTitle: {
    ...Fonts.style.subTitle,
  },
  acceptText: {
    fontSize: 16,
    color: "#000",
    paddingLeft: 15,
  },
  contactModeView: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
  },
});
