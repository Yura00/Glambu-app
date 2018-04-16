import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '@theme';

export default StyleSheet.create({
  title: {
    fontSize: Fonts.size.h1,
    color: Colors.black,
    textAlign: 'left',
  },
  commentText: {
    color: Colors.commentText,
    fontSize: Fonts.size.h6
  },
  nameInput: {
    fontSize: Fonts.size.h4
  }
})