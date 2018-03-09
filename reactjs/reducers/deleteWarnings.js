import * as sampleActions from "../actions/warningActions"

const initialState = {
  show: false,
}

export default function deleteWarnings(state=initialState, action={}) {
  switch (action.type) {
  case sampleActions.DELETEWARNING:
    return {...state, show: !state.show};
  default:
    return state
  }
}