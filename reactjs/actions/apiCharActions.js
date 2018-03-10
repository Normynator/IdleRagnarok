import { request } from "../utils"

export const FETCH_API_CHARS = "FETCH_CHARS_TEST"
export const FETCH_API_CHARS_SUCCESS = "FETCH_API_CHARS_SUCCESS"
export const FETCH_API_CHARS_ERROR400 = "FETCH_API_CHARS_ERROR400"
export const FETCH_API_CHARS_ERROR500 = "FETCH_API_CHARS_ERROR500"
export const FETCH_API_CHARS_FAILURE = "FETCH_API_CHARS_FAILURE"
export function fetchCharsApi() {
  return function (dispatch) {
    let url = "http://127.0.0.1:8000/api/v1/chars/"
     // let url = "http://127.0.0.1:8000/api/v1/chars/"
    dispatch({type: FETCH_API_CHARS})
    return request(
      url, {},
      (json) => { dispatch({type: FETCH_API_CHARS_SUCCESS, res: json}) },
      (json) => { dispatch({type: FETCH_API_CHARS_ERROR400, res: json}) },
      (res) => { dispatch({type: FETCH_API_CHARS_ERROR500, res: res}) },
      (ex) => { dispatch({type: FETCH_API_CHARS_FAILURE, error: ex}) },
    )
  }
}