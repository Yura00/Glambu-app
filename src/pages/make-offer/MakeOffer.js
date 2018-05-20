import React from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  ActivityIndicator,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import Slick from "react-native-slick";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import { TextField } from "react-native-material-textfield";
import { GlobalStyle, Colors, Images } from "@theme";
import { BRICKS } from "../../utils/constants";
import BottomButton from "../../components/BottomButton";
import Toast from "../../components/Toast";
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
      makeOfferModal: false,
      amount: "",
      offerDetail: "",
      showNotification: false,
      sent: false,
      viewOfferModal: false,
    };
  }
  componentDidMount() {
    setTimeout(() => { //eslint-disable-line
      this.setState({ loading: false, images: BRICKS });
    }, 2000);
  }
  setModalVisible = visible => {
    this.setState({ makeOfferModal: visible });
  };
  onSentOffer = () => {
    this.setState({
      makeOfferModal: false,
      showNotification: true,
      sent: true,
    });
    setTimeout(() => { //eslint-disable-line
      this.setState({ showNotification: false });
    }, 2000);
  };
  goBack = () => {
    this.props.navigation.goBack();
  };
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
                <View key={i} style={{ flex: 1, position: "relative" }}>
                  <Image style={{ flex: 1 }} source={{ uri: brick.uri }} />
                  <LinearGradient
                    colors={[
                      "#0000007f",
                      "#0000003f",
                      "#00000000",
                      "#00000000",
                      "#00000000",
                      "#0000003f",
                      "#0000007f",
                    ]}
                    style={styles.linearGradient}
                  />
                </View>
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
        {!this.state.sent && (
          <BottomButton
            name="Make Cludia an Offer"
            active
            onPress={() => this.setState({ makeOfferModal: true })}
          />
        )}
        {!this.state.showNotification &&
          this.state.sent && (
            <BottomButton
              name="View Offer"
              active
              onPress={() => this.setState({ viewOfferModal: true })}
              primary
            />
          )}
        {this.state.showNotification && <Toast />}
        <TouchableOpacity
          style={{ position: "absolute", top: 60, left: 20 }}
          onPress={this.goBack}>
          <Ionicons name="md-arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
        <Modal
          animationType="fade"
          transparent
          visible={this.state.makeOfferModal}
          onRequestClose={() => this.setState({ makeOfferModal: false })}>
          <View
            style={[GlobalStyle.overlayView, { backgroundColor: "#0000007f" }]}>
            <View style={styles.modalView}>
              <Text style={[styles.subTitle, { color: "#000000de" }]}>
                Make Claudia an offer
              </Text>
              <TextField
                label="Amount"
                value={this.state.amount}
                onChangeText={amount => this.setState({ amount })}
                inputContainerPadding={20}
                suffix="USD"
              />
              <TextField
                label="Tell her the offer details"
                value={this.state.offerDetail}
                onChangeText={offerDetail => this.setState({ offerDetail })}
                multiline
              />
              <Text style={styles.maxLength}>
                {this.state.offerDetail.length} / 500
              </Text>
              <View style={styles.btnGroup}>
                <TouchableOpacity
                  style={styles.submitBtn}
                  onPress={() => this.setState({ makeOfferModal: false })}>
                  <Text>CANCEL</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.submitBtn}
                  onPress={() => this.onSentOffer()}>
                  <Text style={{ color: Colors.secondary }}>SEND OFFER</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="fade"
          transparent
          visible={this.state.viewOfferModal}
          onRequestClose={() => this.setState({ viewOfferModal: false })}>
          <View
            style={[GlobalStyle.overlayView, { backgroundColor: "#0000007f" }]}>
            <View style={[styles.modalView, { padding: 0 }]}>
              <View style={styles.modalHeader}>
                <Foundation name="info" color="#fff" size={30} />
                <Text style={styles.modalHeaderText}>Offer Details</Text>
              </View>
              <View style={{ flex: 1, padding: 20 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <View>
                    <Image
                      source={Images.IMG_ONBOARDING_SLIDE1}
                      style={{ width: 40, height: 40, borderRadius: 20 }}
                    />
                    <Text style={[styles.subTitle, { color: "#000000de" }]}>
                      Claudia
                    </Text>
                  </View>
                  <Text>Price: $10</Text>
                </View>
                <Text
                  style={{ fontSize: 16, paddingVertical: 20, lineHeight: 26 }}>
                  Hi Claudia. How about meeting for a coffee on Thursday in
                  Starbucks at Time Square?
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons
                    name="md-time"
                    color="#00000061"
                    size={20}
                    style={{ paddingRight: 10 }}
                  />
                  <Text>1 day and 3 hours to respond</Text>
                </View>
                <View style={styles.btnGroup}>
                  <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={() => this.setState({ viewOfferModal: false })}>
                    <Text style={{ color: Colors.secondary }}>CLOSE</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        {this.state.loading && (
          <View style={GlobalStyle.overlayView}>
            <ActivityIndicator size="large" color={Colors.secondary} />
          </View>
        )}
      </View>
    );
  }
}
export default MakeOffer;
