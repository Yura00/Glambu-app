import React from "react";
import { TouchableOpacity, Text, Dimensions, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Colors, Fonts } from "@theme";
const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  button: {
    width: width,
    alignItems: "center",
    justifyContent: "center",
    height: 56,
  },
  active: {
    backgroundColor: Colors.btnActive,
  },
  inactive: {
    backgroundColor: Colors.btnInactive,
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  btnText: {
    fontSize: Fonts.size.h4,
    color: Colors.white,
  },
});
const BottomButton = ({ active, name, onPress, primary }) => (
  <TouchableOpacity
    style={[
      styles.button,
      active ? styles.active : styles.inactive,
      primary ? styles.primary : styles.active,
    ]}
    onPress={onPress}
    disabled={!active}>
    <Text style={styles.btnText}>{name}</Text>
  </TouchableOpacity>
);
BottomButton.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string,
  onPress: PropTypes.func,
  primary: PropTypes.bool,
};
BottomButton.defaultProps = {
  active: false,
  primary: false,
  name: "Button Name",
  onPress: () => console.log("--touch pressed--"), //eslint-disable-line
};

export default BottomButton;
