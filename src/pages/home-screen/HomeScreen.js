import React from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import { GlobalStyle } from "@theme";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "./HomeScreen.style";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={GlobalStyle.fullPageContainer}>
        <StatusBar backgroundColor="#4000002f" translucent />
        <View
          style={[
            GlobalStyle.pageContainer,
            GlobalStyle.container,
            { alignItems: "center" },
          ]}>
          <MaterialIcons name="gps-off" color="rgba(0, 0, 0, 0.38)" size={48} />
          <Text style={styles.description}>
            I would love to show you the ladies in your area but.. You
            haven&apos;t switched on GPS yet.
          </Text>
          <TouchableOpacity style={styles.switchBtn}>
            <Text style={styles.btnText}>Switch on GPS</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default HomeScreen;
