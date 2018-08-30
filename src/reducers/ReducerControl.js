import types from '../actions/ActionTypes'

export const fullScreen = (state = false, action) => {
  switch(action.type){
    case types.toggleFullScreen:
      return !state
    default:
      return state
  }
}

export const nowPlaying = (state = {
  title: "Title",
  author: "Author",
  play: false
}, action) => {
  switch(action.type){
    case types.setNowPlaying:
      return {
        title: action.title,
        author: action.author,
        play: state.play
      }
    case types.togglePlaying:
      return {
        title: state.title,
        author: state.author,
        play: !state.play
      }
    default:
      return state
  }
}
