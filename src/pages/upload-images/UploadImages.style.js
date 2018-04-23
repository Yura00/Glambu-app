import { StyleSheet } from "react-native";
import { Fonts, Colors } from "@theme";

export default StyleSheet.create({
  title: {
    ...Fonts.style.topic,
    paddingBottom: 20,
  },
  commentText: {
    ...Fonts.style.comments,
    paddingLeft: 10,
    flex: 1,
  },
  nameInput: {
    fontSize: Fonts.size.h4,
  },
  desc: {
    ...Fonts.style.description,
  },
  gridView: {
    margin: 0,
    paddingHorizontal: 0,
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    position: "relative",
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 90,
    backgroundColor: Colors.btnActive,
  },
  action: {
    alignItems: "flex-end",
  },
});
