import { StyleSheet } from "react-native";
import { Fonts } from "@theme";

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
  maxLength: {
    ...Fonts.style.comments,
    textAlign: "right",
  },
});
