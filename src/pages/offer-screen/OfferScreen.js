import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Modal,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";
import { GlobalStyle, Images } from "@theme";
import OfferCard from "../../components/OfferCard";
import styles from "./Offerscreen.style";
import { OFFER_LIST } from "../../utils/constants";

const EmptyOffer = () => (
  <SafeAreaView style={GlobalStyle.fullPageContainer}>
    <View style={[GlobalStyle.container, { alignItems: "center" }]}>
      <Image
        source={Images.IC_EMPTY}
        style={styles.emptyIcon}
        resizeMode="contain"
      />
      <Text style={styles.emptyOfferDescription}>
        You didn&apos;t make any offer yet.{"\n"}Don&apos;t loose time. Make a
        date offer today!
      </Text>
    </View>
  </SafeAreaView>
);
export default class OfferScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offerList: null,
      visiableAction: false,
      visibleAccepted: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ offerList: OFFER_LIST, visibleAccepted: true });
    }, 2000);
  }
  onCall = (type, number) => {
    this.setState({ visiableAction: true });
  };
  render() {
    const { visibleAccepted } = this.state;
    if (this.state.offerList == null) {
      return <EmptyOffer />;
    } else {
      return (
        <SafeAreaView
          style={[GlobalStyle.fullPageContainer, { paddingHorizontal: 5 }]}>
          <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
            {this.state.offerList.map((offer, i) => (
              <OfferCard key={i} {...offer} onCall={this.onCall} />
            ))}
          </ScrollView>
          <Modal
            animationType="slide"
            transparent
            visible={this.state.visiableAction}
            onRequestClose={() => this.setState({ visiableAction: false })}>
            <View
              style={[
                GlobalStyle.overlayView,
                { backgroundColor: "#0000007f" },
              ]}>
              <View style={styles.actionsheet}>
                <TouchableOpacity style={styles.actionBtn}>
                  <MaterialCommunityIcons
                    name="account-plus"
                    color="#000000de"
                    size={20}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#000000de",
                      marginLeft: 20,
                    }}>
                    Creat New Contact
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionBtn}>
                  <Ionicons name="md-call" color="#000000de" size={20} />
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#000000de",
                      marginLeft: 20,
                    }}>
                    Call
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionBtn}>
                  <MaterialCommunityIcons
                    name="message"
                    color="#000000de"
                    size={20}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#000000de",
                      marginLeft: 20,
                    }}>
                    Send SMS
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionBtn}>
                  <MaterialCommunityIcons
                    name="content-copy"
                    color="#000000de"
                    size={20}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#000000de",
                      marginLeft: 20,
                    }}>
                    Copy
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <Modal
            animationType="fade"
            transparent
            visible={visibleAccepted}
            onRequestClose={() => this.setState({ visibleAccepted: false })}>
            <View
              style={[
                GlobalStyle.overlayView,
                { backgroundColor: "#0000007f" },
              ]}>
              <View style={styles.acceptedModal}>
                <View style={styles.acceptedModalHeader}>
                  <Image
                    source={Images.BG_ACCEPTED_MODAL}
                    style={styles.modalHeaderImage}
                    resizeMode="stretch"
                  />
                  <Text style={styles.acceptedHeadertText}>
                    Contratulation!
                  </Text>
                </View>
                <View style={styles.acceptedModalBody}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}>
                      <Image
                        source={Images.IMG_ONBOARDING_SLIDE1}
                        style={{ width: 40, height: 40, borderRadius: 20 }}
                      />
                      <Text style={[styles.subTitle, { color: "#000000de" }]}>
                        Claudia
                      </Text>
                    </View>
                    <Text style={([styles.subTitle], { fontWeight: "bold" })}>
                      Price: $10
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 15,
                      paddingVertical: 25,
                      lineHeight: 24,
                      color: "#0000008a",
                    }}>
                    Amelia accepted your offer.{"\n"}Please contact her as soon
                    as possible.
                  </Text>
                  <View>
                    <View>
                      <TouchableOpacity style={styles.contactModeView}>
                        <MaterialCommunityIcons
                          name="cellphone-android"
                          size={24}
                          color="#000000"
                        />
                        <Text style={styles.acceptText}>+1 415-486-4800</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.contactModeView}>
                        <FontAwesome
                          name="whatsapp"
                          size={24}
                          color="#000000"
                        />
                        <Text style={styles.acceptText}>WHATSAPP</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.contactModeView}>
                        <Foundation name="info" color="#000000" size={30} />
                        <Text style={styles.acceptText}>Offer Details</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <Text style={{ fontSize: 11, color: "#00000061" }}>
                    Now you can contact her on Whatsapp or by phone.{"\n"}A
                    short confirmation on the date details is recommended. Also,
                    we recommend putting her gift-money in an envenlop and give
                    her at begining of date.
                  </Text>
                </View>
              </View>
            </View>
          </Modal>
        </SafeAreaView>
      );
    }
  }
}
