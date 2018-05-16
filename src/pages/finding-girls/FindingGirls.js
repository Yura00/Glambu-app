import React from "react";
import { View, Text, ScrollView, ActivityIndicator, Image } from "react-native";
import Masonry from "react-native-masonry";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { GlobalStyle, Colors } from "@theme";
import styles from "./FindingGirls.style";
// import firebase from "react-native-firebase";
const customProps = {};
const MasonryHeader = props => (
  <View style={styles.masonryHeader}>
    <Text style={{ color: "#fff" }}>
      <FontAwesome
        name="location-arrow"
        color="#fff"
        style={{ marginRight: 15 }}
      />
      &nbsp;&nbsp;{props.nearby} km
    </Text>
  </View>
);
const MasonryFooter = props => (
  <View style={styles.masonryFooter}>
    <Text style={{ color: "#fff", fontSize: 16 }}>
      {props.name}, {props.age}
    </Text>
  </View>
);
const MemberPhoto = props => {
  return (
    <View style={{ position: "relative", marginBottom: 20 }}>
      <Image {...props} />
      <LinearGradient
        colors={[
          "#0000001f",
          "#00000000",
          "#00000000",
          "#00000000",
          "#00000000",
          "#0000001f",
        ]}
        style={[styles.linearGradient]}
      />
    </View>
  );
};
export default class FindingGirls extends React.Component {
  addOnPress = (item) => {
    item.onPress = () => this.props.navigation.navigate("MakeOffer");
    return item;
  };
  bricks = [
    {
      uri:
        "https://firebasestorage.googleapis.com/v0/b/glambu-1.appspot.com/o/1.jpg?alt=media&token=c9407789-34da-460e-a5e1-19e1ac5e16c1",
      data: {
        name: "Elizabeth",
        age: 25,
        nearby: 1.1,
      },
      renderHeader: MasonryHeader,
      renderFooter: MasonryFooter,
    },
    {
      uri:
        "https://firebasestorage.googleapis.com/v0/b/glambu-1.appspot.com/o/2.jpg?alt=media&token=b7c33702-ef93-490c-814e-3e4be6a0c764",
      data: {
        name: "Elizabeth",
        age: 25,
        nearby: 1.1,
      },
      renderHeader: MasonryHeader,
      renderFooter: MasonryFooter,
    },
    {
      uri:
        "https://firebasestorage.googleapis.com/v0/b/glambu-1.appspot.com/o/3.jpg?alt=media&token=98521015-7957-4e88-b992-23bc48827fff",
      data: {
        name: "Elizabeth",
        age: 25,
        nearby: 1.1,
      },
      renderHeader: MasonryHeader,
      renderFooter: MasonryFooter,
    },
    {
      uri:
        "https://firebasestorage.googleapis.com/v0/b/glambu-1.appspot.com/o/4.jpg?alt=media&token=0d06b0bd-cd14-4583-8361-4495f5a234ca",
      data: {
        name: "Elizabeth",
        age: 25,
        nearby: 1.1,
      },
      renderHeader: MasonryHeader,
      renderFooter: MasonryFooter,
    },
    {
      uri:
        "https://firebasestorage.googleapis.com/v0/b/glambu-1.appspot.com/o/5.jpeg?alt=media&token=97302544-edfb-4032-86f5-54a1eb55d8d7",
      data: {
        name: "Elizabeth",
        age: 25,
        nearby: 1.1,
      },
      renderHeader: MasonryHeader,
      renderFooter: MasonryFooter,
    },
    {
      uri:
        "https://firebasestorage.googleapis.com/v0/b/glambu-1.appspot.com/o/6.jpeg?alt=media&token=44c69894-d978-41f0-9bde-3236c572f309",
      data: {
        name: "Elizabeth",
        age: 25,
        nearby: 1.1,
      },
      renderHeader: MasonryHeader,
      renderFooter: MasonryFooter,
    },
    {
      uri:
        "https://firebasestorage.googleapis.com/v0/b/glambu-1.appspot.com/o/7.jpeg?alt=media&token=54736340-b8a8-405d-873d-0313429d46f2",
      data: {
        name: "Elizabeth",
        age: 25,
        nearby: 1.1,
      },
      renderHeader: MasonryHeader,
      renderFooter: MasonryFooter,
    },
    {
      uri:
        "https://firebasestorage.googleapis.com/v0/b/glambu-1.appspot.com/o/8.jpeg?alt=media&token=465ba950-f606-434e-b550-e2ac9e50ffda",
      data: {
        name: "Elizabeth",
        age: 25,
        nearby: 1.1,
      },
      renderHeader: MasonryHeader,
      renderFooter: MasonryFooter,
    },
    {
      uri:
        "https://firebasestorage.googleapis.com/v0/b/glambu-1.appspot.com/o/9.jpeg?alt=media&token=507160ba-c916-45db-bec3-c8a0a72ff841",
      data: {
        name: "Elizabeth",
        age: 25,
        nearby: 1.1,
      },
      renderHeader: MasonryHeader,
      renderFooter: MasonryFooter,
    },
  ].map(this.addOnPress);
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      columns: 0,
    };
  }
  componentDidMount() {
    setTimeout(() => { //eslint-disable-line
      this.setState({ loading: false, columns: 2, bricks: this.bricks });
    }, 2000);
    // const { app } = firebase.storage();
    // console.log('^^^^^^^^^^^^^^', app);
  }
  render() {
    return (
      <View style={GlobalStyle.fullPageContainer}>
        <ScrollView
          contentContainerStyle={[
            GlobalStyle.pageContainer,
            { paddingVertical: 20 },
          ]}>
          <Masonry
            sorted // optional - Default: false
            columns={this.state.columns} // optional - Default: 2
            bricks={this.state.bricks}
            imageContainerStyle={{ marginTop: 0, borderRadius: 5 }}
            customImageComponent={MemberPhoto}
            customImageProps={{
              ...customProps,
              onDetail: () => this.props.navigation.navigate("FindGirlScreen"),
            }}
            spacing={5}
          />
        </ScrollView>
        {this.state.loading && (
          <View style={styles.overlayView}>
            <ActivityIndicator size="large" color={Colors.secondary} />
          </View>
        )}
      </View>
    );
  }
}
