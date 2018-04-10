
import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '@theme';

export default StyleSheet.create({
  topBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    resizeMode: 'stretch'
  },
  title: {
    fontSize: Fonts.size.h2
  },
  signinBtn: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    backgroundColor: Colors.white
  }
})