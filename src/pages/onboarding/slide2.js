import React from 'react'
import { View, Text } from 'react-native'

import styles from './onboarding.style'

export default function () {
  return (
    <View style={styles.slide}>
      <Text style={styles.title}>Choose who you{"\n"}would like to meet</Text>
    </View>
  )
}