import types from './ActionTypes'
import axios from 'axios'

const apiUrl = 'http://localhost:3000'

export const toggleFullScreen = () => ({
  type: types.toggleFullScreen,
})

export const togglePlaying = () => ({
  type: types.togglePlaying,
})

export const setNowPlayingToAction = song => ({
  type: types.setNowPlaying,
  song
})
export const setNowPlaying = (id, audio = '#player') => {
  return dispatch => {
    return axios.get(`${apiUrl}/songs/${id}`)
    .then(response => {
      dispatch(setNowPlayingToAction(response.data))
      document.querySelector(audio).load()
      document.querySelector(audio).play()
    })
    .catch(error => {
      throw(error)
    })
  }
}

export const updateTimeNowPlaying = currentTime => ({
  type: types.updateTimeNowPlaying,
  currentTime
})

export const fetchAllPostsToAction = posts => ({
  type: types.fetchAllPosts,
  posts
})
export const fetchAllPosts = () => {
  return dispatch => {
    return axios.get(`${apiUrl}/posts`)
    .then(response => {
      dispatch(fetchAllPostsToAction(response.data))
    })
    .catch(error => {
      throw(error)
    })
  }
}

export const fetchLogUserToAction = user => ({
  type: types.fetchUser,
  user
})
export const fetchLogUser = () => {
  return dispatch => {
    return axios.get(`${apiUrl}/user`)
    .then(response => {
      dispatch(fetchLogUserToAction(response.data))
    })
    .catch(error => {
      throw(error)
    })
  }
}
