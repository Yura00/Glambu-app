import React from 'react'
import { View, Text, Image } from 'react-native'
import { Images } from '@theme'

import styles from './onboarding.style'

export default function () {
  return (
    <View style={styles.slide}>
      <Text style={styles.title}>Offer money for a date</Text>
      <Image
        source={Images.IMG_ONBOARDING_SLIDE3}
        resizeMode="stretch"
        style={styles.slide2Img}
      />
    </View>
  )
}