import types from '../actions/ActionTypes'

export const fullScreen = (state = false, action) => {
  switch(action.type){
    case types.TOGGLE_FULL_SCREEN:
      return !state
    default:
      return state
  }
}
