import types from '../actions/ActionTypes'

export const posts = (state = [], action) => {
  switch(action.type) {
    case types.FETCH_POSTS:
      return action.posts
    default:
      return state
  }
}
