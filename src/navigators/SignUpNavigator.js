import {StackNavigator} from 'react-navigation'
import {NameScreen} from '../pages'

const SignUpNavigator = StackNavigator(
  {
    NameScreen: { screen: NameScreen }
  },
  {
    navigationOptions: {
      header: null
    }
  }
)
export default SignUpNavigator;