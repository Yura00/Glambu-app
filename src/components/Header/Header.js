import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Colors, Images } from "@theme";

const Header = () => (
  <View style={styles.header}>
    <Image source={Images.IC_LOGO_TEXT} style={styles.logo} />
  </View>
);
export default Header;
const styles = StyleSheet.create({
  header: {
    alignSelf: "stretch",
    height: 80,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: Colors.navy,
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 24,
  },
});
