import React from "react";
import { View, Text, Image } from "react-native";
import { Images } from "@theme";

import styles from "./onboarding.style";

const Slide2 = () => {
  return (
    <View style={styles.slide}>
      <Text style={styles.title}>Choose who you{"\n"}would like to meet</Text>
      <Image
        source={Images.IMG_ONBOARDING_SLIDE2}
        resizeMode="stretch"
        style={styles.slide2Img}
      />
    </View>
  );
};
export default Slide2;
