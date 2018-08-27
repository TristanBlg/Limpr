import types from './ActionTypes'

export const toggleFullScreen = () => ({
  type: types.toggleFullScreen,
})
export const togglePlaying = () => ({
  type: types.togglePlaying,
})
export const setNowPlaying = (title, author) => ({
  type: types.setNowPlaying,
  title: title,
  author: author,
})