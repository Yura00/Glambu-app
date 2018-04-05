import { USER_LOGIN, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../config/constants'
const initialState = {
  isFetching: false,
  message: '',
  error: false
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        message: action.data
      }
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}