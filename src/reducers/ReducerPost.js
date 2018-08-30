import types from '../actions/ActionTypes'

export const posts = (state = [], action) => {
  switch(action.type) {
    case types.fetchPosts:
      return action.posts
    default:
      return state
  }
}
