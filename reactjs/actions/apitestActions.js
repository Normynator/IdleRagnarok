import { request } from "../utils"

export const FETCH_API_TEST = "FETCH_API_TEST"
export const FETCH_API_TEST_SUCCESS = "FETCH_API_TEST_SUCCESS"
export const FETCH_API_TEST_ERROR400 = "FETCH_API_TEST_ERROR400"
export const FETCH_API_TEST_ERROR500 = "FETCH_API_TEST_ERROR500"
export const FETCH_API_TEST_FAILURE = "FETCH_API_TEST_FAILURE"
export function fetchApiTest() {
  return function (dispatch) {
    let url = "http://192.168.0.100:8000/api/v1/users/"
    dispatch({type: FETCH_API_TEST})
    return request(
      url, {},
      (json) => { dispatch({type: FETCH_API_TEST_SUCCESS, res: json}) },
      (json) => { dispatch({type: FETCH_API_TEST_ERROR400, res: json}) },
      (res) => { dispatch({type: FETCH_API_TEST_ERROR500, res: res}) },
      (ex) => { dispatch({type: FETCH_API_TEST_FAILURE, error: ex}) },
    )
  }
}