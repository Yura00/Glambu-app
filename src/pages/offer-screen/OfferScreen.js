import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { GlobalStyle } from "@theme";
import OfferCard from "../../components/OfferCard";
import styles from "./Offerscreen.style";
import { Images } from "@theme";
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
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ offerList: OFFER_LIST });
    }, 2000);
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
              <OfferCard key={i} {...offer} />
            ))}
          </ScrollView>
        </SafeAreaView>
      );
    }
  }
}
