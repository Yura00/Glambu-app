import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';
import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from '../config/constants'

export default function navigationReducer(state, action) {
    console.log('navigationReducer', action.type)
    let nextState;
    switch (action.type) {
      case 'Login':
        // nextState = AppNavigator.router.getStateForAction(
        //   NavigationActions.back(),
        //   state
        // );
        nextState = AppNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'AppRoot' }),
          state
        );
        break;
      case 'Logout':
        nextState = AppNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'Login' }),
          state
        );
        break;
    case USER_LOGIN_SUCCESS:
        nextState = AppNavigator.router.getStateForAction(
          // NavigationActions.navigate({ routeName: 'RootDrawerNavigator' }),
          state
        );
        break;
      default:
        nextState = AppNavigator.router.getStateForAction(action, state);
        break;
    }
  
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
  }
  