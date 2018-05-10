import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { GlobalStyle, Colors } from "@theme";
import styles from "./FindingGirls.style";
// import firebase from "react-native-firebase";

export default class FindingGirls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => { //eslint-disable-line
      this.setState({ loading: false });
    }, 1000);
    // const { app } = firebase.storage();
    // console.log('^^^^^^^^^^^^^^', app);
  }
  render() {
    return (
      <View style={GlobalStyle.fullPageContainer}>
        <View>
          <Text>Hello</Text>
        </View>
        {this.state.loading && (
          <View style={styles.overlayView}>
            <ActivityIndicator size="large" color={Colors.secondary} />
          </View>
        )}
      </View>
    );
  }
}
