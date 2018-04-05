import { combineReducers } from 'redux';

import navigationReducer from './navigationReducer'
import appData from './dataReducer'

const initialAuthState = { isLoggedIn: false };

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  navigationReducer,
  auth,
  appData
});

export default AppReducer;