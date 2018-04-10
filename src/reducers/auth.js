import { SET_USER_TOKEN } from '../config/constants'

const initialState = {
    token: '',
    email: '',
    tokenExpirationDate: '',
    userId: '',
    gender: ''
}

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_USER_TOKEN:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}