import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@theme";
const { width } = Dimensions.get("window");

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
    position: 'absolute',
    bottom: 0,
    width: width,
    backgroundColor: Colors.bkColor,
  },
  actionBtn: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  }
});
