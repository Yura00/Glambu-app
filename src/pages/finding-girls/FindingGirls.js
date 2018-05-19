import React from "react";
import { View, Text, ScrollView, ActivityIndicator, Image } from "react-native";
import Masonry from "react-native-masonry";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { GlobalStyle, Colors } from "@theme";
import { BRICKS } from "../../utils/constants";
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
        style={styles.linearGradient}
      />
    </View>
  );
};
export default class FindingGirls extends React.Component {
  addParams = item => {
    item.onPress = () => this.props.navigation.navigate("MakeOffer");
    item.renderHeader = MasonryHeader;
    item.renderFooter = MasonryFooter;
    return item;
  };
  bricks = BRICKS.map(this.addParams);
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
