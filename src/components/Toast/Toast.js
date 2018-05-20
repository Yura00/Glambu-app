import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@theme";

export default class Toast extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={{ color: "#fff" }}>
          The offer has been successfully sent!
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 48,
    justifyContent: "center",
    backgroundColor: Colors.primary,
    paddingHorizontal: 40,
  },
});
