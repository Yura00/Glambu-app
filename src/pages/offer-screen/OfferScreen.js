import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView, Dimensions, TouchableOpacity, Modal } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { GlobalStyle, Colors, Images, Fonts } from "@theme";
import OfferCard from "../../components/OfferCard";
import ActionSheet from "../../components/ActionSheet";
import styles from "./Offerscreen.style";
import { OFFER_LIST } from "../../utils/constants";

const { width, height } = Dimensions.get("window");
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
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ offerList: OFFER_LIST });
    }, 2000);
  }
  onCall = (type, number) => {
    this.setState({ visiableAction: true })
  }
  render() {
    if (this.state.offerList == null) {
      return <EmptyOffer />;
    } else {
      return (
        <SafeAreaView
          style={[GlobalStyle.fullPageContainer, { paddingHorizontal: 5 }]}>
          <ScrollView contentContainerStyle={{paddingBottom: 10}}>
            {this.state.offerList.map((offer, i) => (
              <OfferCard key={i} {...offer} onCall={this.onCall} />
            ))}
          </ScrollView>
          <Modal
            animationType="slide"
            transparent
            visible={this.state.visiableAction}
            onRequestClose={() => this.setState({ visiableAction: false })}>
            <View style={[GlobalStyle.overlayView, { backgroundColor: "#0000007f" }]}>
              <View style={styles.actionsheet}>
                <TouchableOpacity style={styles.actionBtn}>
                  <MaterialCommunityIcons name="account-plus" color="#000000de" size={20}/>
                  <Text style={{fontSize: 16, color: '#000000de', marginLeft: 20}}>Creat New Contact</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionBtn}>
                  <Ionicons name="md-call" color="#000000de" size={20}/>
                  <Text style={{fontSize: 16, color: '#000000de', marginLeft: 20}}>Call</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionBtn}>
                  <MaterialCommunityIcons name="message" color="#000000de" size={20}/>
                  <Text style={{fontSize: 16, color: '#000000de', marginLeft: 20}}>Send SMS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionBtn}>
                  <MaterialCommunityIcons name="content-copy" color="#000000de" size={20}/>
                  <Text style={{fontSize: 16, color: '#000000de', marginLeft: 20}}>Copy</Text>
                </TouchableOpacity>
              </View>
            </View>
            
          </Modal>
        </SafeAreaView>
      );
    }
  }
}
