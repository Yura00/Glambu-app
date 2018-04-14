import React from 'react'
import { View, Text, Image } from 'react-native'
import { Images } from '@theme'

import styles from './onboarding.style'

export default function () {
  return (
    <View style={styles.slide}>
      <Text style={styles.title}>Meet real gentle men</Text>
      <Image
        source={Images.IMG_ONBOARDING_SLIDE5}
        resizeMode="stretch"
        style={styles.slide1Img}
      />
    </View>
  )
}