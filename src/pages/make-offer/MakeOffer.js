import React from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import Slick from "react-native-slick";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { GlobalStyle, Colors } from "@theme";
import { BRICKS } from "../../utils/constants";
import BottomButton from "../../components/BottomButton";
import styles from "./MakeOffer.style";

const { height } = Dimensions.get("window");

class MakeOffer extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);

    this.state = {
      images: null,
      loading: true,
    };
  }
  onNext = () => {};
  componentDidMount() {
    setTimeout(() => { //eslint-disable-line
      this.setState({ loading: false, images: BRICKS });
    }, 2000);
  }
  render() {
    const { images } = this.state;
    return (
      <View style={GlobalStyle.fullPageContainer}>
        <ScrollView style={{ flex: 1 }}>
          {images != null && (
            <Slick
              height={height * 0.6}
              index={0}
              loop={false}
              dot={
                <View
                  style={{
                    backgroundColor: "rgba(255,255,255,.5)",
                    width: 6,
                    height: 6,
                    borderRadius: 3,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3,
                  }}
                />
              }
              activeDot={
                <View
                  style={{
                    backgroundColor: "#ffffff",
                    width: 6,
                    height: 6,
                    borderRadius: 3,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3,
                  }}
                />
              }
              paginationStyle={{
                bottom: 20,
              }}>
              {images.map((brick, i) => (
                <Image
                  style={{ flex: 1 }}
                  source={{ uri: brick.uri }}
                  key={i}
                />
              ))}
            </Slick>
          )}
          <View style={[GlobalStyle.pageContainer, { paddingVertical: 0 }]}>
            <View
              style={{
                borderBottomColor: "#0000001f",
                borderBottomWidth: 1,
                paddingVertical: 20,
              }}>
              <Text>
                <Text style={styles.name}>Claudia,</Text>
                <Text style={styles.age}> 27</Text>
              </Text>
              <Text>
                <Text style={{ marginRight: 30 }}>
                  Active this month&nbsp;&nbsp;&nbsp;&nbsp;
                  <FontAwesome
                    name="location-arrow"
                    style={{ marginHorizontal: 15 }}
                  />{" "}
                  1.2 km away
                </Text>
              </Text>
            </View>
            <View style={{ paddingVertical: 20 }}>
              <Text style={styles.subTitle}>About Claudia</Text>
              <Text style={styles.bioText}>
                Hey guys, I am Claudia and I would love to meet my blue prince
                here.{"\n\n"}Anyways, this app is kind of weird, but I promise I
                willinvest all the money into shoes, drugs and alcohol...
                kidding :-)
              </Text>
            </View>
          </View>
        </ScrollView>
        <BottomButton
          name="Make Cludia an Offer"
          active
          onPress={this.onNext}
        />
        {this.state.loading && (
          <View style={styles.overlayView}>
            <ActivityIndicator size="large" color={Colors.secondary} />
          </View>
        )}
      </View>
    );
  }
}
export default MakeOffer;
