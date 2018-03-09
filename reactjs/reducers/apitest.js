import * as apitestActions from "../actions/apitestActions"

const initialState = {
  isLoadingRequest: false,
  result: undefined,
}

export default function apitest(state=initialState, action={}) {
  switch (action.type) {
  case apitestActions.FETCH_API_TEST:
    return {...state, isLoadingRequest: true}
  case apitestActions.FETCH_API_TEST_SUCCESS:
    return {...state, isLoadingRequest: false, result: action.res}
  case apitestActions.FETCH_API_TEST_ERROR400:
  case apitestActions.FETCH_API_TEST_ERROR500:
  case apitestActions.FETCH_API_TEST_FAILURE:
    return {...state, isLoadingRequest: false}
  default:
    return state
  }
}