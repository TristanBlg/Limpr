import types from '../actions/ActionTypes'

export const posts = (state = [], action) => {
  switch(action.type) {
    case types.fetchAllPosts:
      return action.posts
    default:
      return state
  }
}
