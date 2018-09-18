import types from '../actions/ActionTypes'

const nowPlayingInitialState = {
  id: '',
  title: 'Title',
  user: 'Author',
  source: '',
  thumbnail: '',
  currentTime: 0,
  duration: 0,
  play: false
}

export const nowPlaying = (state = nowPlayingInitialState, action) => {
  switch(action.type){
    case types.SET_NOW_PLAYING:
      return {
        id: action.song.id,
        title: action.song.title,
        user: action.song.user,
        play: true,
        source: action.song.source,
        thumbnail: action.song.thumbnail,
        currentTime: action.song.currentTime,
        duration: action.song.duration
      }
    case types.TOGGLE_PLAYING:
      return {
        id: state.id,
        title: state.title,
        user: state.user,
        play: !state.play,
        source: state.source,
        thumbnail: state.thumbnail,
        currentTime: state.currentTime,
        duration: state.duration
      }
    case types.SET_CURRENT_TIME:
      return {
        id: state.id,
        title: state.title,
        user: state.user,
        play: state.play,
        source: state.source,
        thumbnail: state.thumbnail,
        currentTime: action.currentTime,
        duration: state.duration
      }
    default:
      return state
  }
}
