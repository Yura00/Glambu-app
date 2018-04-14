import React from 'react'
import { View, Text, Image } from 'react-native'
import { Images } from '@theme'

import styles from './onboarding.style'

export default function () {
  return (
    <View style={styles.slide}>
      <Text style={styles.title}>Date your dream girl</Text>
      <Image
        source={Images.IMG_ONBOARDING_SLIDE4}
        resizeMode="stretch"
        style={styles.slide2Img}
      />
    </View>
  )
}