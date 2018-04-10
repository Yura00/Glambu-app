import React from 'react'
import { View, Text, Image } from 'react-native'
import { Grid, Col, Row } from 'react-native-easy-grid'
import { Images } from '@theme'

import styles from './onboarding.style'

export default function () {
  return (
    <View style={styles.slide}>
      <Text style={styles.title}>Find girls close to you</Text>
      <Image
        source={Images.IMG_ONBOARDING_SLIDE1}
        resizeMode="stretch"
        style={styles.slide1Img}
      />
    </View>
  )
}