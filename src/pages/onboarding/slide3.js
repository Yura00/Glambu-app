import React from 'react'
import { View, Text } from 'react-native'

import styles from './onboarding.style'

export default function () {
  return (
    <View style={styles.slide}>
      <Text style={styles.title}>Offer money for a date</Text>
    </View>
  )
}