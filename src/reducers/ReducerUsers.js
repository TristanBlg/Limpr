import types from '../actions/ActionTypes'

export const user = (state = {}, action) => {
  switch(action.type){
    case types.fetchUser:
      return action.user
    default:
      return state
  }
}
