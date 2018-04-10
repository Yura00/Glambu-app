import { StyleSheet } from 'react-native'
import Colors from './colors'

const size = {
  h1: 32,
  h2: 24,
  h3: 18,
  h4: 20,
  h5: 14,
  h6: 12,
  default: 12,
  small: 10,
  mini: 8,
};
const style = StyleSheet.create({
  onboardingTitle: {
    fontSize: size.h2
  }
});

export default {
  size,
  style,
};