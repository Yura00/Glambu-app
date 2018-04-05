
import { StyleSheet } from 'react-native'
import { Colors } from '../../themes';

export default StyleSheet.create({
  topBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  topBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: null,
    height: null,
    resizeMode: 'stretch'
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  mainContent: {
    flex: 1.3,
    padding: 30
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  touchIdContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  switch: {
    // backgroundColor: Colors.default
  },
  textTouchID: {
    color: 'gray',
    fontSize: 13
  },
  hyberLinkText: {
    color: Colors.default,
    fontSize: 13
  },
  textTerms: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    lineHeight: 20
  }
})