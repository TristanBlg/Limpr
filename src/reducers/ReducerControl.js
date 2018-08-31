import types from '../actions/ActionTypes'

export const fullScreen = (state = false, action) => {
  switch(action.type){
    case types.toggleFullScreen:
      return !state
    default:
      return state
  }
}
