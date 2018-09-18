import types from '../actions/ActionTypes'

export const user = (state = {}, action) => {
  switch(action.type){
    case types.FETCH_USER:
      return action.user
    default:
      return state
  }
}
