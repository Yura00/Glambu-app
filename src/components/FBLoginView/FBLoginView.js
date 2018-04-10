import React from 'react';
import { View, Text } from 'react-native';

import styles from './FBLoginView.style'

export default () => (
  <View style={styles.container}>
    <Text style={styles.btnText}>Login with Facebook</Text>
  </View>
)
