import { USER_LOGIN, SET_USER_TOKEN } from '../config/constants'

export function userLogin(email, password) {
  return {
    type: USER_LOGIN,
    payload: { email, password },
  }
}
export function setUserToken ( userData ) {
  console.log(userData)
  return {
    type: SET_USER_TOKEN,
    payload: userData
  }
}