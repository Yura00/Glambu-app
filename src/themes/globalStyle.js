import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  pageTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center', // center header title for Android
    alignSelf:'center', // center header title for Android,
  },
  fullPageContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  pageContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 50
  }
});