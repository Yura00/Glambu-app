
import { USER_LOGIN } from '../config/constants'

export function userLogin(email, password) {
  return {
    type: USER_LOGIN,
    payload: { email, password },
  }
}