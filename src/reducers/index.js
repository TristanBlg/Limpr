import {combineReducers} from 'redux'
import {fullScreen, nowPlaying} from './ReducerControl'
import {posts} from './ReducerPost'
import {user} from './ReducerUsers'

const reducers = combineReducers({
  fullScreen,
  nowPlaying,
  posts,
  user,
})

export default reducers