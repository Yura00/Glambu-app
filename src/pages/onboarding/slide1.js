import React from "react";
import { View, Text, Image } from "react-native";
import { Images } from "@theme";

import styles from "./onboarding.style";

const Slide1 = () => {
  return (
    <View style={styles.slide}>
      <Text style={styles.title}>Find girls close to you</Text>
      <Image
        source={Images.IMG_ONBOARDING_SLIDE1}
        resizeMode="stretch"
        style={styles.slide1Img}
      />
    </View>
  );
};
export default Slide1;
