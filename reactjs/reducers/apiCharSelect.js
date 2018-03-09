import * as apiCharActions from "../actions/apiCharActions"

const initialState = {
  isLoadingRequest: false,
  result: undefined,
}

export default function apiCharSelect(state=initialState, action={}) {
  switch (action.type) {
  case apiCharActions.FETCH_API_CHARS:
    return {...state, isLoadingRequest: true}
  case apiCharActions.FETCH_API_CHARS_SUCCESS:
    return {...state, isLoadingRequest: false, result: action.res}
  case apiCharActions.FETCH_API_CHARS_ERROR400:
  case apiCharActions.FETCH_API_CHARS_ERROR500:
  case apiCharActions.FETCH_API_CHARS_FAILURE:
    return {...state, isLoadingRequest: false}
  default:
    return state
  }
}